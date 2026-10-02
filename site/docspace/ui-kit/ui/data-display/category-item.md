---
description: "Settings-page entry: a linked title, a line of explanation, an arrow, and an optional paid badge."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/category-item/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# CategoryItem

Settings-page entry: a linked title, a line of explanation, an arrow, and an optional paid
badge. It is one row of a settings index — the list that sends the reader on to General,
Security, Backup and the rest.

<ThemedImage alt="CategoryItem" width={1014} sources={{ light: require('./category-item--primary-light.png').default, dark: require('./category-item--primary-dark.png').default }} />

## Use this when / not when

- Use for a list of destinations, each with a name and a sentence saying what is behind it.
- Not for a bare link — [`Link`](../navigation/link.md) is the link itself, without the layout.
- Not for a block of arbitrary content — [`Card`](./card.md) takes children and a
  border; this component's shape is fixed.
- Not for a badge on its own — [`Badge`](./badge.md) is exported separately and takes
  any colour.
- **There is no icon slot and no selected state.** The only glyph is the trailing arrow, it is
  not settable, and nothing marks the row the reader is currently on.

## Import

```ts
import { CategoryItem } from "@onlyoffice/apps-ui-kit/components/category-item";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree. The description and arrow colours are declared only
under the `.light` and `.dark` classes the provider puts on `<body>`, and the paid badge picks
its gold in JavaScript from the same provider's context — which falls back to the light theme
rather than failing, so on a dark page without a provider the badge keeps its light colour.


## Stories

### Default

An entry as it sits in an index of destinations: the title link, the explanation under it and the arrow. Change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./category-item--default-light.png').default, dark: require('./category-item--default-dark.png').default }} />

### With Paid Badge

Marks a destination that needs a paid plan: the badge beside the title carries its own text (`withPaidBadge`, `badgeLabel`). The badge is not shown on a page whose path contains `management`.

<ThemedImage alt="With Paid Badge" width={1014} sources={{ light: require('./category-item--with-paid-badge-light.png').default, dark: require('./category-item--with-paid-badge-dark.png').default }} />

### Disabled State

For a destination the reader cannot open right now: the title is no longer a working link (`isDisabled`). Nothing else marks it in the light theme, where the disabled subtitle colour matches the normal one; in the dark theme the subtitle dims. Say in the subtitle why the entry is unavailable.

<ThemedImage alt="Disabled State" width={1014} sources={{ light: require('./category-item--disabled-state-light.png').default, dark: require('./category-item--disabled-state-dark.png').default }} />

### All Variants

The three looks side by side, as they appear together in one index:

- **General Settings** — a plain entry
- **Security** — the same entry with the paid badge (`withPaidBadge`)
- **Backup** — an unavailable entry whose title is no longer a link (`isDisabled`)

<ThemedImage alt="All Variants" width={616} sources={{ light: require('./category-item--all-variants-light.png').default, dark: require('./category-item--all-variants-dark.png').default }} />

### Right To Left

The same entry under a right-to-left interface: the title and subtitle align to the right, the badge follows the title leftwards and the arrow sits at the left end, mirrored to point left. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={1014} sources={{ light: require('./category-item--right-to-left-light.png').default, dark: require('./category-item--right-to-left-dark.png').default }} />

### Css Customization

The variables set on one wrapper -- they are listed under CSS variables on this page. **Files** shows the title, subtitle and arrow colours and the margin below it; **Security** is disabled (`isDisabled`) to show `--category-item-disabled-color` on its subtitle.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./category-item--css-customization-light.png').default, dark: require('./category-item--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { CategoryItem } from "@onlyoffice/apps-ui-kit/components/category-item";

export function SettingsIndex() {
  return (
    <CategoryItem
      title="Security"
      subtitle="Password strength, two-factor authentication, trusted mail domains"
      url="/settings/security"
      onClickLink={() => {}}
      withPaidBadge={false}
      badgeLabel=""
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `badgeLabel` | `string` | Text inside the paid badge. Required even when `withPaidBadge` is `false`; pass an empty string then. |
| `onClickLink` | `(e: MouseEvent<Element>) => void` | Called with the click event on the title link. Nothing prevents the browser from following `url` — call `preventDefault` yourself when you route in JavaScript. |
| `subtitle` | `string` | Explanatory line under the title, at 12px and no wider than 1024px. |
| `title` | `string` | Heading of the card, rendered as the text of a link at 16px. |
| `url` | `string` | Where the link points. It is dropped while `isDisabled` is set, which leaves an `<a>` with no `href`. |
| `withPaidBadge` | `boolean` | Shows the paid badge beside the title — unless the page's path contains `management`, where it is suppressed. Required, so pass `false` when there is no badge. |
| `dataTestId`? | `string` | Value of `data-testid` on the wrapper, and the stem of the title link's own `<dataTestId>_category_link`. Without it the link keeps the shared `link` id. |
| `isDisabled`? | `boolean` | Greys the subtitle and removes both `href` and `onClickLink` from the link. The title keeps its colour and the arrow still points right, so say elsewhere that the card is unavailable. |

</APITable>

## Recipes

### Disabled / read-only

`isDisabled` takes the `href` and the handler away, so the row does nothing. What it does
**not** do is look disabled: only the subtitle changes colour — and only in the dark theme —
while the title keeps its colour and the arrow still points onward. Say why the row is
unavailable in the subtitle.

```tsx
import { CategoryItem } from "@onlyoffice/apps-ui-kit/components/category-item";

export function SsoRow() {
  return (
    <CategoryItem
      title="Single sign-on"
      subtitle="Available on the Business plan — upgrade to configure SSO"
      url="/settings/sso"
      onClickLink={() => {}}
      isDisabled
      withPaidBadge
      badgeLabel="PRO"
    />
  );
}
```

### Routing in JavaScript

The click handler runs and then the browser follows `url`, because nothing calls
`preventDefault` for you. A client-side router needs it called explicitly, and `url` still has
to be the real path so that the row is a working link for middle-click and for a screen reader.

```tsx
import type { MouseEvent } from "react";

import { CategoryItem } from "@onlyoffice/apps-ui-kit/components/category-item";

export function GeneralRow({ go }: { go: (path: string) => void }) {
  const open = (e: MouseEvent<Element>) => {
    e.preventDefault();
    go("/settings/general");
  };

  return (
    <CategoryItem
      title="General"
      subtitle="Language, time zone and the portal name"
      url="/settings/general"
      onClickLink={open}
      withPaidBadge={false}
      badgeLabel=""
    />
  );
}
```

### A list of them

Each row brings a 20px bottom margin of its own, so a column with its own `gap` spaces them by
the sum of the two. Set `--category-item-margin` to `0` when you want the gap to be the only
spacing.

```tsx
import type { CSSProperties } from "react";

import { CategoryItem } from "@onlyoffice/apps-ui-kit/components/category-item";

const rows = [
  { title: "General", subtitle: "Language, time zone and the portal name" },
  { title: "Security", subtitle: "Passwords, two-factor authentication" },
  { title: "Backup", subtitle: "Automatic backup and restore" },
];

export function SettingsList() {
  return (
    <div
      style={
        {
          display: "flex",
          flexDirection: "column",
          gap: 24,
          "--category-item-margin": "0px",
        } as CSSProperties
      }
    >
      {rows.map((row) => (
        <CategoryItem
          key={row.title}
          title={row.title}
          subtitle={row.subtitle}
          url={`/settings/${row.title.toLowerCase()}`}
          onClickLink={() => {}}
          withPaidBadge={false}
          badgeLabel=""
        />
      ))}
    </div>
  );
}
```

## Behaviour the types don't state

- **A disabled row is still in the DOM as an `<a>`, without an `href`.** That element is not
  focusable and is not announced as a link, so the row disappears from keyboard and screen
  reader navigation rather than being announced as unavailable. Nothing sets `aria-disabled`.
- **`isDisabled` does not dim the title.** The stylesheet has a rule for a disabled title, but
  the class that would trigger it is never put on the link — only the subtitle is recoloured.
  Even that is invisible in the light theme, where the disabled colour is the same grey as the
  normal subtitle; only the dark theme dims it.
- **The click handler does not stop the navigation.** `onClickLink` runs and the browser then
  follows `url`; call `preventDefault` yourself when you route in JavaScript.
- **The paid badge is suppressed on management pages.** The component calls a helper that tests
  whether `window.location.pathname` contains `management`, and hides the badge when it does —
  a portal detail that also fires for any path of yours containing that word.
- **Every row brings a 20px bottom margin**, through `--category-item-margin`. Inside a flex or
  grid column it adds to your `gap` instead of replacing it.
- **The title link's colour has no fallback.** `--category-item-title-color` is read bare, so
  while it is unset the declaration is invalid and the title inherits the surrounding text
  colour rather than taking `Link`'s own. That is what makes the row's title look like a
  heading; set the variable if you want it to look like a link.
- **The arrow always renders**, disabled or not, and carries two literal class names for portal
  stylesheets — `settings_unavailable` on the arrow and `header` on the title link. It flips in
  RTL through the `.rtl` class the theme provider puts on `<body>`.
- **`--category-item-subheader-size` does nothing.** The class that reads it is not applied to
  any element the component renders.
- **The subtitle stops growing at 1024px**, whatever the width of its container.

## CSS variables

<APITable>

| Variable                            | Default                             | Effect                               |
| ----------------------------------- | ----------------------------------- | ------------------------------------ |
| `--category-item-title-color`       | none — the title inherits           | Colour of the title link             |
| `--category-item-description-color` | grey text; lighter grey in dark     | Colour of the subtitle               |
| `--category-item-arrow-color`       | black; white in dark                | Fill of the trailing arrow           |
| `--category-item-disabled-color`    | the subtitle's grey; dimmer in dark | Colour of the subtitle when disabled |
| `--category-item-margin`            | `20px`                              | Bottom margin of the whole row       |

</APITable>

## Accessibility

- The title is the link, and `Link` gives it an `aria-label` equal to that title, so it is
  announced by its own text.
- A disabled row loses its `href` and therefore its place in the tab order. There is no
  `aria-disabled` and no other announcement — if the reason matters, put it in the subtitle,
  which is the one part that visibly changes.
- The subtitle is a separate element with no `aria-describedby` tying it to the link; a screen
  reader reaching the link by keyboard hears the title alone.
- The arrow is an inline SVG with no `aria-hidden` and no title, so some screen readers announce
  it as an unlabelled graphic after the link.
- Nothing here manages focus, and the row is not a `listitem` — wrap the set in a `<ul>` of
  your own if the count matters to the reader.

## Test ids

<APITable>

| Element    | `data-testid`                                                      |
| ---------- | ------------------------------------------------------------------ |
| Wrapper    | the value of `dataTestId`; the attribute is absent without it      |
| Title link | `<dataTestId>_category_link`, or `link` when `dataTestId` is unset |
| Subtitle   | `text`, from the `Text` it renders into                            |

</APITable>

The paid badge carries `Badge`'s own ids (`badge`, `badge-inner`, `badge-text`).

## Related

- [`Card`](./card.md) — when the content is arbitrary rather than title-and-subtitle.
- [`Link`](../navigation/link.md) — the link on its own, without the row.
- [`Badge`](./badge.md) — the badge on its own, in any colour.
