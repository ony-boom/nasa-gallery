const searchInput = document.getElementById("search") as HTMLInputElement;
const searchBtn = document.getElementById("search-btn") as HTMLButtonElement;
const loader = document.querySelector<HTMLDivElement>(".loader");
const searchForm = document.getElementById("search-form") as HTMLFormElement;

export const elements = {
  searchInput,
  searchBtn,
  searchForm,
};

export function toggleLoader() {
  if (!loader) return;
  loader.classList.toggle("loader--visible");
  searchBtn.classList.toggle("navigation__search__button--hidden");
}

export function setUi() {
  searchInput.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement)?.value;
    searchBtn.disabled = !(value && value.trim());
  });
}
