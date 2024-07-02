import {type Data} from "@onlyoffice/eleventy-types"
import {Config} from "@onlyoffice/site-config"
import {h} from "preact"
import {data as sitemap} from "../Sitemap/xml.tsx"

export function data(): Data {
  return {
    layout: null,
    permalink: "/robots.txt",
    eleventyExcludeFromCollections: true
  }
}

export function render(): string {
  const c = Config.read()
  const s = sitemap()
  return `Sitemap: ${c.baseUrl}${s.permalink}\nUser-agent: *`
}
