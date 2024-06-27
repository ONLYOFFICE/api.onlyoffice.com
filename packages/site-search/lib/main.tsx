import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {useSlots} from "@onlyoffice/preact-slots"
import {CancelIcon, MagnifyingGlassIcon} from "@onlyoffice/ui-icons/poor/24.tsx"
import {Template} from "@onlyoffice/ui-kit"
import {type JSX, h} from "preact"

export interface SearchContainerProperties extends ChildrenIncludable {
  size?: "default" | "large"
}

export function SearchContainer({children, size}: SearchContainerProperties): JSX.Element {
  const [slots] = useSlots(children, {
    placeholder: SearchPlaceholder,
    field: SearchField,
    clear: SearchClear,
    template: SearchTemplate
  })

  return <search-container>
    <form class={cls()} id="search" action="https://duckduckgo.com/" method="get">
      <MagnifyingGlassIcon class="search__glass" width={24} height={24} />
      {slots.placeholder}
      {slots.field}
      <input name="sites" aria-hidden="true" hidden />
      {slots.clear}
    </form>
    {slots.template}
  </search-container>

  function cls(): string {
    let s = "search"
    if (size === "large") {
      s += " search_large"
    }
    return s
  }
}

export function SearchPlaceholder({children}: ChildrenIncludable): JSX.Element {
  return <span class="search__placeholder">{children}</span>
}

export interface SearchFieldProperties {
  label?: string
}

export function SearchField({label}: SearchFieldProperties): JSX.Element {
  return <input name="q" type="search" aria-label={label} autocomplete="off" />
}

export interface SearchClearProperties {
  label?: string
}

export function SearchClear({label}: SearchClearProperties): JSX.Element {
  return <button class="search__clear" type="button" value="clear" aria-label={label}>
    <CancelIcon width={16} height={16} />
  </button>
}

export function SearchTemplate({children}: ChildrenIncludable): JSX.Element {
  return <Template>{children}</Template>
}

export function SearchHidable({children}: ChildrenIncludable): JSX.Element {
  return <div data-search-container-hidable>{children}</div>
}

export interface SearchOutputProperties extends ChildrenIncludable {
  hidden?: boolean
}

export function SearchOutput({children, hidden = true}: SearchOutputProperties): JSX.Element {
  return <output data-search-container-output for="search" hidden={hidden}>{children}</output>
}
