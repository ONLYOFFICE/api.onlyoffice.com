import {type Context, type Data} from "@onlyoffice/eleventy-types"
import {Fragment, type JSX, h} from "preact"
import {ArticleContent, ArticleSidebar} from "@/internal/chapter.tsx"
import {Service, ServiceToc} from "@/internal/service.tsx"

export function data(): Data {
  return {
    layout: "chapter",
    tempChapterNext: true,
  }
}

export function render(c: Context): JSX.Element {
  return <>
    <ArticleSidebar>
      {() => <ServiceToc />}
    </ArticleSidebar>
    <ArticleContent>
      {() => <Service url={c.page.url} />}
    </ArticleContent>
  </>
}
