export const USER_SEARCH_LIST_LOCALE_STORAGE_KEY = "default_nasa_api";

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

export const searchList = {
  get: getDefaultSearchList,
  set: (list: string[]) => {
    localStorage.setItem(
      USER_SEARCH_LIST_LOCALE_STORAGE_KEY,
      JSON.stringify(Array.from(new Set(list)))
    );
  },
  append: (value: string) => {
    const list = searchList.get();
    list.push(value);
    searchList.set(list);
  },
};

export const MAX_ROW_IMAGE_COUNT = 2;

export const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;
