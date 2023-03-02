const USER_SEARCH_LIST_LOCALE_STORAGE_KEY = "default_nasa_api";
const defaultSearchList = [
  "Earth",
  "solar system",
  "asteroid",
  "astronaut",
  "galaxy",
  "moon",
];

function getDefaultSearchList() {
  let defaultList: string[] = defaultSearchList.slice();

  let userPreference: string | string[] | null = localStorage.getItem(
    USER_SEARCH_LIST_LOCALE_STORAGE_KEY
  );
  if (userPreference && userPreference.trim()) {
    try {
      userPreference = JSON.parse(userPreference) as string[];
      if (Array.isArray(userPreference)) {
        defaultList = defaultList.concat(userPreference);
      }
    } catch {}
  }

  return defaultList;
}

export const searchList = getDefaultSearchList();
