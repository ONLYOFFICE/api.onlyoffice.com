import {Content} from "@onlyoffice/ui-kit"
import type {Meta} from "@storybook/preact"
import {type JSX, Fragment, h} from "preact"
import content from "../../pagefind-fixtures/content/Robert Oppenheimer/Oppenheimer, Robert - Uncommon Sense (Birkhäuser, 1984)_djvu.txt?raw"
import {
  SearchClear,
  type SearchContainerProperties,
  SearchContainer,
  SearchField,
  SearchHidable,
  SearchOutput,
  SearchPlaceholder,
  SearchTemplate
} from "./main.tsx"

const meta: Meta = {
  title: "Site/Search"
}

export function Default({...props}: SearchContainerProperties): JSX.Element {
  return <SearchContainer {...props}>
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
}

export function WithContent(): JSX.Element {
  return <>
    <Default />
    <SearchHidable>
      <Content>
        <h1>Content</h1>
        {content.slice(3000, 6000).split("\n\n").map((c) => <p>{c}</p>)}
      </Content>
    </SearchHidable>
    <SearchOutput>
      <Content>
        <h1 aria-live="polite"><span data-search-container-counter></span> Results</h1>
        <ol data-search-container-results></ol>
      </Content>
    </SearchOutput>
  </>
}

export default meta
