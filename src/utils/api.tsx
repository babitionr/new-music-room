import { keyToken, linkApi } from "@utils";
import { Responses } from "@models";

export const API = {
  init: () =>
    ({
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem(keyToken)
          ? "Bearer " + localStorage.getItem(keyToken)
          : "",
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

    const linkParam = Object.keys(params)
      .map(
        (key) =>
          key +
          "=" +
          encodeURIComponent(
            typeof params[key] === "object"
              ? JSON.stringify(params[key])
              : params[key]
          )
      )
      .join("&");
    const response = await fetch(
      linkApi + url + (linkParam && "?" + linkParam),
      config
    );

    const res: Responses<T> = await response.json();

    if (response.ok) return res;
    if (response.ok) {
      const response = await fetch(
        linkApi + url + (linkParam && "?" + linkParam),
        config
      );
      return (await response.json()) as Responses<T>;
    }

    throw {};
  },
  get: <T,>(url: string, params = {}, headers?: RequestInit["headers"]) =>
    API.responsible<T>(url, params, { ...API.init(), method: "GET" }, headers),
};

export const APIMP3 = {
  init: () =>
    ({
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem(keyToken)
          ? "Bearer " + localStorage.getItem(keyToken)
          : "",
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

    const linkParam = Object.keys(params)
      .map(
        (key) =>
          key +
          "=" +
          encodeURIComponent(
            typeof params[key] === "object"
              ? JSON.stringify(params[key])
              : params[key]
          )
      )
      .join("&");
    const response = await fetch(url + (linkParam && "?" + linkParam), config);

    const res: Responses<T> = await response.json();

    if (response.ok) return res;
    if (response.ok) {
      const response = await fetch(
        url + (linkParam && "?" + linkParam),
        config
      );
      return (await response.json()) as Responses<T>;
    }

    throw {};
  },
  get: <T,>(url: string, params = {}, headers?: RequestInit["headers"]) =>
    APIMP3.responsible<T>(
      url,
      params,
      { ...APIMP3.init(), method: "GET" },
      headers
    ),
};
