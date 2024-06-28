import type {Context, Data} from "@onlyoffice/eleventy-types"
import {
  Home,
  HomeHero,
  HomeIn,
  HomeLink,
  HomeLinks,
  type HomePartParameters,
  HomePart,
  HomePreview,
  SearchClear,
  SearchContainer,
  SearchField,
  SearchPlaceholder
} from "@onlyoffice/site-kit"
import {CodePreview} from "@onlyoffice/ui-kit"
import {type JSX, h} from "preact"
import {SyntaxHighlight} from "@/components/syntax-highlight/syntax-highlight.ts"
import {Icon} from "@/internal/icon.tsx"
import {Image} from "@/internal/image.tsx"

export function data(): Data {
  return {
    title: "Welcome to ONLYOFFICE API",
    layout: "page"
  }
}

export function render({collections}: Context): JSX.Element {
  return <Home>
    <HomeHero>
      <h1>Welcome to ONLYOFFICE API</h1>
      <SearchContainer size="large">
        <SearchPlaceholder>Search in all sections</SearchPlaceholder>
        <SearchField label="Search" />
        <SearchClear label="Clear" />
      </SearchContainer>
    </HomeHero>
    {collections.navigation.map((item, i) => {
      return <HomePart key={i} variant={variant()}>
        <HomeIn>
          <h2><a href={item.link}>{item.title}</a></h2>
          <p>{item.summary}</p>
          <a href={item.link}>More</a>
          <HomeLinks>
            {item.children.map((item, i) => <HomeLink key={i}>
              <Icon src="rich32" name={item.icon} height={32} width={32} />
              <a href={item.link}>{item.title}</a>
            </HomeLink>)}
          </HomeLinks>
        </HomeIn>
        <HomePreview>
          <a href={item.link} title={item.title}></a>
          <Image alt="" src={item.preview} />
          <CodePreview>
            <pre><code><SyntaxHighlight syntax={item.sample.syntax}>
              {item.sample.code}
            </SyntaxHighlight></code></pre>
          </CodePreview>
        </HomePreview>
      </HomePart>

      function variant(): HomePartParameters["variant"] {
        if (i % 2 === 0) {
          return "default"
        }
        return "reverse"
      }
    })}
  </Home>
}
