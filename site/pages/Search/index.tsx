import type {Context, Data} from "@onlyoffice/eleventy-types"
import {
  Chapter,
  ChapterContent,
  ChapterNavigation,
  SearchClear,
  SearchContainer,
  SearchField,
  SearchOutput,
  SearchPlaceholder,
  SearchTemplate
} from "@onlyoffice/site-kit"
import {Breadcrumb, BreadcrumbCrumb, Content} from "@onlyoffice/ui-kit"
import {type JSX, Fragment, h} from "preact"
import {Tree} from "@/components/tree/tree.ts"
import {retrieve} from "@/config/sitemap.ts"

export function data(): Data {
  return {
    layout: "page",
    eleventyExcludeFromCollections: true
  }
}

export function render({content, ...ctx}: Context): JSX.Element {
  return <Chapter>
    <ChapterNavigation>
      <SearchContainer>
        <SearchPlaceholder>Type <kbd>/</kbd> to search</SearchPlaceholder>
        <SearchField label="Search" />
        <SearchClear label="Clear" />
        <SearchTemplate>
          <li>
            <a data-search-container-link></a>
            <p data-search-container-matches></p>
          </li>
        </SearchTemplate>
      </SearchContainer>
      <Navigation {...ctx} />
    </ChapterNavigation>
    <ChapterContent>
      <B url={ctx.page.url} />
      <SearchOutput hidden={false}>
        <Content>
          <h1 aria-live="polite"><span data-search-container-counter></span> Results</h1>
          <ol data-search-container-results></ol>
        </Content>
      </SearchOutput>
    </ChapterContent>
  </Chapter>
}

function Navigation(ctx): JSX.Element {
  const c = ctx.collections.navigation
  // todo: check if c is undefined, in ideal case it should never be undefined.
  return <Tree>
    {c.map((c) => <Tree.Group key={c.link}>
      <Tree.Link href={c.link} active={ctx.page.url === c.link}>{c.title}</Tree.Link>
      {c.children && <SubTree depth={1} {...ctx} chapter={c} />}
    </Tree.Group>)}
  </Tree>
}

function SubTree({chapter: c, depth, ...ctx}): JSX.Element {
  if (depth > 2) {
    return <></>
  }
  return <>{c.children && c.children.map((c) => depth + 1 > 2
    ? <Tree.Link href={c.link} active={ctx.page.url === c.link}>{c.title}</Tree.Link>
    : <Tree.Item expanded={ctx.page.url.startsWith(c.link)}>
      <Tree.Link href={c.link} active={ctx.page.url === c.link}>{c.title}</Tree.Link>
      {c.children && <SubTree depth={depth + 1} {...ctx} chapter={c} />}
    </Tree.Item>
  )}</>
}

interface BProperties {
  url: string
}

function B({url}: BProperties): JSX.Element | null {
  const a: JSX.Element[] = []

  let u = url
  while (true) {
    const p = retrieve(u)
    if (p === undefined) {
      break
    }
    a.unshift(<BreadcrumbCrumb href={p.url}>{p.title}</BreadcrumbCrumb>)
    if (p.parent === undefined) {
      break
    }
    u = p.parent
  }

  if (a.length === 0) {
    return null
  }

  return <Breadcrumb>{a}</Breadcrumb>
}
