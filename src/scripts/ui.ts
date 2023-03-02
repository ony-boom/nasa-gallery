const searchInput = document.getElementById("search") as HTMLInputElement;
const searchBtn = document.getElementById("search-btn") as HTMLButtonElement;

export function setUi() {
  searchInput.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement)?.value;
    searchBtn.disabled = !(value && value.trim());
  });
}
