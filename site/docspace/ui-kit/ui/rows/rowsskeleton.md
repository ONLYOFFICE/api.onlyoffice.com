---
description: "Placeholder in the shape of a list of rows, shown while the rows themselves are loading. The Rows page describes it in full."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/rows/skeletons/RowsSkeleton.stories.tsx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# RowsSkeleton

Placeholder in the shape of a list of rows, shown while the rows themselves are loading. The Rows page describes it in full.

<ThemedImage alt="RowsSkeleton" width={1014} sources={{ light: require('./rowsskeleton--primary-light.png').default, dark: require('./rowsskeleton--primary-dark.png').default }} />

## Props

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `count`? | `numberundefined` | How many placeholder rows to draw. Default: `25`. |
| `style`? | `CSSPropertiesundefined` | Inline style applied to every placeholder row. |
| `title`? | `stringundefined` | Accessible name given to every shape; empty by default, which leaves them unnamed. Default: `""`. |
| `className`? | `stringundefined` | Class added to every placeholder row. |
| `x`? | `stringundefined` | Ignored: the rows place their shapes themselves. |
| `y`? | `stringundefined` | Ignored: the rows place their shapes themselves. |
| `width`? | `stringundefined` | Ignored: the rows size their shapes themselves. |
| `height`? | `stringundefined` | Ignored: the rows size their shapes themselves. |
| `borderRadius`? | `stringundefined` | Corner radius of the square and bar shapes, in pixels. Default: `3`. |
| `backgroundColor`? | `stringundefined` | Colour of the shapes at rest, drawn at backgroundOpacity; black in every theme. Default: `#000`. |
| `foregroundColor`? | `stringundefined` | Colour of the band that sweeps across the shapes, drawn at foregroundOpacity. Default: `#000`. |
| `backgroundOpacity`? | `numberundefined` | Opacity of backgroundColor, from 0 to 1. Default: `0.1`. |
| `foregroundOpacity`? | `numberundefined` | Opacity of foregroundColor, from 0 to 1. Default: `0.15`. |
| `speed`? | `numberundefined` | Duration of one sweep of the band, in seconds. Default: `2`. |
| `animate`? | `booleanundefined` | Whether the light band sweeps across the shapes; turn it off for a still placeholder. Default: `true`. |
| `uniqueKey`? | `stringundefined` | Ignored: every shape takes an id of its own. |

</APITable>

## Stories

### Default

Five placeholder rows (`count`) with the band sweeping across them, as a list shows them while its first page loads. Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./rowsskeleton--default-light.png').default, dark: require('./rowsskeleton--default-dark.png').default }} />

### Static Placeholder

A placeholder that does not move, for a reader who asked for less motion: the band no longer sweeps across the shapes (`animate`). The component does not check the system's reduced-motion setting itself.

<ThemedImage alt="Static Placeholder" width={1014} sources={{ light: require('./rowsskeleton--static-placeholder-light.png').default, dark: require('./rowsskeleton--static-placeholder-dark.png').default }} />

### Round Start Element

Rows for a list of people, whose start element is a round avatar: each `RowSkeleton` draws a circle in place of the square (`isRectangle={false}`). `RowsSkeleton` has no such prop, so a list of round rows is built from `RowSkeleton` directly.

<ThemedImage alt="Round Start Element" width={1014} sources={{ light: require('./rowsskeleton--round-start-element-light.png').default, dark: require('./rowsskeleton--round-start-element-dark.png').default }} />
