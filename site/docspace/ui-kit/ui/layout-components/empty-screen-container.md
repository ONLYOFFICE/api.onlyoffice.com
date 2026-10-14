---
description: "Centred empty state: an illustration, a heading, up to two lines of explanation and a column of actions."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/empty-screen-container/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# EmptyScreenContainer

Centred empty state: an illustration, a heading, up to two lines of explanation and a column of
actions. It is the older of the kit's two empty states and the one that takes an image URL of
your own.

<ThemedImage alt="EmptyScreenContainer" width={656} sources={{ light: require('./empty-screen-container--primary-light.png').default, dark: require('./empty-screen-container--primary-dark.png').default }} />

## Use this when / not when

- Use when a list has nothing in it and you want to say why, with artwork you supply.
- Not for a new screen — [`EmptyView`](./empty-view.md) is the current empty state, takes
  an icon node rather than a URL, and lays its options out as rows.
- Not for a failure — [`ErrorContainer`](./error-container.md) is the full-page error,
  with its own illustration.
- Not while data is still arriving — show [`RectangleSkeleton`](../skeletons/rectangle.md) and
  switch to this only once you know the result is empty.
- **The image size is not a prop.** The stylesheet pins it to 200×140, and `imageStyle` — the
  one way past that — is ignored on tablet-width screens. See the note below.

## Import

```ts
import { EmptyScreenContainer } from "@onlyoffice/apps-ui-kit/components/empty-screen-container";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` above it in the tree. The header, description and link colours are
declared only under the `.light` and `.dark` classes the provider puts on `<body>`; without it
those declarations are invalid and every line inherits the surrounding text colour.

## Stories

### Default

The full layout, for a list a filter has emptied: a header, a subheading and a description explain why nothing is shown, and a reset action under them offers the way back.

<ThemedImage alt="Default" width={656} sources={{ light: require('./empty-screen-container--default-light.png').default, dark: require('./empty-screen-container--default-dark.png').default }} />

### Minimal Content

The least a screen needs, for a place where there is nothing to explain: the image, one header line and a single way out.

<ThemedImage alt="Minimal Content" width={216} sources={{ light: require('./empty-screen-container--minimal-content-light.png').default, dark: require('./empty-screen-container--minimal-content-dark.png').default }} />

### Custom Styles

For artwork of another shape: the image is resized past its fixed 200×140 box (`imageStyle`) and the actions sit further down (`buttonStyle`). On windows between 601px and 1023px wide the image falls back to its fixed size.

<ThemedImage alt="Custom Styles" width={333} sources={{ light: require('./empty-screen-container--custom-styles-light.png').default, dark: require('./empty-screen-container--custom-styles-dark.png').default }} />

### Without Filter

For a screen with no filter bar above it, such as a first-run view: the content starts 91px from the top instead of 52px (`withoutFilter`), so it sits as low as it would under a filter bar.

<ThemedImage alt="Without Filter" width={431} sources={{ light: require('./empty-screen-container--without-filter-light.png').default, dark: require('./empty-screen-container--without-filter-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The reset action shows the link colour on both its icon and its text, the line under it the plain-text colour; the width applies only on a window wider than 1424px.

<ThemedImage alt="Css Customization" width={216} sources={{ light: require('./empty-screen-container--css-customization-light.png').default, dark: require('./empty-screen-container--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { EmptyScreenContainer } from "@onlyoffice/apps-ui-kit/components/empty-screen-container";

export function NoFiles() {
  return (
    <EmptyScreenContainer
      imageSrc="/images/empty-folder.svg"
      imageAlt=""
      headerText="This folder is empty"
      descriptionText="Upload a file or create a document to get started."
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `headerText` | `string` | The large line under the image, 19px and bold. |
| `imageAlt` | `string` | Alternative text for the illustration. Pass an empty string when the artwork repeats what the text below already says. |
| `imageSrc` | `string` | Source of the illustration. The stylesheet pins the image to 200×140, and to 150×105 below 600px, so supply artwork of that shape. |
| `buttons`? | `ReactNode` | Actions under the text, stacked in a 16px column and centred. |
| `buttonStyle`? | `CSSProperties` | Inline style of the row that holds `buttons`. |
| `className`? | `string` | Added after the component's own classes on the outer element. |
| `descriptionText`? | `ReactNode` | Optional explanatory line at 12px, in the muted colour. |
| `id`? | `string` | Ignored. Nothing reads this prop and the component spreads no unknown props, so it never reaches the DOM. |
| `imageStyle`? | `CSSProperties` | Inline style of the `<img>`, and the only way past its fixed size. It is dropped between 601px and 1023px, where the component passes an empty object instead. |
| `style`? | `CSSProperties` | Ignored. Nothing reads this prop; style the outer element through `className`. |
| `subheadingText`? | `string` | Optional 600-weight line between the header and the description. It has no styling of its own beyond that weight. |
| `withoutFilter`? | `boolean` | Adds the height of the filter bar to the top padding — 91px in place of 52px — for a screen that has no filter above it. It removes nothing. |

</APITable>

## Recipes

### With actions

`buttons` takes any node and stacks whatever is in it in a centred 16px column. A `Button`'s
label keeps its own colour; a link inside this area is repainted to the kit's link blue.

```tsx
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import { EmptyScreenContainer } from "@onlyoffice/apps-ui-kit/components/empty-screen-container";

export function NoDocuments({ onCreate }: { onCreate: () => void }) {
  return (
    <EmptyScreenContainer
      imageSrc="/images/empty-folder.svg"
      imageAlt=""
      headerText="No documents yet"
      descriptionText="Create your first document, or upload one you already have."
      buttons={<Button primary label="Create document" onClick={onCreate} />}
    />
  );
}
```

### No filter above it

`withoutFilter` is about what is above the empty state, not about what it renders: it raises the
top padding from 52px to 91px to stand in for a filter bar that is not there.

```tsx
import { EmptyScreenContainer } from "@onlyoffice/apps-ui-kit/components/empty-screen-container";

export function WelcomeScreen() {
  return (
    <EmptyScreenContainer
      withoutFilter
      imageSrc="/images/welcome.svg"
      imageAlt=""
      headerText="Welcome to your workspace"
      subheadingText="Nothing here yet"
      descriptionText="Everything you create will appear on this screen."
    />
  );
}
```

### A different illustration size

`imageStyle` is the only way past the fixed 200×140, and it is dropped on screens between 601px
and 1023px — so pair it with a stylesheet rule of your own through `className` when the size
matters at every width.

```tsx
import { EmptyScreenContainer } from "@onlyoffice/apps-ui-kit/components/empty-screen-container";

// In your stylesheet:
//   .wide-empty .ec-image { width: 320px; height: 224px; }

export function NoResults() {
  return (
    <EmptyScreenContainer
      className="wide-empty"
      imageSrc="/images/empty-filter.svg"
      imageAlt=""
      headerText="No results"
      descriptionText="Try a different search term, or clear the filter."
      imageStyle={{ width: 320, height: 224 }}
    />
  );
}
```

## Behaviour the types don't state

- **`id` and `style` do nothing.** Both are in the props type, neither is read, and the
  component forwards no unknown props — so neither reaches the DOM. Style the element through
  `className`, and put an `id` on a wrapper of your own.
- **`imageStyle` is dropped between 601px and 1023px.** The component asks whether the window is
  tablet-width and passes an empty object if it is. That check runs during render and is not
  subscribed to resizes, so crossing the breakpoint with the component already mounted does not
  change anything until something else re-renders it.
- **The illustration is pinned to 200×140**, and to 150×105 below 600px, by the stylesheet. Art
  of another shape is stretched into that box.
- **`withoutFilter` adds padding rather than removing anything**: 91px instead of 52px at desktop
  width, 109px instead of 71px on tablet, 69px instead of 31px on mobile.
- **The 640px width only applies above 1424px.** At or below that the element becomes
  `fit-content` capped at 640px, then 480px below 1024px and 343px below 600px. Setting
  `--empty-screen-width` therefore changes nothing on most screens.
- **The heading renders at 19px, not the 16px in the stylesheet.** The size arrives as an inline
  style from the `Text` the component renders, which beats the class rule.
- **The heading is a `<span>`.** Nothing here is a heading element, so the empty state does not
  appear in the document outline.
- **`subheadingText` has no styling of its own** beyond being 600-weight: the class the component
  puts on it is not defined in the stylesheet, and the two modifier classes that a subheading or
  a description add to the wrapper both set a rule the wrapper already has.
- **The buttons area repaints anything inside it**: `a` and any `svg path` take the link colour,
  and a bare `span` takes the text colour. A `Button`'s label is exempted by an explicit rule, so
  a primary button keeps its white label.
- **The element carries five stable class hooks** for a consumer's stylesheet — `ec-image`,
  `ec-header`, `ec-subheading`, `ec-desc` and `ec-buttons` — alongside the hashed module classes.
- **`headerText` is typed as required but is guarded in the code**: an empty string renders no
  heading element at all rather than an empty one.

## CSS variables

<APITable>

| Variable                           | Default              | Effect                                            |
| ---------------------------------- | -------------------- | ------------------------------------------------- |
| `--empty-screen-header-color`      | black; white in dark | Colour of the heading                             |
| `--empty-screen-description-color` | grey text            | Colour of the description                         |
| `--empty-screen-link-color`        | the link blue        | Colour of links and SVG paths in the buttons area |
| `--empty-screen-text-color`        | black; white in dark | Colour of bare `span`s in the buttons area        |
| `--empty-screen-width`             | `640px`              | Width of the element — above 1424px only          |

</APITable>

## Accessibility

- The illustration is an `<img>` whose `alt` you supply. It is decorative in almost every case,
  and the heading below it already says what the screen means: pass an empty string rather than
  repeating the text.
- **Nothing here is a heading element.** All three lines are spans, so a reader navigating by
  heading skips the empty state entirely — put your own heading above it when the screen has no
  other one.
- The actions are whatever you pass; their roles and labels are yours to get right. A link
  styled as an action still needs an `href` to be reachable by keyboard.
- The element has no role and no live region, so replacing a list with this empty state is not
  announced. Announce the result count yourself when the change follows a search.

## Test ids

<APITable>

| Element       | `data-testid`                          |
| ------------- | -------------------------------------- |
| Outer element | `empty-screen-container`, not settable |

</APITable>

The three text lines carry `Text`'s own `text` id; the image and the buttons area carry none —
use the `ec-image` and `ec-buttons` classes.

## Related

- [`EmptyView`](./empty-view.md) — the current empty state, with icon nodes and option rows.
- [`ErrorContainer`](./error-container.md) — the full-page error screen.
- [`RectangleSkeleton`](../skeletons/rectangle.md) — what to show while you still do not know whether the list is empty.
