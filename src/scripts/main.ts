import { search } from "./api";
import { searchList } from "./config";
import { Collections, FormValue } from "./types";
import { setUi, elements, toggleLoader } from "./ui";
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

  console.log(searchResult.collection);
}

async function handleLoad() {
  const loadQuery = getRandomValueFromArray(searchList);
  const loadSearchResult = await search<Collections>(loadQuery);
  console.log(loadSearchResult);
}

elements.searchForm.addEventListener("submit", handleSearch);
window.addEventListener("load", handleLoad);
