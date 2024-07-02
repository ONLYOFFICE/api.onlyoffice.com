import {type Data} from "@onlyoffice/eleventy-types"
import {Config} from "@onlyoffice/site-config"
import {type JSX, Fragment, h} from "preact"
import {list} from "@/config/sitemap.ts"

export function data(): Data {
  return {
    permalink: "/sitemap.xml",
    layout: "xml",
    eleventyExcludeFromCollections: true
  }
}

export function render(): JSX.Element {
  const c = Config.read()
  return <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {list().map((p) => {
      if (p.url === undefined) {
        return <></>
      }
      return <url>
        <loc>{c.baseUrl}{p.url}</loc>
        <lastmod>{p.date.toISOString()}</lastmod>
      </url>
    })}
  </urlset>
}
