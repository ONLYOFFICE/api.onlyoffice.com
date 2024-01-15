import type {Context, Data} from "@onlyoffice/eleventy-types"
import {
  Help,
  Part,
  PartChapter,
  PartChapters,
  PartHelp,
  PartHero
} from "@onlyoffice/site-kit"
import {SrOnly} from "@onlyoffice/ui-kit"
import {GithubIcon} from "@onlyoffice/ui-icons/rich/24.tsx"
import {type JSX, Fragment, h} from "preact"
import {Icon} from "@/internal/icon.tsx"

declare module "@onlyoffice/eleventy-types" {
  interface Context {
    help?: Help
  }
}

export interface Help {
  faq?: string
  forum?: string
  issues?: string
}

export function data(): Data {
  return {
    layout: "page"
  }
}

export function render({
  collections,
  description,
  help,
  page,
  title
}: Context): JSX.Element {
  return <Part>
    <PartHero>
      <h1>{title}</h1>
      <p>{description}</p>
    </PartHero>
    <PartChapters>
      <SrOnly><h2>Chapters</h2></SrOnly>
      {collections.navigation.map((item, i) => {
        if (!item.link.startsWith(page.url)) {
          return <Fragment key={i} />
        }
        return <Fragment key={i}>{item.children.map((item, i) => <PartChapter key={i}>
          <Icon src="rich64" name={item.icon} height={64} width={64} />
          <h3><a href={item.link}>{item.title}</a></h3>
          <p>{item.summary}</p>
        </PartChapter>)}</Fragment>
      })}
    </PartChapters>
    <PartHelp>
      <Help>
        <GithubIcon height={24} width={24} />
        <h2>Get Help</h2>
        <ul>
          <li>If you have any questions about ONLYOFFICE DocSpace, try the <a href={help.faq}>FAQ</a> section first.</li>
          <li>You can request a feature or report a bug by posting an issue on <a href={help.issues}>GitHub</a>.</li>
          <li>You can also ask our developers on <a href={help.forum}>ONLYOFFICE forum</a> (registration required).</li>
        </ul>
      </Help>
    </PartHelp>
  </Part>
}
