import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";

// const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://images-api.nasa.gov";

export const api = wretch(BASE_URL).addon(QueryStringAddon);

export async function search<R = unknown>(query: string): Promise<R> {
  return await api.query({ q: query }).get("/search").json<R>();
}
