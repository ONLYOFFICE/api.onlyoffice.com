---
description: "Sticky tab bar that scrolls sideways and renders the selected tab's content under itself."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/tabs/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Tabs

Sticky tab bar that scrolls sideways and renders the selected tab's content under itself. One
component draws two different bars — an underlined row and a segmented control — chosen with
`type`.

<ThemedImage alt="Tabs" width={1014} sources={{ light: require('./tabs--primary-light.png').default, dark: require('./tabs--primary-dark.png').default }} />

## Use this when / not when

- Use to split one page into sections the user switches between, where the bar should stay
  visible as the section scrolls.
- Not for a single pill or a row of filters: [`TabItem`](./tab-item.md) is the standalone
  one, and this component does not accept it.
- Not for navigation between pages of the application — render links, so the address bar and
  the back button keep working.
- Not for hiding a long form's steps; the bar gives no sense of order or progress.

## Import

```ts
import { Tabs, TabsTypes } from "@onlyoffice/apps-ui-kit/components/tabs";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`; the selected underline and
the segmented fill are both theme tokens.


## Stories

### Default

The underlined row, for splitting one page into sections the reader switches between: click a tab to show its content below the bar. **Contacts** is greyed out and ignores clicks (`isDisabled`). Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./tabs--default-light.png').default, dark: require('./tabs--default-dark.png').default }} />

### Secondary

The segmented control (`type={TabsTypes.Secondary}`), for switching between views of the same content; every tab takes the width of the widest label and the selected background slides to the clicked tab. Click a tab, then press Tab and use the arrow keys, Home, End and Enter to pick one from the keyboard.

<ThemedImage alt="Secondary" width={1014} sources={{ light: require('./tabs--secondary-light.png').default, dark: require('./tabs--secondary-dark.png').default }} />

### Scaled

The segmented control spread across the whole width of its container, every tab an equal share (`scaled`) — for a bar that should line up with the edges of the panel it sits in. The underlined row ignores `scaled`.

<ThemedImage alt="Scaled" width={1014} sources={{ light: require('./tabs--scaled-light.png').default, dark: require('./tabs--scaled-dark.png').default }} />

### Loading

While the labels are still arriving, the segmented bar is kept hidden so that it is not sized to placeholder text (`isLoading`); only the selected tab's content shows. Turn `isLoading` off in the Controls panel below and the bar appears, every tab as wide as the widest label. The component draws no loader of its own, and the underlined row ignores `isLoading`.

<ThemedImage alt="Loading" width={1014} sources={{ light: require('./tabs--loading-light.png').default, dark: require('./tabs--loading-dark.png').default }} />

### With Badges

A count after the label of **Overview** and **Documents** (the item's `badge`) — for telling the reader how many new entries wait behind a tab. The segmented control does not draw badges.

<ThemedImage alt="With Badges" width={1014} sources={{ light: require('./tabs--with-badges-light.png').default, dark: require('./tabs--with-badges-dark.png').default }} />

### With Icons

An icon before every label of the segmented control (the item's `iconName`, an SVG URL), recoloured with the label as a tab is selected or hovered — for tabs that are recognised faster by a picture. The underlined row does not draw icons.

<ThemedImage alt="With Icons" width={1014} sources={{ light: require('./tabs--with-icons-light.png').default, dark: require('./tabs--with-icons-dark.png').default }} />

### Animated Selection

Click **Documents**: its underline grows and the old content stays dimmed for the second and a half the tab's `onClick` promise takes, then the new content replaces it (`withAnimation`) — for tabs whose content is fetched when they are selected. The segmented control ignores `withAnimation`.

<ThemedImage alt="Animated Selection" width={1014} sources={{ light: require('./tabs--animated-selection-light.png').default, dark: require('./tabs--animated-selection-dark.png').default }} />

### With Sticky Header

Scroll the box: the heading and the tab bar stay at its top while the content moves under them (`stickyHeader`) — for a section title that should stay in view together with the bar. The heading sticks only with `stickyTop` set, here to `0px`; a larger value moves both further down. The segmented control does not draw a sticky header.

<ThemedImage alt="With Sticky Header" width={1014} sources={{ light: require('./tabs--with-sticky-header-light.png').default, dark: require('./tabs--with-sticky-header-dark.png').default }} />

### Overflowing Tabs

More tabs than a 360px column holds, for a bar whose tabs cannot be cut down:

- **Underlined row** — scrolls sideways; the edge that hides more tabs fades out
- **Segmented control** — adds an arrow at each end that selects the previous or next tab, not only scrolls to it (the arrows are left out on phones)

<ThemedImage alt="Overflowing Tabs" width={1019} sources={{ light: require('./tabs--overflowing-tabs-light.png').default, dark: require('./tabs--overflowing-tabs-dark.png').default }} />

### Right To Left

The overflowing bars in a right-to-left layout: the first tab sits at the right-hand end, the fade moves to the left edge, and the segmented arrows swap sides so the right one selects the previous tab. The wrapper carries `dir="rtl"` for the layout; the fade direction and the scroll correction come from the theme's `interfaceDirection` (the Direction toolbar).

<ThemedImage alt="Right To Left" width={1019} sources={{ light: require('./tabs--right-to-left-light.png').default, dark: require('./tabs--right-to-left-dark.png').default }} />

### Css Customization

Every variable either bar can show without overflowing, set on one wrapper -- the variables are listed under CSS variables on this page. The first instance is the underlined row, for the `--tabs-primary-*`, underline and weight variables; the second is the segmented control (`type={TabsTypes.Secondary}`), for the `--tabs-secondary-*` ones. Hover the tabs to see the hover colours.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./tabs--css-customization-light.png').default, dark: require('./tabs--css-customization-dark.png').default }} />

## Minimal example

This is a controlled component: hold the selected id and set it from `onSelect`.

```tsx
import { useState } from "react";
import { Tabs } from "@onlyoffice/apps-ui-kit/components/tabs";

const ITEMS = [
  { id: "general", name: "General", content: <p>General settings</p> },
  { id: "members", name: "Members", content: <p>Members</p> },
  { id: "history", name: "History", content: <p>History</p> },
];

export function RoomSettings() {
  const [selected, setSelected] = useState("general");

  return (
    <Tabs
      items={ITEMS}
      selectedItemId={selected}
      onSelect={(item) => setSelected(item.id)}
    />
  );
}
```

## Props


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `items` | `TTabItem[]` | The tabs, in the order they are drawn. Each carries its own content. |
| `selectedItemId` | `number \| string` | `id` of the selected tab. This is a controlled component; set it from `onSelect`. An empty value selects the first tab. |
| `className`? | `string` | Applied to the outermost element. |
| `hotkeysId`? | `string` | Suffix of the class the keyboard handler focuses, which turns the arrow-key navigation on. Secondary tabs only. |
| `id`? | `string` | Applied to the tab list on primary tabs, and to the outermost element on secondary ones. |
| `isLoading`? | `boolean` | Holds off the tab-width measurement until the labels are final. It renders no loader of its own. Secondary tabs only. |
| `layoutId`? | `string` | Shared `layoutId` of the sliding background, and the `id` of the tab list. Secondary tabs only. |
| `onSelect`? | `(element: TTabItem) => void` | Called with the whole tab object when a different tab is clicked. Clicking the selected one does nothing. |
| `scaled`? | `boolean` | Whether the tabs share the container's width equally instead of being measured from the longest label. Secondary tabs only. |
| `stickyHeader`? | `ReactNode` | Rendered in its own sticky strip above the tab bar, which the bar then sticks below. Primary tabs only. |
| `stickyTop`? | `string` | `top` of the sticky tab bar, as a CSS length. Without it the bar sticks to the top of the scrolling ancestor. |
| `style`? | `CSSProperties` | Applied to the outermost element as inline style. |
| `type`? | `TabsTypes` | Which of the two tab bars is drawn: an underlined row, or a segmented control. |
| `withAnimation`? | `boolean` | Whether selecting a tab animates the underline and awaits the item's `onClick` behind a loader. Primary tabs only. |
| `withoutStickyIntend`? | `boolean` | Whether the spacer under the tab bar is left out. Default: `false`. |

</APITable>

Each entry of `items`:


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `content` | `ReactNode` | What is rendered under the tab bar while this tab is the selected one. |
| `id` | `string` | Identifier of the tab. `selectedItemId` is matched against it, and it prefixes the tab's `data-testid`. |
| `name` | `ReactNode` | Text of the tab. |
| `badge`? | `ReactNode` | Rendered after the tab's text. Primary tabs only. |
| `iconName`? | `string` | URL of an SVG drawn before the text. Secondary tabs only. |
| `isDisabled`? | `boolean` | Whether the tab is greyed out and cannot be clicked. |
| `onClick`? | `() => void \| Promise<void>` | Called before `onSelect` when this tab is clicked. With `withAnimation` it is awaited and the body shows a loader meanwhile. |
| `value`? | `number` | Ignored. Nothing in the component reads this; it is a slot for the caller's own bookkeeping. |

</APITable>

### Enums

<APITable name="Enums">

| Enum        | Members                |
| ----------- | ---------------------- |
| `TabsTypes` | `Primary`, `Secondary` |

</APITable>

## Recipes

### The segmented bar

`type={TabsTypes.Secondary}` draws the pill-shaped control instead of the underlined row; the
selected background slides to the tab that is clicked. Only this type accepts `iconName`,
`scaled` and `hotkeysId`.

```tsx
import { useState } from "react";
import { Tabs, TabsTypes } from "@onlyoffice/apps-ui-kit/components/tabs";

const VIEWS = [
  { id: "list", name: "List", content: <p>List</p> },
  { id: "tiles", name: "Tiles", content: <p>Tiles</p> },
];

export function ViewSwitch() {
  const [view, setView] = useState("list");

  return (
    <Tabs
      type={TabsTypes.Secondary}
      items={VIEWS}
      selectedItemId={view}
      onSelect={(item) => setView(item.id)}
      hotkeysId="views"
      scaled
    />
  );
}
```

### Loading a tab's content on demand

With `withAnimation` the newly selected tab's underline grows from the left, the item's own
`onClick` is awaited, and the body is covered by a loader until it settles. Without it, `onClick` is called and not waited for.

```tsx
import { useState } from "react";
import { Tabs } from "@onlyoffice/apps-ui-kit/components/tabs";

export function LazyTabs() {
  const [selected, setSelected] = useState("summary");
  const [rows, setRows] = useState<string[]>([]);

  const load = async () => {
    const response = await fetch("/api/history");
    setRows((await response.json()) as string[]);
  };

  const items = [
    { id: "summary", name: "Summary", content: <p>Summary</p> },
    {
      id: "history",
      name: "History",
      onClick: load,
      content: <p>{rows.length} entries</p>,
    },
  ];

  return (
    <Tabs
      items={items}
      selectedItemId={selected}
      onSelect={(item) => setSelected(item.id)}
      withAnimation
    />
  );
}
```

## Behaviour the types don't state

- **Clicking the selected tab does nothing at all** — neither `onSelect` nor the item's
  `onClick` fires, so a tab cannot be used to re-run its own load.
- **An unknown `selectedItemId` selects nothing.** The id is matched by `findIndex`, so a value
  that is not in `items` leaves the bar with no tab marked and the body empty. A falsy id —
  `""` or `0` — is a special case and selects the first tab instead.
- **The two types are separate components behind one name.** `badge`, `stickyHeader` and
  `withAnimation` only exist on the primary bar; `iconName`, `layoutId`, `scaled`, `isLoading`
  and `hotkeysId` only on the secondary one. **Props belonging to the other type are spread onto
  the wrapper `<div>`**, where React reports them as unknown DOM attributes in the console.
- **`id` lands in a different place per type**: on the tab list for primary tabs, on the
  outermost element for secondary ones.
- **`isLoading` renders no loader.** It only holds off the measurement of the tab widths until
  the labels are final; drawing something while data loads is yours to do.
- **The bar is `position: sticky`, not fixed.** It sticks inside the nearest scrolling ancestor,
  and `stickyTop` is written straight into `top` — if nothing scrolls above it, the bar never
  moves. `withoutStickyIntend` removes the spacer element drawn under it.
- **The arrows on the segmented bar move the selection, not the scroll.** They call `onSelect`
  with the neighbouring item, and they only appear when the tabs overflow and the device is not
  a phone.
- **Keyboard navigation exists only on the segmented bar and only with `hotkeysId`.** Tab moves
  focus into the scroller, then the arrows move a focus ring and Enter or Space selects; Home
  and End jump to the ends. While that is active, a **window-level** key listener swallows
  PageUp, PageDown, Home, End, Space and the arrow keys.
- **The RTL scroll correction reads the interface direction from a context only the legacy
  `components/theme-provider` supplies.** Under `providers/theme` the value stays at its `"ltr"`
  default, so in a right-to-left interface the primary bar scrolls to the wrong end.
- **Primary tabs keep the rendered content in state**, refreshed by an effect, so the body lags
  the selection by one commit while an awaited `onClick` is in flight.
- **Secondary tabs measure the widest label once and give every tab that width**, capped at
  218px, unless `scaled` is set — then the tabs divide the container equally, and the overflow
  check measures the labels rather than the stretched tabs, so a row with room for every label
  shows no arrows.
- **`layoutId` is also the DOM `id` of the tab list**, as well as the shared id
  [framer-motion](https://www.npmjs.com/package/framer-motion) uses to slide the background
  between two bars.
- `TTabItem.value` is declared and never read.

## CSS variables

Set them on any ancestor.

<APITable name="CSS-variables">

| Variable                       | Default       | Effect                                                                                 |
| ------------------------------ | ------------- | -------------------------------------------------------------------------------------- |
| `--tabs-primary-height`        | `32px`        | Height of the underlined bar.                                                          |
| `--tabs-secondary-height`      | `36px`        | Height of the segmented bar.                                                           |
| `--tabs-primary-gap`           | `20px`        | Gap between underlined tabs.                                                           |
| `--tabs-secondary-gap`         | `4px`         | Gap between segmented tabs.                                                            |
| `--tabs-secondary-padding`     | `4px`         | Padding inside the segmented track.                                                    |
| `--tabs-secondary-radius`      | `5px`         | Corner radius of that track.                                                           |
| `--tabs-secondary-tab-radius`  | `3px`         | Corner radius of one segmented tab.                                                    |
| `--tabs-underline-thickness`   | `4px`         | Thickness of the selected underline.                                                   |
| `--tabs-underline-radius`      | `4px 4px 0 0` | Corner radius of that underline.                                                       |
| `--tabs-underline`             | theme token   | Colour of the line under the whole bar.                                                |
| `--tabs-text-weight`           | `600`         | Font weight of a label on the underlined bar; segmented labels stay at `600`.          |
| `--tabs-primary-bg`            | theme token   | Background behind either tab bar, and behind the sticky header.                        |
| `--tabs-secondary-bg`          | theme token   | Background of the segmented track and of its arrows.                                   |
| `--tabs-primary-text`          | theme token   | Label colour, underlined bar.                                                          |
| `--tabs-primary-active-text`   | theme token   | Selected label colour, underlined bar.                                                 |
| `--tabs-primary-hover-text`    | theme token   | Label colour of a hovered tab, underlined bar.                                         |
| `--tabs-secondary-text`        | theme token   | Label and icon colour, segmented bar.                                                  |
| `--tabs-secondary-active-text` | theme token   | Label and icon colour of the selected, hovered or keyboard-highlighted segmented tab.  |
| `--tabs-secondary-active-bg`   | theme token   | Background of the selected segmented tab.                                              |
| `--tabs-secondary-hover-bg`    | theme token   | Background of a hovered or keyboard-highlighted segmented tab, and of a hovered arrow. |
| `--tabs-secondary-hover-icon`  | theme token   | Icon colour of a hovered arrow.                                                        |
| `--tabs-fade`                  | theme token   | Colour the scroll edges fade to.                                                       |

</APITable>

`--tabs-secondary-tab-radius` also rounds the sliding selected background, and
`--tabs-underline` draws only under the underlined bar. `--tabs-fade` shows only while the tabs
overflow, and `--tabs-secondary-hover-icon` only while the segmented tabs overflow and so have
arrows.

## Accessibility

- **The bar has no tab semantics.** Tabs are `<div>`s with click handlers: no `role="tablist"`,
  no `role="tab"`, no `aria-selected`, and the body is not a `tabpanel`. A screen reader reads
  a run of text followed by the content, with nothing tying them together.
- **Only the segmented bar can be operated from the keyboard, and only when `hotkeysId` is
  set.** The underlined bar has no keyboard path at all.
- On the segmented bar, Tab moves focus to the tab list and switches the arrow-key mode on;
  pressing Tab again switches it off and leaves focus on the list. The arrows move the highlight
  and wrap around at either end, Home and End jump to the first and last tab, and Enter or Space
  selects the highlighted one.
- That keyboard mode also takes over window-level keys while it is focused, which can swallow
  keys another part of the page was listening for.
- A disabled item is greyed and made inert in CSS; nothing announces that it is unavailable.
- The horizontal scroller is a [`Scrollbar`](../layout/scrollbar.md) — overflowing tabs are
  reachable by dragging or with the arrows, not by tabbing.

## Test ids

<APITable name="Test-ids">

| Element               | `data-testid` |
| --------------------- | ------------- |
| A tab, underlined bar | `<id>_tab`    |
| A tab, segmented bar  | `<id>_subtab` |

</APITable>

`<id>` is the item's own `id`. The bar itself sets none; query it by `className`.

## Related

- [`TabItem`](./tab-item.md) — the standalone pill, not used by this component.
- [`Scrollbar`](../layout/scrollbar.md) — what scrolls the bar sideways.
- [`Badge`](../data-display/badge.md) — what usually goes in an item's `badge`.
