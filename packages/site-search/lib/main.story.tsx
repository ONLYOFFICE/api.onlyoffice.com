import {Content} from "@onlyoffice/ui-kit"
import {type Meta} from "@storybook/preact"
import {Fragment, type JSX, h} from "preact"
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

export default {
  title: "Site/Search"
} satisfies Meta

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
        content
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
