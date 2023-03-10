import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";
import { showError } from "./ui";
import { ImageMetadata, MediaType, VideoMetadata } from "./types";

// const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://images-api.nasa.gov";

export const api = wretch(BASE_URL).addon(QueryStringAddon);

export async function search<R = unknown>(query: string): Promise<R> {
  return await api
    .query({ q: query })
    .get("/search")
    .fetchError(() => {
      showError("OFFLINE");
    })
    .json<R>();
}

export async function getCollections(collectionLink: string) {
  return wretch().get(collectionLink).json<string[]>();
}

function getCollectionMetadata(collections: string[], type: MediaType) {
  const jsonMetaDataLink = collections.find((collectionLink) =>
    collectionLink.endsWith(".json")
  )!;

  if (type === MediaType.Video) {
    const videoFileLinks = collections.filter((file) => file.endsWith(".mp4"))!;
    const subtitles = collections.find(
      (file) =>
        file.endsWith("srt") || file.endsWith("ass") || file.endsWith("vtt")
    );

    return {
      jsonMetaDataLink,
      videoFileLinks,
      subtitles,
    };
  } else {
    const imageFileLinks = collections.filter(
      (file) => !file.endsWith(".json")
    )!;

    return {
      imageFileLinks,
      jsonMetaDataLink,
    };
  }
}

export async function getVideoCollectionMetadata(collections: string[]) {
  const videoData = getCollectionMetadata(collections, MediaType.Video);
  const metadata = await wretch()
    .get(videoData.jsonMetaDataLink)
    .json<VideoMetadata>();

  return {
    videoData: {
      links: videoData.videoFileLinks!,
      subtitle: videoData.subtitles,
    },
    metadata,
  };
}

export async function getImageCollectionData(collections: string[]) {
  const imageData = getCollectionMetadata(collections, MediaType.Image);
  const metadata = await wretch()
    .get(imageData.jsonMetaDataLink)
    .json<ImageMetadata>();

  return {
    metadata,
    images: imageData.imageFileLinks![0],
  };
}
