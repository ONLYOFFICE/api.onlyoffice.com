---
description: "Placeholder in the shape of a tile listing, shown while the tiles themselves are loading."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/tiles/sub-components/skeletons/TilesSkeleton.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# TilesSkeleton

Placeholder in the shape of a tile listing, shown while the tiles themselves are loading. The Tiles page describes it in full.

<ThemedImage alt="TilesSkeleton" width={1014} sources={{ light: require('./tiles-skeleton--primary-light.png').default, dark: require('./tiles-skeleton--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `title`? | `stringundefined` | Accessible name given to every shape; empty by default, which leaves them unnamed. Default: `""`. |
| `className`? | `stringundefined` | Class added to every tile placeholder, and in place of the heading bars' own. |
| `x`? | `stringundefined` | Ignored: the grid places its shapes itself. |
| `y`? | `stringundefined` | Ignored: the grid places its shapes itself. |
| `width`? | `stringundefined` | Resizes the two heading bars only. |
| `height`? | `stringundefined` | Resizes the two heading bars only. |
| `borderRadius`? | `stringundefined` | Corner radius of every shape; the tiles fall back to 12px and the heading bars to 3px. |
| `backgroundColor`? | `stringundefined` | Colour of the shapes at rest, drawn at backgroundOpacity; black in every theme. Default: `#000`. |
| `foregroundColor`? | `stringundefined` | Colour of the band that sweeps across the shapes, drawn at foregroundOpacity. Default: `#000`. |
| `backgroundOpacity`? | `numberundefined` | Opacity of backgroundColor, from 0 to 1. Default: `0.1`. |
| `foregroundOpacity`? | `numberundefined` | Opacity of foregroundColor, from 0 to 1. Default: `0.15`. |
| `speed`? | `numberundefined` | Duration of one sweep of the band, in seconds. Default: `2`. |
| `animate`? | `booleanundefined` | Stops the band on the two heading bars only; the tile placeholders keep sweeping. Default: `true`. |
| `style`? | `CSSPropertiesundefined` | Inline style of every tile placeholder and heading bar. |
| `uniqueKey`? | `stringundefined` | Ignored: every shape takes an id of its own. |
| `foldersCount`? | `numberundefined` | How many folder placeholders to draw; with none, the bar above them goes too. Default: `2`. |
| `filesCount`? | `numberundefined` | How many file placeholders to draw; with none, the bar above them goes too. Default: `8`. |
| `withTitle`? | `booleanundefined` | Whether a bar stands for the heading above the files. Default: `true`. |
| `isRooms`? | `booleanundefined` | Meant to widen the columns for room tiles; it currently changes nothing. Default: `false`. |

</APITable>

## Stories

### Default

Two folder and four file placeholders under their heading bars (`foldersCount`, `filesCount`), as a tile listing shows them while its first page loads. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./tiles-skeleton--default-light.png').default, dark: require('./tiles-skeleton--default-dark.png').default }} />

### Files Without Heading

A folder that holds files only and shows no heading above them: no folder placeholders, so their bar goes as well, and no bar above the files (`foldersCount={0}`, `withTitle={false}`).

<ThemedImage alt="Files Without Heading" width={760} sources={{ light: require('./tiles-skeleton--files-without-heading-light.png').default, dark: require('./tiles-skeleton--files-without-heading-dark.png').default }} />

### Tile Shapes

The three shapes one `TileSkeleton` can take, for a listing that builds its own placeholder grid: a folder bar (`isFolder`), a room card with a logo, a title bar, a small square for the menu and two tag bars (`isRoom`), and a file card. `TilesSkeleton` never draws the room card, so a grid of rooms is built from `TileSkeleton` directly.

<ThemedImage alt="Tile Shapes" width={768} sources={{ light: require('./tiles-skeleton--tile-shapes-light.png').default, dark: require('./tiles-skeleton--tile-shapes-dark.png').default }} />
