---
description: "Square icon for an MCP server: its logo, or the first letter of its name on a grey tile."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/mcp-icon/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# MCPIcon

Square icon for an MCP server: its logo, or the first letter of its name on a grey tile. Four
fixed sizes, and a fallback that takes over by itself when the image fails to load.

<ThemedImage alt="MCPIcon" width={34} sources={{ light: require('./mcp-icon--primary-light.png').default, dark: require('./mcp-icon--primary-dark.png').default }} />

## Use this when / not when

- Use in a list of Model Context Protocol servers, or anywhere a third-party integration is shown
  by name and needs a square mark.
- Not for a room — use [`RoomIcon`](./room-icon.md), which takes two initials, a colour
  of your choosing and the room's own logo object.
- Not for a person — use [`Avatar`](./avatar.md).
- Not as a loading placeholder — use [`RectangleSkeleton`](../skeletons/rectangle.md).

**The tile has one colour.** There is no per-server palette: the letter sits on the kit's grey
unless you set `--mcp-icon-bg` yourself.

## Import

```ts
import {
  MCPIcon,
  MCPIconSize,
} from "@onlyoffice/apps-ui-kit/components/mcp-icon";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree for the dark theme, where the tile drops to 10%
opacity. Without a provider it renders in its light colours.

## Stories

### Default

A server with no image of its own: the first letter of its name on a grey tile. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={34} sources={{ light: require('./mcp-icon--default-light.png').default, dark: require('./mcp-icon--default-dark.png').default }} />

### With Image

Use when the server has a logo: the image replaces the letter and fills the whole square (`imgSrc`).

<ThemedImage alt="With Image" width={64} sources={{ light: require('./mcp-icon--with-image-light.png').default, dark: require('./mcp-icon--with-image-dark.png').default }} />

### All Sizes

Pick the size that matches the row it sits in: 16px (Small), 24px (Medium), 32px (Big) and 48px (Large), the letter and the corner radius growing with it (`size`).

<ThemedImage alt="All Sizes" width={213} sources={{ light: require('./mcp-icon--all-sizes-light.png').default, dark: require('./mcp-icon--all-sizes-dark.png').default }} />

### All Sizes With Image

The same four sizes with an image: it is scaled to the square, and no tile is drawn behind it (`imgSrc`).

<ThemedImage alt="All Sizes With Image" width={221} sources={{ light: require('./mcp-icon--all-sizes-with-image-light.png').default, dark: require('./mcp-icon--all-sizes-with-image-dark.png').default }} />

### Broken Image Fallback

Pass a server's image URL without checking it first: when it fails to load, the letter on its tile takes its place (`imgSrc`).

<ThemedImage alt="Broken Image Fallback" width={34} sources={{ light: require('./mcp-icon--broken-image-fallback-light.png').default, dark: require('./mcp-icon--broken-image-fallback-dark.png').default }} />

### With Image Node

Use for an icon your bundler has already inlined as a component: the element is drawn in place of the letter, and nothing replaces it if it is empty (`imgNode`).

<ThemedImage alt="With Image Node" width={64} sources={{ light: require('./mcp-icon--with-image-node-light.png').default, dark: require('./mcp-icon--with-image-node-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. The four sizes share one wrapper that sets all five variables: a round, semi-transparent blue tile with a regular-weight white letter.

<ThemedImage alt="Css Customization" width={213} sources={{ light: require('./mcp-icon--css-customization-light.png').default, dark: require('./mcp-icon--css-customization-dark.png').default }} />

## Minimal example

```tsx
import {
  MCPIcon,
  MCPIconSize,
} from "@onlyoffice/apps-ui-kit/components/mcp-icon";

export function ServerMark() {
  return <MCPIcon title="Hugging Face" size={MCPIconSize.Medium} />;
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `title` | `string` | Name of the server. Only its first character is drawn, and only while there is no image; it is not an accessible name. |
| `className`? | `string` | Added before the component's own classes, on the outer element. |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"mcp-icon"`. |
| `imgNode`? | `ReactNode` | Image as a node, used instead of `imgSrc` when both are set. It gets no load-failure fallback. |
| `imgSrc`? | `string` | Image to draw instead of the letter. A failure to load falls back to the letter on its own. |
| `size`? | `MCPIconSize` | One of the four square sizes: 16, 24, 32 or 48px, each with its own font size and corner radius. Default: `MCPIconSize.Large`. |

</APITable>

### Enums

<APITable>

| Enum          | Members                           |
| ------------- | --------------------------------- |
| `MCPIconSize` | `Small`, `Medium`, `Big`, `Large` |

</APITable>

## Recipes

### A row of servers, letter fallback included

Pass the URL and forget about it: a broken image swaps itself for the letter, and the state
resets when `imgSrc` changes, so a list that re-sorts does not stay stuck on the fallback.

```tsx
import {
  MCPIcon,
  MCPIconSize,
} from "@onlyoffice/apps-ui-kit/components/mcp-icon";

type Server = { id: string; name: string; iconUrl?: string };

export function ServerList({ servers }: { servers: Server[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {servers.map((server) => (
        <li
          key={server.id}
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <MCPIcon
            title={server.name}
            imgSrc={server.iconUrl}
            size={MCPIconSize.Big}
          />
          <span>{server.name}</span>
        </li>
      ))}
    </ul>
  );
}
```

### An inline SVG instead of a URL

`imgNode` takes a node, which is how you pass an icon your bundler has already inlined. It wins
over `imgSrc`, and it has no failure path — whatever you give it is what renders.

```tsx
import {
  MCPIcon,
  MCPIconSize,
} from "@onlyoffice/apps-ui-kit/components/mcp-icon";

export function LocalServerMark() {
  return (
    <MCPIcon
      title="Local"
      size={MCPIconSize.Small}
      imgNode={
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <rect width="16" height="16" rx="3" />
        </svg>
      }
    />
  );
}
```

## Behaviour the types don't state

- **The grey tile is drawn only behind the letter.** It is a `::before` on the text variant, so
  an icon with an image has no background at all — and because the corner radius is not clipped
  (`overflow` is never set), a square image keeps its square corners whatever `--mcp-icon-radius`
  says. Round your own artwork.
- **The image fills the box exactly**, `width` and `height` inherited from the tile, with no
  `object-fit` — a non-square image is stretched, not letterboxed.
- **`imgNode` wins over `imgSrc`** when both are given, and it is never replaced by the letter:
  the failure fallback only watches the `<img>`'s `error` event.
- **`title` is used for one character and nothing else.** It is uppercased, taken with `at(0)`
  — so a leading space or emoji is what you get — and an empty string leaves the tile blank
  rather than falling back to anything.
- **The sizes are fixed and come with their own typography**: 16px at 11px text, 24px at 11px,
  32px at 14px, 48px at 24px. Only the radius is a variable; the box cannot be resized.
- **The tile stacks with `z-index: -1` on its own background**, which means a `z-index` of your
  own on the icon creates a stacking context and hides it.

## CSS variables

<APITable>

| Variable             | Default                               | Effect                                                                                           |
| -------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `--mcp-icon-bg`      | `#a3a9ae`                             | Colour of the tile behind the letter; an icon with an image has no tile                          |
| `--mcp-icon-color`   | `#ffffff`                             | Colour of the letter                                                                             |
| `--mcp-icon-opacity` | `1`, `0.1` in dark                    | Opacity of the tile; once set, it replaces the theme's value in both themes                      |
| `--mcp-icon-weight`  | `700`                                 | Weight of the letter                                                                             |
| `--mcp-icon-radius`  | `3px` / `4px` / `6px` / `6px` by size | Corner radius of the tile; once set, one value for every size, and an image is not clipped to it |

</APITable>

## Accessibility

- The outer element is a `<div>` with no role and no ARIA, and the letter is rendered as text,
  so a screen reader announces a bare "H" next to whatever else the row says.
- The `<img>`'s `alt` is the fixed English string `"mcp icon"`, untranslated and not settable
  through a prop.
- Nothing here is focusable. Treat the icon as decorative and make sure the server's name is in
  the row as text.

## Test ids

<APITable>

| Element       | `data-testid`                          |
| ------------- | -------------------------------------- |
| Outer element | `mcp-icon`, overridden by `dataTestId` |

</APITable>

The image and the letter carry none.

## Related

- [`RoomIcon`](./room-icon.md) — the same idea for a room, with colours and two initials.
- [`Avatar`](./avatar.md) — for a person, with status and role decorations.
- [`RectangleSkeleton`](../skeletons/rectangle.md) — the placeholder to show while the list loads.
