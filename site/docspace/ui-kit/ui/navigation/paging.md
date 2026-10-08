---
description: "Previous and next buttons with a page selector between them and a page-size selector at the end."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/paging/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Paging

Previous and next buttons with a page selector between them and a page-size selector at the end.
It is a fully controlled strip: it holds no page number of its own and moves nothing — you give
it the options and the current values, and it tells you what was clicked.

<ThemedImage alt="Paging" width={1014} sources={{ light: require('./paging--primary-light.png').default, dark: require('./paging--primary-dark.png').default }} />

## Use this when / not when

- Use under a list that is fetched a page at a time, when the reader should be able to jump to a
  page and change the page size.
- Not for a list that grows as you scroll — use
  [`InfiniteLoader`](../status-components/infinite-loader.md).
- Not for a page selector on its own — that is a [`ComboBox`](../form-controls/combobox.md), which is
  what this component puts between the two buttons.
- **No labels are translated and none have defaults.** `previousLabel` and `nextLabel` are
  required strings; the same is true of every option's `label`.
- **There is no page arithmetic.** The component does not know how many pages there are, does not
  build the option lists and does not disable a button at the end of the range: work all of that
  out yourself and pass it in.

## Import

```ts
import { Paging } from "@onlyoffice/apps-ui-kit/components/paging";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree: the buttons and both drop-downs take their colours
from the custom properties the provider's `.light` and `.dark` classes declare, and without it
they render unstyled.

## Stories

### Default

The full strip under a list of 200 pages: step with Previous and Next, jump from the page selector, or change the page size, and watch the calls in the Actions panel. The story holds the current page and size itself, as your code must; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./paging--default-light.png').default, dark: require('./paging--default-dark.png').default }} />

### Disabled Previous

On the first page there is nowhere to go back to, so the Previous button is greyed out and ignores clicks (`disablePrevious`); the component does not work this out, you set it.

<ThemedImage alt="Disabled Previous" width={1014} sources={{ light: require('./paging--disabled-previous-light.png').default, dark: require('./paging--disabled-previous-dark.png').default }} />

### Disabled Next

On the last page the Next button is greyed out and ignores clicks (`disableNext`), while the page selector stays open for jumping back.

<ThemedImage alt="Disabled Next" width={1014} sources={{ light: require('./paging--disabled-next-light.png').default, dark: require('./paging--disabled-next-dark.png').default }} />

### Without Count Selector

For a list whose page size is fixed, the page-size selector at the end is left out (`showCountItem={false}`), leaving the two buttons and the page selector.

<ThemedImage alt="Without Count Selector" width={324} sources={{ light: require('./paging--without-count-selector-light.png').default, dark: require('./paging--without-count-selector-dark.png').default }} />

### Single Page

When the whole list fits on one page, both buttons are greyed out and the page selector is disabled with them (`disablePrevious` and `disableNext` together), while the page size can still be changed.

<ThemedImage alt="Single Page" width={1014} sources={{ light: require('./paging--single-page-light.png').default, dark: require('./paging--single-page-dark.png').default }} />

### Buttons Only

For a list whose length is not known, only the Previous and Next buttons remain once neither list of options is passed (`pageItems` and `countItems` left out).

<ThemedImage alt="Buttons Only" width={221} sources={{ light: require('./paging--buttons-only-light.png').default, dark: require('./paging--buttons-only-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The example raises the width cap of both buttons so their larger labels are not cut off, widens the page-size selector, and shows taller controls in a window narrower than 1024px.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./paging--css-customization-light.png').default, dark: require('./paging--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";

import type { TOption } from "@onlyoffice/apps-ui-kit/components/combobox";
import { Paging } from "@onlyoffice/apps-ui-kit/components/paging";

const PAGE_COUNT = 5;
const pages: TOption[] = Array.from({ length: PAGE_COUNT }, (_, i) => ({
  key: i + 1,
  label: `Page ${i + 1} of ${PAGE_COUNT}`,
}));
const sizes: TOption[] = [25, 50, 100].map((n) => ({
  key: n,
  label: `${n} per page`,
}));

export function ListFooter() {
  const [page, setPage] = useState(pages[0]);
  const [size, setSize] = useState(sizes[0]);
  const index = pages.indexOf(page);

  return (
    <Paging
      previousLabel="Previous"
      nextLabel="Next"
      pageItems={pages}
      countItems={sizes}
      selectedPageItem={page}
      selectedCountItem={size}
      disablePrevious={index === 0}
      disableNext={index === pages.length - 1}
      previousAction={() => setPage(pages[index - 1])}
      nextAction={() => setPage(pages[index + 1])}
      onSelectPage={setPage}
      onSelectCount={setSize}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `countItems` | `TOption[]` | One `{ key, label }` per page size. Typed as required, but passing nothing simply leaves the per-page selector out. |
| `nextAction` | `(e?: React.MouseEvent) => Promise<void> \| void` | Called when the next button is clicked. A promise it returns is not awaited: the component has no loading state of its own. |
| `nextLabel` | `string` | Label of the next-page button. Nothing here is translated, so pass the string already localised. |
| `pageItems` | `TOption[]` | One `{ key, label }` per page. Typed as required, but passing nothing simply leaves the page selector out. |
| `previousAction` | `(e?: React.MouseEvent) => Promise<void> \| void` | Called when the previous button is clicked. A promise it returns is not awaited: the component has no loading state of its own. |
| `previousLabel` | `string` | Label of the previous-page button. Nothing here is translated, so pass the string already localised. |
| `selectedCountItem` | `TOption` | The option the per-page selector displays. It is read on every render, so hold it in your own state and update it from `onSelectCount`. |
| `selectedPageItem` | `TOption` | The option the page selector displays. It is read on every render, so hold it in your own state and update it from `onSelectPage`. |
| `className`? | `string` | Added after the component's own class on the outer element. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"paging"`. |
| `disableNext`? | `boolean` | Disables the next button. Default: `false`. |
| `disablePrevious`? | `boolean` | Disables the previous button. The page selector is disabled only when `disableNext` is set as well. Default: `false`. |
| `id`? | `string` | Value of `id` on the outer element. |
| `onSelectCount`? | `(option: TOption) => Promise<void> \| void` | Called with the option that was picked in the per-page selector. Nothing changes until you update `selectedCountItem` yourself. |
| `onSelectPage`? | `(option: TOption) => Promise<void> \| void` | Called with the option that was picked in the page selector. Nothing moves until you update `selectedPageItem` yourself. |
| `openDirection`? | `"both" \| "bottom" \| "top"` | Which way both drop-downs open; `both` lets each one choose by the room under it. |
| `showCountItem`? | `boolean` | Whether the per-page selector is rendered at all. Default: `true`. |
| `style`? | `CSSProperties` | Inline style of the outer element, and where the `--paging-*` custom properties go. |

</APITable>

## Recipes

### Without the page-size selector

`showCountItem={false}` drops the trailing selector. `countItems` and `selectedCountItem` are
still required by the type, so pass the arrays you have — or an empty array and its first
element's stand-in.

```tsx
import { useState } from "react";

import type { TOption } from "@onlyoffice/apps-ui-kit/components/combobox";
import { Paging } from "@onlyoffice/apps-ui-kit/components/paging";

const pages: TOption[] = [
  { key: 1, label: "1 of 2" },
  { key: 2, label: "2 of 2" },
];
const noSizes: TOption = { key: 0, label: "" };

export function SimplePaging() {
  const [page, setPage] = useState(pages[0]);
  const index = pages.indexOf(page);

  return (
    <Paging
      showCountItem={false}
      previousLabel="Back"
      nextLabel="Forward"
      pageItems={pages}
      countItems={[]}
      selectedPageItem={page}
      selectedCountItem={noSizes}
      disablePrevious={index === 0}
      disableNext={index === pages.length - 1}
      previousAction={() => setPage(pages[index - 1])}
      nextAction={() => setPage(pages[index + 1])}
      onSelectPage={setPage}
    />
  );
}
```

### Loading a page

Neither action is awaited, so nothing about the strip changes while a page is being fetched.
Disable both buttons from your own flag if a second click during the request would be a problem.

```tsx
import { useState } from "react";

import type { TOption } from "@onlyoffice/apps-ui-kit/components/combobox";
import { Paging } from "@onlyoffice/apps-ui-kit/components/paging";

const pages: TOption[] = [
  { key: 1, label: "1 of 3" },
  { key: 2, label: "2 of 3" },
  { key: 3, label: "3 of 3" },
];
const sizes: TOption[] = [{ key: 25, label: "25 per page" }];

export function FetchingPaging({
  load,
}: {
  load: (key: number) => Promise<void>;
}) {
  const [page, setPage] = useState(pages[0]);
  const [busy, setBusy] = useState(false);
  const index = pages.indexOf(page);

  const go = async (next: TOption) => {
    setBusy(true);
    await load(Number(next.key));
    setPage(next);
    setBusy(false);
  };

  return (
    <Paging
      previousLabel="Previous"
      nextLabel="Next"
      pageItems={pages}
      countItems={sizes}
      selectedPageItem={page}
      selectedCountItem={sizes[0]}
      disablePrevious={busy || index === 0}
      disableNext={busy || index === pages.length - 1}
      previousAction={() => go(pages[index - 1])}
      nextAction={() => go(pages[index + 1])}
      onSelectPage={go}
    />
  );
}
```

## Behaviour the types don't state

- **The page selector is disabled only when both buttons are.** Its disabled flag is
  `disablePrevious ? disableNext : false` — so on the first page, with only `disablePrevious`
  set, the reader can still jump anywhere, which is usually what you want, but on the last page
  with both flags set the selector locks too.
- **Nothing moves by itself.** `previousAction`, `nextAction`, `onSelectPage` and `onSelectCount`
  report; `selectedPageItem` and `selectedCountItem` are read on every render. A component whose
  callbacks do not write back to that state will not change what it shows.
- **A returned promise is not awaited.** Both actions may be `async`, and the component neither
  waits for them nor shows anything while they run.
- **The page drop-down changes shape at six options.** Below six it sizes itself to its options;
  above six it gets a 200px scroll cap. At exactly six it gets neither, so it opens at its own
  width and to its full length.
- **`pageItems` and `countItems` are typed as required but are both guarded.** Passing neither
  leaves just the two buttons.
- **The buttons are capped at 111px and 86px.** They are told to fill their space and then
  limited by a maximum width, and the kit's button does not wrap its label, so a long translation
  is cut off rather than wrapped. Widen them through `--paging-prev-width` and
  `--paging-next-width`.
- **Below 600px the whole strip becomes a column** with a 20px gap: the buttons and the page
  selector on one row at full width, the page-size selector under them.

## CSS variables

Set them on a wrapper or through the `style` prop.

<APITable>

| Variable                  | Default    | Effect                                                                                                                                                |
| ------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--paging-gap`            | `8px`      | Gap between the button group and the page-size selector; below 600px the column gap is a fixed 20px instead                                           |
| `--paging-button-gap`     | `8px`      | Gap between the buttons and the page selector                                                                                                         |
| `--paging-font-size`      | `13px`     | Label size on the two buttons from 1024px up; narrower windows use a fixed 14px                                                                       |
| `--paging-button-padding` | `6px 28px` | Padding of the two buttons                                                                                                                            |
| `--paging-prev-width`     | `111px`    | Maximum width of the previous button; a longer label is cut off. Below 1024px the cap is this plus 4px                                                |
| `--paging-next-width`     | `86px`     | Maximum width of the next button; a longer label is cut off. Below 1024px the cap is this plus 3px                                                    |
| `--paging-nav-height`     | `40px`     | Height of the two buttons below 1024px; it also sizes the page-size selector's wrapper there, but the button inside both selectors stays a fixed 40px |
| `--paging-count-width`    | `125px`    | Width of the page-size selector from 600px up; narrower windows stretch it to full width                                                              |

</APITable>

## Accessibility

- The two buttons are real `<button>` elements with their labels as text, and they carry the
  `disabled` attribute when their flag is set, so they leave the tab order at the ends of the
  range.
- The strip itself is a plain `<div>`: it has no `role="navigation"` and no label. Wrap it in a
  `<nav aria-label="Pagination">` of your own when the page has more than one set of controls.
- Changing a page replaces the list above without announcing anything. Put the result range in a
  live region, or move focus to the top of the list after the fetch.
- The two selectors are the kit's combo box; its keyboard behaviour and ARIA are documented in
  [`ComboBox`](../form-controls/combobox.md).

## Test ids

<APITable>

| Element            | `data-testid`                        |
| ------------------ | ------------------------------------ |
| Outer element      | `paging`, overridden by `dataTestId` |
| Previous button    | `paging_previous_button`             |
| Next button        | `paging_next_button`                 |
| Page selector      | `paging_page_items_combobox`         |
| Page-size selector | `paging_count_items_combobox`        |

</APITable>

Only the outer one is settable.

## Related

- [`ComboBox`](../form-controls/combobox.md) — the selector this component places between its buttons.
- [`Button`](../interactive-elements/button.md) — the two buttons, if you would rather build the strip yourself.
- [`InfiniteLoader`](../status-components/infinite-loader.md) — for a list that loads as it scrolls instead.
