import { search } from "./api";
import { searchList } from "./config";
import { Collections } from "./types";
import { setUi, elements, toggleLoader, showResult } from "./ui";
import { getRandomValueFromArray } from "./utils";

setUi();

async function handleSearch(event: Event) {
  toggleLoader();

  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const qyery = formData.get("query") as string;

  const searchResult = await search<Collections>(qyery);

  searchList.append(qyery);

  toggleLoader();

  showResult(searchResult.collection);
}

async function handleLoad() {
  toggleLoader();

  const loadQuery = getRandomValueFromArray(searchList.get());
  const loadSearchResult = await search<Collections>(loadQuery);

  toggleLoader();

  showResult(loadSearchResult.collection);
}

elements.searchForm.addEventListener("submit", handleSearch);
window.addEventListener("load", handleLoad);
