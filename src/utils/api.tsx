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
    const response = await fetch(linkApi + url, config);
    const res: Responses<T> = await response.json();
    if (response.ok) return res;
    throw {};
  },
  getHome: <T,>(url: string, params = {}, headers?: RequestInit["headers"]) =>
    API.responsible<T>(url, params, { ...API.init(), method: "GET" }, headers),
};
