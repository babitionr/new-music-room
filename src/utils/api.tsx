import { linkApi } from "@utils";
import { Responses } from "@models";

export const API = {
  init: () =>
    ({
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    } as RequestInit),
  responsible: async <T,>(
    url: string,
    params: { [key: string]: string } = {},
    config: RequestInit,
    headers: RequestInit["headers"] = {}
  ) => {
    config.headers = { ...config.headers, ...headers };

    const queryParams = new URLSearchParams(params).toString();
    const fullUrl = `${linkApi}${url}${queryParams ? `?${queryParams}` : ""}`;

    try {
      console.log("Sending request to:", fullUrl);
      const response = await fetch(fullUrl, config);
      console.log("Response status:", response.status);

      const res: Responses<T> = await response.json();
      if (response.ok) return res;

      console.error(
        "Response error:",
        response.status,
        response.statusText,
        res
      );
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  },
  getHome: <T,>(url: string, params = {}, headers?: RequestInit["headers"]) =>
    API.responsible<T>(url, params, { ...API.init(), method: "GET" }, headers),
  getSong: <T,>(url: string, params = {}, headers?: RequestInit["headers"]) =>
    API.responsible<T>(url, params, { ...API.init(), method: "GET" }, headers),
};

API.getHome("home")
  .then((data) => console.log("Received data:", data))
  .catch((error) => console.error("Error in getHome:", error));
