import { setUi } from "./ui";

setUi();

const searchForm = document.getElementById("search-form") as HTMLFormElement;
function handleSearch(event: Event) {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);

  const formProps = Object.fromEntries(Array.from(formData));

  console.log(formProps);
}

searchForm.addEventListener("submit", handleSearch);
