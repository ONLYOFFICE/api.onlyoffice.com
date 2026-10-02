---
description: "Search field with a magnifier, an optional clear button and a debounced change callback."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/search-input/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# SearchInput

Search field with a magnifier, an optional clear button and a debounced change callback. It is
the control above a list that the list filters itself by.

<ThemedImage alt="SearchInput" width={316} sources={{ light: require('./search-input--primary-light.png').default, dark: require('./search-input--primary-dark.png').default }} />

## Use this when / not when

- Use above a list, a table or a panel whose contents narrow as the user types.
- Not as an ordinary text field — [`TextInput`](./text-input.md) reports every
  keystroke through the change event, which this one does not.
- Not for the portal's own filter bar with its sort and view controls, which is
  [`Filter`](../navigation/filter.md) and only works inside DocSpace.

## Import

```ts
import { SearchInput } from "@onlyoffice/apps-ui-kit/components/search-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree, for
the field's border, icon and background colours.

Note that `SearchInputProps` is **not** exported — the folder's index re-exports only the
component. Type a wrapper's props yourself, or import the type from its file path.


## Stories

### Default

A search field as it first appears above a list: type to see the magnifier turn into a cross, pause for a second to see `onChange` in the Actions panel, click the cross to see `onClearSearch`; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={316} sources={{ light: require('./search-input--default-light.png').default, dark: require('./search-input--default-dark.png').default }} />

### Sizes

Match the search field to the inputs around it: **Base size** and **Middle size** share the 13px text, **Large size** is taller with 16px text (`size`).

<ThemedImage alt="Sizes" width={1014} sources={{ light: require('./search-input--sizes-light.png').default, dark: require('./search-input--sizes-dark.png').default }} />

### States

The looks a search field takes on a page. **Normal** holds text, so it shows the cross that clears it. **Disabled** is greyed, cannot be typed into and shows neither magnifier nor cross (`isDisabled`). **Scaled** fills the width of its container (`scale`); in this grid every field already fills its cell, so the difference shows in a wider container. **Empty with placeholder** shows the magnifier and the placeholder text.

<ThemedImage alt="States" width={1014} sources={{ light: require('./search-input--states-light.png').default, dark: require('./search-input--states-dark.png').default }} />

### Auto Refresh Mode

Decide how the parent hears about the search term. Type into **Type to auto-refresh (1s)**: the line under it catches up a second after you stop (`autoRefresh`, `refreshTimeout`). Type into **No auto-refresh**: the line under it never changes, because with `autoRefresh` off the component does not call `onChange` at all.

<ThemedImage alt="Auto Refresh Mode" width={676} sources={{ light: require('./search-input--auto-refresh-mode-light.png').default, dark: require('./search-input--auto-refresh-mode-dark.png').default }} />

### With Button

Put the create action next to the search it belongs with: the **Create** button with its plus icon sits to the left of the field (`showMainButton`, `mainButtonProps`), and the field takes the rest of the row.

<ThemedImage alt="With Button" width={516} sources={{ light: require('./search-input--with-button-light.png').default, dark: require('./search-input--with-button-dark.png').default }} />

### With Button And Menu

Offer several things to create from one button: click **New** to open its menu of items, one of them with a submenu (`model` in `mainButtonProps`).

<ThemedImage alt="With Button And Menu" width={516} sources={{ light: require('./search-input--with-button-and-menu-light.png').default, dark: require('./search-input--with-button-and-menu-dark.png').default }} />

### Persistent Clear Button

Keep a way out of a search the parent still applies after the field was emptied: **Cross on an empty field** shows the cross with no text in it (`showClearButton`), **Magnifier on an empty field** is the usual look. With text in the field both show the cross.

<ThemedImage alt="Persistent Clear Button" width={676} sources={{ light: require('./search-input--persistent-clear-button-light.png').default, dark: require('./search-input--persistent-clear-button-dark.png').default }} />

### Content Before Text

Show what the search is limited to without a separate label: the folder icon sits inside the field, before the text (`children`).

<ThemedImage alt="Content Before Text" width={338} sources={{ light: require('./search-input--content-before-text-light.png').default, dark: require('./search-input--content-before-text-dark.png').default }} />

### Disabled Main Button

Keep the create action in place while it is unavailable: the **Create** button is dimmed (`isDisabled` in `mainButtonProps`), the search field next to it still works.

<ThemedImage alt="Disabled Main Button" width={516} sources={{ light: require('./search-input--disabled-main-button-light.png').default, dark: require('./search-input--disabled-main-button-dark.png').default }} />

### Right To Left

The same field under a right-to-left interface: the **Create** button moves to the right edge, the cross moves to the left end of the field and the text starts at the right. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={516} sources={{ light: require('./search-input--right-to-left-light.png').default, dark: require('./search-input--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page.

**Custom styled search** is empty and shows the magnifier color; **With value** holds text and shows the cross color; **With button** carries the main button, for the gap. Hover a field and click into it to see the two other border colors.

<ThemedImage alt="Css Customization" width={316} sources={{ light: require('./search-input--css-customization-light.png').default, dark: require('./search-input--css-customization-dark.png').default }} />

## Minimal example

`size` and `value` are both required, and the change callback receives the string.

```tsx
import { useState } from "react";
import { SearchInput } from "@onlyoffice/apps-ui-kit/components/search-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

const ROOMS = ["Design", "Development", "Marketing"];

export function RoomSearch() {
  const [term, setTerm] = useState("");

  const shown = ROOMS.filter((room) =>
    room.toLowerCase().includes(term.toLowerCase()),
  );

  return (
    <div>
      <SearchInput
        size={InputSize.base}
        value={term}
        placeholder="Search rooms"
        showClearButton
        onChange={(value) => setTerm(value)}
        onClearSearch={() => setTerm("")}
      />
      <ul>
        {shown.map((room) => (
          <li key={room}>{room}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `size` | `InputSize` | Supported size of the input fields. |
| `value` | `string` | The search term. The field keeps its own copy while the user types and re-seeds it from this prop whenever the prop changes. Default: `""`. |
| `autoRefresh`? | `boolean` | Whether typing triggers the debounced `onChange` at all. Setting it to false does not make the callback immediate — it stops the component calling it entirely. Default: `true`. |
| `children`? | `React.ReactNode` | Rendered inside the `MainButton`'s dropdown; ignored unless `showMainButton` is set. |
| `className`? | `string` | Accepts class |
| `dataTestId`? | `string` | Value of `data-testid` on the outer element. Default: `"search-input"`. |
| `forwardedRef`? | `React.Ref<HTMLInputElement>` | Forwarded ref |
| `id`? | `string` | Used as HTML `id` property |
| `isDisabled`? | `boolean` | Disables the field and greys it. Default: `false`. |
| `mainButtonDataTestId`? | `string` | data-testid for the main button wrapper element |
| `mainButtonIcon`? | `React.ReactNode` | Icon node rendered inside the MainButton (12x12). Default: `<PlusIconSvg />`. |
| `mainButtonProps`? | `MainButtonProps` | Props for the MainButton displayed to the left of the search field |
| `name`? | `string` | Sets the unique element name |
| `onChange`? | `(value: string) => void` | Called with the **string** the user typed, not with the change event — unlike every other input in this kit. It is debounced by `refreshTimeout`, and it is not called at all when `autoRefresh` is false or when the field is cleared through the clear button. |
| `onClearSearch`? | `() => void` | Called when the clear button is used. `onChange` is deliberately skipped for that transition, so this is the only signal that the search term is now empty. |
| `onClick`? | `(e: React.MouseEvent<HTMLInputElement>) => void` | Called when the field is clicked. |
| `onFocus`? | `(e: React.FocusEvent<HTMLInputElement>) => void` | The callback function that is called when the field is focused |
| `placeholder`? | `string` | Placeholder text for the input |
| `refreshTimeout`? | `number` | Milliseconds of quiet typing before `onChange` fires. Default: `1000`. |
| `scale`? | `boolean` | Makes the field fill the width of its container. Default: `false`. |
| `showClearButton`? | `boolean` | Shows the cross that clears the field. Without it the user has to select and delete the text. Default: `false`. |
| `showMainButton`? | `boolean` | Renders a `MainButton` to the left of the field, for the "create new" action a search bar often sits beside. Default: `false`. |
| `style`? | `React.CSSProperties` | Accepts css style |
| `tabIndex`? | `number` | HTML tabindex property |

</APITable>

## Recipes

### Disabled

```tsx
import { SearchInput } from "@onlyoffice/apps-ui-kit/components/search-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function DisabledSearch() {
  return (
    <SearchInput
      size={InputSize.base}
      value=""
      isDisabled
      placeholder="Search is unavailable while the room loads"
      onChange={() => {}}
    />
  );
}
```

### Filtering as the user types

The default one-second debounce is right for a request and wrong for filtering an array already
in memory. Lower it rather than switching `autoRefresh` off, which stops the callback entirely.

```tsx
import { useState } from "react";
import { SearchInput } from "@onlyoffice/apps-ui-kit/components/search-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";

export function InstantSearch({ onSearch }: { onSearch: (t: string) => void }) {
  const [term, setTerm] = useState("");

  return (
    <SearchInput
      size={InputSize.base}
      value={term}
      scale
      refreshTimeout={0}
      showClearButton
      onChange={(value) => {
        setTerm(value);
        onSearch(value);
      }}
      onClearSearch={() => {
        setTerm("");
        onSearch("");
      }}
    />
  );
}
```

## Behaviour the types don't state

- **`onChange` receives the string, not the event.** Every other input in this kit passes the
  `ChangeEvent`; writing `e.target.value` here gets you `undefined` on a string.
- **It is debounced by a whole second by default.** `autoRefresh` is on and `refreshTimeout` is
  1000, so the callback runs a second after the user stops typing. A list that filters in
  memory should set `refreshTimeout={0}`.
- **`autoRefresh={false}` does not make it immediate — it silences it.** The component only
  calls `onChange` through the debounced path, so switching the flag off means no change
  callback ever fires; a parent that wants that reads the field itself through `forwardedRef`.
- **Clearing does not go through `onChange`.** The clear button empties the field, calls
  `onClearSearch` and deliberately suppresses the change callback, so a handler that only
  listens to `onChange` keeps filtering by the old term.
- The field keeps its own copy of the text while the user types and re-seeds it from `value`
  whenever that prop changes, so a parent can reset it but cannot override a keystroke.
- The icon at the end of the field is a magnifier while the field is empty and turns into the
  clear cross as soon as it holds text. `showClearButton` only adds the cross to an empty field
  too; a field with text always has it. Only the cross is clickable.
- `isDisabled` blocks typing and removes the icon altogether, magnifier and cross alike.
- `size` follows the kit's input sizes: `base` and `middle` set the text at 13px, `large` is
  taller and sets it at 16px.
- The main button needs both `showMainButton` and `mainButtonProps`; either alone renders
  nothing. It carries the plus icon (or `mainButtonIcon`), and a click anywhere on its blue
  wrapper, padding included, is passed to the `MainButton`, which opens the dropdown built from
  `mainButtonProps.model`.

## CSS variables

<APITable>

| Variable                          | Default | Effect                                                                                            |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `--search-input-max-height`       | `32px`  | Height of the field                                                                               |
| `--search-input-radius`           | `3px`   | Corner radius of the icon buttons                                                                 |
| `--search-input-gap`              | `8px`   | Space between the main button and the field                                                       |
| `--search-input-icon-fill`        | theme   | Colour of the icon while the field is empty (the magnifier, or the cross under `showClearButton`) |
| `--search-input-icon-filled-fill` | theme   | Colour of the cross once the field holds text                                                     |

</APITable>

The field itself is a [`TextInput`](./text-input.md) inside an `InputBlock`, so its
colours and radius come from that component's variables, set on a wrapper around the search
field: `--text-input-bg` (background), `--text-input-border-color` (border at rest),
`--text-input-border-hover` and `--text-input-border-focus` (border on hover and while the text
field has focus), `--text-input-color` (text and caret) and `--text-input-radius` (corner
radius). The gap only shows with the main button.

## Accessibility

- Renders a plain text input; it sets no `role`, no `aria-label` and no `type="search"`, so a
  screen reader announces an unnamed text field. Label it yourself through the surrounding
  markup — the component accepts no `aria-*` props.
- **It is not in the tab order unless you pass `tabIndex`.** The prop goes straight to
  [`InputBlock`](./input-block.md), whose own default is `-1`, so a search box given no
  `tabIndex` cannot be reached from the keyboard. Pass `tabIndex={0}`. The default was removed
  from `TextInput`, `Textarea`, `Checkbox` and `ComboBox`; `InputBlock` kept it.
- **`id` lands on two elements**, the wrapper `<div>` and the `<input>`, so a `FieldContainer`'s
  `labelFor` resolves to the wrapper — the first match — and captions nothing. Until that is
  fixed, the field cannot be named by a visible caption at all; with no `aria-*` props either,
  the only way to name it is to set `aria-label` on the input element yourself.
- The clear button is an icon button with no text; nothing gives it an accessible name.
- Keyboard behaviour is the platform's own. Escape does not clear the field.

## Test ids

<APITable>

| Element                     | `data-testid`                                                        |
| --------------------------- | -------------------------------------------------------------------- |
| Outer element               | `search-input`, overridable with `dataTestId`                        |
| The main button, when shown | `main-button`, with the wrapper's own id from `mainButtonDataTestId` |

</APITable>

## Related

- [`TextInput`](./text-input.md) — an ordinary text field, with the change event.
- [`InputBlock`](./input-block.md) — a field with an icon or a button inside it.
- [`Filter`](../navigation/filter.md) — the portal's search, sort and view bar.
