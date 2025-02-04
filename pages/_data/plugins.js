import Fetch from "@11ty/eleventy-fetch";

const npmPackagesUrl =
  "https://registry.npmjs.org/-/v1/search?text=keywords:chai-plugin";

export default async function () {
  const json = (await Fetch(npmPackagesUrl, {
    duration: "1d",
    type: "json",
  })).objects;

  return json;
}
