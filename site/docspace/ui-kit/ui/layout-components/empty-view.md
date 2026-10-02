---
description: "Centred empty state with an icon, a title, a description and a list of things the user can do next."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/empty-view/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# EmptyView

Centred empty state with an icon, a title, a description and a list of things the user can do
next. It places itself, so it goes straight into the region it fills.

<ThemedImage alt="EmptyView" width={317} sources={{ light: require('./empty-view--primary-light.png').default, dark: require('./empty-view--primary-dark.png').default }} />

## Use this when / not when

- Use when a list, a room or a panel has nothing in it and the user can act on that: create
  something, invite someone, change a filter.
- Not when the emptiness is the result of an error — [`ErrorContainer`](./error-container.md)
  is the one with the error framing.
- Not when content is on its way: a skeleton such as
  [`RectangleSkeleton`](../skeletons/rectangle.md) says "wait", while this one says "there is
  nothing".
- Not for the portal's own empty screens, which carry their own imagery and layout: that is
  [`EmptyScreenContainer`](./empty-screen-container.md).

## Import

```ts
import { EmptyView } from "@onlyoffice/apps-ui-kit/components/empty-view";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree for
the title, description and item colours.


## Stories

### Default

The common case: an illustration, a title and a description, with one link that takes the user somewhere they can act. Change the texts live in the Controls panel below.

<ThemedImage alt="Default" width={317} sources={{ light: require('./empty-view--default-light.png').default, dark: require('./empty-view--default-dark.png').default }} />

### No Options

For an empty state the user cannot act on, such as a search with no results: only the illustration, the title and the description (`options={null}`).

<ThemedImage alt="No Options" width={284} sources={{ light: require('./empty-view--no-options-light.png').default, dark: require('./empty-view--no-options-dark.png').default }} />

### With Multiple Options

When several next steps are equally likely, offer each as a link; they stack under the description in the order given.

<ThemedImage alt="With Multiple Options" width={327} sources={{ light: require('./empty-view--with-multiple-options-light.png').default, dark: require('./empty-view--with-multiple-options-dark.png').default }} />

### Suggestion Cards

Cards give each next step a title and a line of explanation, for when a link alone would not say enough:

- **Create a folder** — a plain card; clicking it runs its `onClick`
- **Upload files** — click it to open a menu of choices instead (`model`)
- A third card, **Browse templates**, is `disabled` and therefore not rendered at all

<ThemedImage alt="Suggestion Cards" width={464} sources={{ light: require('./empty-view--suggestion-cards-light.png').default, dark: require('./empty-view--suggestion-cards-dark.png').default }} />

### With Buttons

Buttons suit a step that starts work right here rather than going somewhere; they line up in a row and wrap when there is no room:

- **Create document** — primary, which is what a button option is unless told otherwise
- **Import** — secondary (`primary: false`)
- **Sync** — secondary, with a loader while its work runs (`isLoading`)

<ThemedImage alt="With Buttons" width={383} sources={{ light: require('./empty-view--with-buttons-light.png').default, dark: require('./empty-view--with-buttons-dark.png').default }} />

### Text Actions With Separator

Text actions are the lightest option, for two alternatives joined by a word:

- **Upload a file** — an accented icon-and-text action (`type: "action"`)
- **or** — a separator line of text between the two (`type: "separator"`)
- **Create a document** — the same action in grey, for the less likely choice (`className: "secondary"`)

<ThemedImage alt="Text Actions With Separator" width={216} sources={{ light: require('./empty-view--text-actions-with-separator-light.png').default, dark: require('./empty-view--text-actions-with-separator-dark.png').default }} />

### With Extra Content

When the empty state needs something the option types do not cover — a hint, a form, a picture — it goes between the description and the options (`extraContent`).

<ThemedImage alt="With Extra Content" width={274} sources={{ light: require('./empty-view--with-extra-content-light.png').default, dark: require('./empty-view--with-extra-content-dark.png').default }} />

### Right To Left

The same empty state under a right-to-left interface: in the suggestion card the icon moves to the right edge, the text aligns right, and the arrow moves to the left edge and points left. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={464} sources={{ light: require('./empty-view--right-to-left-light.png').default, dark: require('./empty-view--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. The instance holds two links, a separator and a suggestion card. Hover a link and the card to see the hover backgrounds.

<ThemedImage alt="Css Customization" width={376} sources={{ light: require('./empty-view--css-customization-light.png').default, dark: require('./empty-view--css-customization-dark.png').default }} />

## Minimal example

`options` is required; pass `null` for an empty state with nothing to do.

```tsx
import { EmptyView } from "@onlyoffice/apps-ui-kit/components/empty-view";

export function NoRooms({ onCreate }: { onCreate: () => void }) {
  return (
    <EmptyView
      icon={
        <svg viewBox="0 0 96 96" width="96" height="96" aria-hidden="true">
          <rect
            x="8"
            y="8"
            width="80"
            height="80"
            rx="8"
            fill="none"
            stroke="currentColor"
          />
        </svg>
      }
      title="No rooms yet"
      description="Rooms are where you collaborate on files with other people."
      options={[
        {
          key: "create",
          type: "button",
          title: "Create a room",
          onClick: onCreate,
        },
      ]}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `description` | `ReactNode` | Description content, can be text or React node |
| `icon` | `ReactElement<unknown, string \| JSXElementConstructor<any>>` | Icon component to display |
| `options` | `Nullable<EmptyViewOptionsType>` | Array of options to display, can be null |
| `title` | `string` | Title text to display |
| `bodyClassName`? | `string` | Optional CSS class name for body styling |
| `className`? | `string` | Optional CSS class name for wrapper styling |
| `extraContent`? | `ReactNode` | Optional content rendered between header and options body |
| `LinkRouter`? | `ComponentType<LinkRouterProps>` | Router Link component for navigation |

</APITable>

## Recipes

### A list of suggestions with a separator

```tsx
import { EmptyView } from "@onlyoffice/apps-ui-kit/components/empty-view";

const ICON = (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" />
  </svg>
);

export function EmptyFolder({
  onUpload,
  onCreateFile,
}: {
  onUpload: () => void;
  onCreateFile: () => void;
}) {
  return (
    <EmptyView
      icon={ICON}
      title="This folder is empty"
      description="Add the first file to it."
      options={[
        {
          key: "upload",
          type: "action",
          title: "Upload a file",
          icon: ICON,
          onClick: onUpload,
        },
        { key: "or", type: "separator", text: "or" },
        {
          key: "create",
          type: "action",
          title: "Create a document",
          icon: ICON,
          onClick: onCreateFile,
        },
      ]}
    />
  );
}
```

## Behaviour the types don't state

- **It positions itself.** The wrapper is `margin-inline: auto`, `width: 100%`, capped at
  `--empty-view-width` (480px), with `--empty-view-padding-top` of 61px — 40px on mobile — and
  an 18px gap between its parts. Put it directly in the region it fills; a wrapper of your own
  that centres it again will fight it.
- **Option types are told apart by shape, not only by `type`.** An option with a `to` field is
  a link whatever else it carries; `button`, `separator` and `action` are matched on `type`;
  anything else falls through to an item. A link option therefore cannot also be a button.
- **A link option without `LinkRouter` silently stops navigating.** It renders as an action
  link with the same icon and text, and the `to` you passed is ignored. Pass your router's
  `Link` component, or use an `action` option with an `onClick`.
- `isNext: true` has the same effect on purpose, for a link that should run a handler rather
  than navigate.
- An item with a `model` opens that context menu on click and does not call its `onClick`.
- An item with `disabled: true` is not rendered at all — there is no greyed-out state.
- A `button` option is `primary` unless you say otherwise, and is always `ButtonSize.small`.
- `extraContent` renders between the header and the options, outside the body element, so it
  does not take the body's gap.

## CSS variables

<APITable>

| Variable                             | Default     | Effect                                                     |
| ------------------------------------ | ----------- | ---------------------------------------------------------- |
| `--empty-view-width`                 | `480px`     | Maximum width of the whole block                           |
| `--empty-view-padding-top`           | `61px`      | Space above the icon (always 40px on mobile)               |
| `--empty-view-gap`                   | `18px`      | Gap between header, extra content, body                    |
| `--empty-view-header-font-size`      | `16px`      | Title size                                                 |
| `--empty-view-title-color`           | theme       | Title colour                                               |
| `--empty-view-desc-color`            | theme       | Description colour                                         |
| `--empty-view-link-accent`           | theme       | Text colour of a link option, and of its icon's `<g>` fill |
| `--empty-view-link-background`       | theme       | Background of a link option                                |
| `--empty-view-link-hover-background` | theme       | Background of a link option under the pointer              |
| `--empty-view-link-padding`          | `6px 10px`  | Padding inside a link option                               |
| `--empty-view-link-radius`           | `6px`       | Corner radius of a link option                             |
| `--empty-view-link-text-size`        | `13px`      | Font size of a link option                                 |
| `--empty-view-link-text-weight`      | `600`       | Font weight of a link option                               |
| `--empty-view-icon-size`             | `36px`      | Icon size inside an item                                   |
| `--empty-view-item-padding`          | `12px 16px` | Padding inside an item                                     |
| `--empty-view-item-radius`           | `6px`       | Corner radius of an item                                   |
| `--empty-view-item-gap`              | `20px`      | Gap between an item's icon, text and arrow                 |
| `--empty-view-item-hover-background` | theme       | Background of an item under the pointer                    |
| `--empty-view-item-title-color`      | theme       | Title colour of an item                                    |
| `--empty-view-item-desc-color`       | theme       | Description colour of an item                              |
| `--empty-view-divider-color`         | theme       | Text colour of a `separator` option                        |

</APITable>

`--empty-view-link-accent` loses to `--accent-main`: wherever the host page defines that
token, it colours the link options instead. An `action` option has no variable of its own —
its colour is `--accent-main`, or a fixed blue without it. The pressed backgrounds of links and
items have no override either.

## Accessibility

- The title renders as an `<h3>` and the description as a `<p>`; the wrapper has no landmark
  role, so place it inside your own region.
- An item is a `<div>` with `role="button"`, `tabIndex={0}` and an `aria-label` of its
  `title`, so it is in the Tab order and announced by its title — but it has no key handler,
  so Enter and Space do not activate it.
- An `action` option is a `<div>` with `role="button"` and `tabIndex={0}`, named by its own
  text; it has no key handler either, so Enter and Space do not activate it.
- A `button` option is a native `<button>`, activated by Enter and Space. A link option is
  whatever your `LinkRouter` renders; without one (or with `isNext`) it is an `<a>` with no
  `href`, which has no role and is not in the Tab order.
- The icon you pass is rendered as given; mark it `aria-hidden` unless it carries meaning the
  title does not.

## Test ids

<APITable>

| Element          | `data-testid`     |
| ---------------- | ----------------- |
| The wrapper      | `empty-view`      |
| The options body | `empty-view-body` |

</APITable>

Neither can be overridden by a prop.

## Related

- [`EmptyScreenContainer`](./empty-screen-container.md) — the portal's own empty
  screens.
- [`ErrorContainer`](./error-container.md) — when the emptiness is a failure.
- [`RectangleSkeleton`](../skeletons/rectangle.md) — when the content is still loading.
