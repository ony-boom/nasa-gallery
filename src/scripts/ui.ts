import featherIcons from "feather-icons";
import { Collection, Gallery, MediaType } from "./types";
import { MAX_ROW_IMAGE_COUNT, userLocale } from "./config";
import { getRandomValueFromArray, isTrue } from "./utils";
import {
	getVideoCollectionMetadata,
	getImageCollectionData,
	getCollections,
} from "./api";

const searchInput = document.getElementById("search") as HTMLInputElement;
const searchBtn = document.getElementById("search-btn") as HTMLButtonElement;
const loader = document.querySelector<HTMLDivElement>(".loader");
const searchForm = document.getElementById("search-form") as HTMLFormElement;
const resultOutput = document.getElementById("result-output") as HTMLElement;
const mediaPlayer = document.getElementById("media-player") as HTMLElement;
const mediaPlayerContent = mediaPlayer.querySelector(".row") as HTMLDivElement;
const bigLoader = document.querySelector<HTMLDivElement>(".big-loader");
const backButton = document.querySelector<HTMLButtonElement>(".back");

export const elements = {
	searchInput,
	searchBtn,
	searchForm,
};

function hideMediaPlayer() {
	mediaPlayerContent.innerHTML = "";

	mediaPlayer.classList.remove("media-player__visible");
}

export async function showMediaPlayer(event: Event) {
	event.preventDefault();

	mediaPlayer.classList.add("media-player__visible");

	const linkElement = event.currentTarget as HTMLAnchorElement;

	const collectionIsVideo = linkElement.dataset.isVideo;

	const collection = await getCollections(linkElement.href);

	toggleBigLoader();

	const imageContainer = document.createElement("div");
	imageContainer.className = ".media-player__element";

	if (isTrue(collectionIsVideo)) {
		const { videoData } = await getVideoCollectionMetadata(collection);
		const videoElement = document.createElement("video");
		videoElement.crossOrigin = "anonymous";

		if (videoData.subtitle) {
			const subtitleElement = document.createElement("track");

			subtitleElement.label = "English";
			subtitleElement.kind = "subtitles";
			subtitleElement.srclang = "en";
			subtitleElement.default = true;
			subtitleElement.src = videoData.subtitle;

			videoElement.append(subtitleElement);
		}

		videoElement.poster =
			videoData.links.find((link) => link.includes("thumb")) || "";

		videoElement.controls = true;

		for (const source of videoData.links) {
			const sourceElement = document.createElement("source");
			sourceElement.src = source;
			videoElement.append(sourceElement);
		}
		imageContainer.append(videoElement);
	} else {
		const { images } = await getImageCollectionData(collection);

		const imageElement = document.createElement("img");

		imageElement.src = images;
		imageContainer.append(imageElement);
	}
	mediaPlayerContent.append(imageContainer);
}

function toggleBigLoader() {
	bigLoader?.classList.toggle("hidden");
}

export function showError(errType: "OFFLINE") {
	switch (errType) {
		case "OFFLINE":
			resultOutput.innerHTML = `
        <div class="row error">
            <h2>
                You are offline, can't fetch data!
            </h2>
        </div>
      `;
	}
}

export function toggleLoader() {
	if (!loader) return;
	loader.classList.toggle("loader--visible");
	searchBtn.classList.toggle("navigation__search__button--hidden");
}

export function setUi() {
	searchInput.addEventListener("input", (event) => {
		const value = (event.target as HTMLInputElement)?.value;
		searchBtn.disabled = Boolean(!value?.trim());
	});

	featherIcons.replace();
}

function getRandomRatio() {
	const ratioList = ["1 / 2", "16 / 9", "1 / 1"];
	return getRandomValueFromArray(ratioList);
}

function createGalleryColumn(data: Gallery[]) {
	const galleryColumnElement = document.createElement("div");
	galleryColumnElement.className = "gallery-row";

	for (const datum of data) {
		const collectionLinkElement = document.createElement("a");
		const collectionFigureElement = document.createElement("figure");
		const collectionFigCaptionElement = document.createElement("figcaption");
		const collectionImagePreviewElement = document.createElement("img");

		const playIcon = document.createElement("div");

		const randomRatio = getRandomRatio();

		collectionLinkElement.setAttribute("style", `--ratio: ${randomRatio}`);
		collectionLinkElement.dataset.size = randomRatio;
		collectionLinkElement.dataset.isVideo = String(datum.isVideo);

		collectionLinkElement.href = datum.collectionLink;
		collectionLinkElement.target = "_blank";
		collectionLinkElement.className = "gallery-row__item";

		collectionImagePreviewElement.loading = "lazy";
		collectionFigureElement.className = "gallery__thumb";
		collectionImagePreviewElement.className = "gallery__image";
		collectionFigCaptionElement.className = "gallery__caption";
		playIcon.className = "playIcon";

		playIcon.innerHTML = `
      <i data-feather="play"></i>
    `;

		collectionImagePreviewElement.src = datum.previewImage;
		collectionFigCaptionElement.innerHTML = `
      <div class="gallery-row__item__title">
        <h3>
            ${datum.title}
            <span>At ${datum.center} . ${datum.photographer || ""}
        </h3>
        <p>
          ${Intl.DateTimeFormat(userLocale, {
			day: "numeric",
			month: "long",
			year: "numeric",
		}).format(new Date(datum.date_created))}
        </p>
      </div>
      
      <p class="gallery-row__item__description">
        ${datum.description}
      </p>
    `;

		collectionFigureElement.append(collectionImagePreviewElement);
		collectionFigureElement.append(collectionFigCaptionElement);
		collectionLinkElement.append(collectionFigureElement);
		galleryColumnElement.append(collectionLinkElement);

		if (datum.isVideo) {
			collectionLinkElement.append(playIcon);
			featherIcons.replace({
				stroke: "#000",
			});
		}

		collectionLinkElement.title = "Go to collection";

		collectionLinkElement.addEventListener("click", showMediaPlayer);
	}

	return galleryColumnElement;
}

export function showResult(collection: Collection) {
	resultOutput.innerHTML = "";

	const { items } = collection;
	let temporaryGallery: Gallery[] = [];

	itemLoop: for (const item of items) {
		if (temporaryGallery.length === MAX_ROW_IMAGE_COUNT) {
			const galleryColumn = createGalleryColumn(temporaryGallery);
			resultOutput.append(galleryColumn);
			temporaryGallery.splice(0, temporaryGallery.length);
		}

		let isVideo = false;
		let collectionInfo: Gallery | undefined;
		const previewImage = item.links?.find(
			(link) => link.rel === "preview",
		)!.href;

		for (const mediaData of item.data) {
			if (mediaData.media_type === MediaType.Audio) continue itemLoop;

			isVideo = mediaData.media_type === MediaType.Video;

			collectionInfo = {
				...mediaData,
				collectionLink: item.href,
				isVideo,
				previewImage,
			};
		}

		temporaryGallery.push(collectionInfo!);
	}
}

backButton?.addEventListener("click", hideMediaPlayer);
