import { search } from "./api";
import { searchList } from "./config";
import { Collections, FormValue } from "./types";
import { setUi, elements, toggleLoader, showResult } from "./ui";
import { getRandomValueFromArray } from "./utils";

setUi();

async function handleSearch(event: Event) {
  toggleLoader();

  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);

  // @ts-ignore
  const formProps = Object.fromEntries(formData) as FormValue;

  const searchResult = await search<Collections>(formProps.query);
  toggleLoader();

  showResult(searchResult.collection);
}

async function handleLoad() {
  toggleLoader();

  const loadQuery = getRandomValueFromArray(searchList);
  const loadSearchResult = await search<Collections>(loadQuery);

  toggleLoader();

  showResult(loadSearchResult.collection);
}

elements.searchForm.addEventListener("submit", handleSearch);
window.addEventListener("load", handleLoad);
