---
description: "Button showing the current choice, with a list of options under it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/combobox/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ComboBox

Button showing the current choice, with a list of options under it. The choice itself stays in
your state: the component reports a click and nothing more.

<ThemedImage alt="ComboBox" width={189} sources={{ light: require('./combobox--primary-light.png').default, dark: require('./combobox--primary-dark.png').default }} />

## Use this when / not when

- Use to pick one value from a short, known list: a role, a time zone, a filter, a language.
- Not for a value the user types or searches. There is no search field here — `withSearch` is
  declared and does nothing — so a long list wants
  [`Selector`](../overlays/selector.md) or an input of your own.
- Not for a menu of actions. A menu is [`DropDown`](../overlays/drop-down.md) with
  [`DropDownItem`](../overlays/drop-down-item.md)s; this one is about a value.
- Not on its own in a form: a labelled field is
  [`FieldContainer`](./field-container.md) around it.
- Not for many values at once. It shows one option and a `+N` badge you maintain yourself.

## Import

```ts
import {
  ComboBox,
  ComboBoxSize,
} from "@onlyoffice/apps-ui-kit/components/combobox";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` for the button and list
colours, and `TranslationProvider` from `@onlyoffice/apps-ui-kit/providers/translation` because
the options are rendered as `DropDownItem`s, which read a translated label for their paid badge.

## Stories

### Default

A fixed-width combo box with a placeholder in the button, as a form shows it before anything is chosen. Pick an option to see it replace the placeholder, and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={189} sources={{ light: require('./combobox--default-light.png').default, dark: require('./combobox--default-dark.png').default }} />

### Different Sizes

The fixed widths side by side, to pick the one that fits the longest label a form expects: `base` 173px, `middle` 300px, `big` 350px, `huge` 500px, and `content`, as wide as the label (`size`, with `scaled` off).

<ThemedImage alt="Different Sizes" width={516} sources={{ light: require('./combobox--different-sizes-light.png').default, dark: require('./combobox--different-sizes-dark.png').default }} />

### With Icons

Options with an icon each, so an action is recognised before its label is read; pick one and its icon moves into the button next to the label (`icon` on each option).

<ThemedImage alt="With Icons" width={974} sources={{ light: require('./combobox--with-icons-light.png').default, dark: require('./combobox--with-icons-dark.png').default }} />

### With Option Descriptions

Options whose label alone does not explain the choice: open the list and each row shows the label with a line of explanation under it (`description` on each option). The selected row is highlighted and stays clickable (`displaySelectedOption`).

<ThemedImage alt="With Option Descriptions" width={75} sources={{ light: require('./combobox--with-option-descriptions-light.png').default, dark: require('./combobox--with-option-descriptions-dark.png').default }} />

### Disabled

A choice that cannot be changed right now, kept on screen so the reader still sees the value: the button is greyed out and a click does not open the list (`isDisabled`).

<ThemedImage alt="Disabled" width={189} sources={{ light: require('./combobox--disabled-light.png').default, dark: require('./combobox--disabled-dark.png').default }} />

### With Selected Option

A form that opens with a value already chosen. Open the list: the chosen option is greyed out and cannot be picked again, because `displaySelectedOption` is off; turn it on to keep it clickable and highlighted instead.

<ThemedImage alt="With Selected Option" width={189} sources={{ light: require('./combobox--with-selected-option-light.png').default, dark: require('./combobox--with-selected-option-dark.png').default }} />

### Custom Styling

Colour-coded values, such as priorities, where the colour says more than the word: the button draws the chosen option as a badge in its own text and background colours (`type="badge"`, with `color` and `backgroundColor` on each option). Pick another priority to see the badge change; the rows of the list stay plain.

<ThemedImage alt="Custom Styling" width={167} sources={{ light: require('./combobox--custom-styling-light.png').default, dark: require('./combobox--custom-styling-dark.png').default }} />

### Loading State

A value that is still being fetched or saved: the label and the arrow give way to a spinner and a click does not open the list until loading ends (`isLoading`).

<ThemedImage alt="Loading State" width={189} sources={{ light: require('./combobox--loading-state-light.png').default, dark: require('./combobox--loading-state-dark.png').default }} />

### Right To Left

The combo box under a right-to-left interface: the icon and the label start at the right edge, the icon is mirrored, and the arrow sits at the left end. Open the list to see its rows aligned to the right as well. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={189} sources={{ light: require('./combobox--right-to-left-light.png').default, dark: require('./combobox--right-to-left-dark.png').default }} />

### Css Customization

The border colours, the radius and the padding set on one wrapper -- the variables are listed under CSS variables on this page. Hover the button to see the hover colour and click it to see the open one.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./combobox--css-customization-light.png').default, dark: require('./combobox--css-customization-dark.png').default }} />

## Minimal example

`selectedOption` and `options` are both required, and `onSelect` is what updates the first.

```tsx
import { useState } from "react";
import {
  ComboBox,
  type TOption,
} from "@onlyoffice/apps-ui-kit/components/combobox";

const ROLES: TOption[] = [
  { key: "viewer", label: "Viewer" },
  { key: "editor", label: "Editor" },
  { key: "owner", label: "Owner" },
];

export function RolePicker() {
  const [role, setRole] = useState<TOption>(ROLES[0]);

  return (
    <div style={{ width: 240 }}>
      <ComboBox
        options={ROLES}
        selectedOption={role}
        onSelect={setRole}
        scaled
        scaledOptions
      />
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `options` | `TOption[]` | The options. Each needs a unique `key`, and a `label` unless it is a separator; `disabled`, `icon`, `description`, `isBeta` and `tooltip` are passed to the row. |
| `selectedOption` | `TOption` | The option to show in the button. The component does not choose it: keep it in your own state and set it from `onSelect`. |
| `advancedOptions`? | `ReactElement<{ children?: React.ReactNode; }, string \| JSXElementConstructor<any>>` | Element whose children replace the list entirely, for a menu that is not a list of options. `options` is then used only for the button. |
| `advancedOptionsCount`? | `number` | How many advanced options there are, for deciding the mobile layout. |
| `children`? | `ReactNode` | Content rendered inside the button, before the label. A click on it is ignored unless `disableIconClick` is false. |
| `className`? | `string` | Applied to the element that wraps the button and the list. |
| `comboIcon`? | `ReactNode` | Icon to draw instead of the arrow: a component, an element, or a URL. |
| `dataTestId`? | `string` | Value of `data-testid` on the wrapper. Default: `"combobox"`. |
| `directionX`? | `TDirectionX` | Preferred horizontal side of the list; it flips to fit the viewport. |
| `directionY`? | `TDirectionY` | Preferred vertical side of the list; it flips to fit the viewport. |
| `disableIconClick`? | `boolean` | Whether a click on `children` is swallowed instead of opening the list. Default: `true`. |
| `disableItemClick`? | `boolean` | Stops the list opening at all, without the disabled styling. |
| `disableItemClickFirstLevel`? | `boolean` | The same, but only for first-level items on a touch device. |
| `displayArrow`? | `boolean` | Draws the arrow even when there are no options to open. |
| `displaySelectedOption`? | `boolean` | Keeps the option that is currently selected usable and highlights it. Without it that option is rendered disabled, so the value cannot be picked again. |
| `displayType`? | `ComboBoxDisplayType` | `toggle` renders the button alone and no list at all, for a control that only looks like a combo box. Default: `ComboBoxDisplayType.default`. |
| `dropDownClassName`? | `string` | Applied to the list element. |
| `dropDownId`? | `string` | Applied to the list element. |
| `dropDownMaxHeight`? | `number` | Height of the list in pixels. It is also what gives the list a scrollbar: without it a long list is rendered in full. |
| `dropDownTestId`? | `string` | Value of `data-testid` on the list. |
| `fillIcon`? | `boolean` | Recolours the selected option's icon to the text colour. |
| `fixedDirection`? | `boolean` | Keeps `directionX` and `directionY` as given instead of flipping them. |
| `forceCloseClickOutside`? | `boolean` | Stops the outside-click listener being registered. |
| `hideMobileView`? | `boolean` | Keeps the list anchored to the button on a phone instead of turning it into a bottom sheet. |
| `id`? | `string` | Applied to the element that wraps the button and the list. |
| `isAside`? | `boolean` | Marks the list's backdrop as belonging to a side panel. |
| `isDefaultMode`? | `boolean` | Whether the list is rendered in a portal on `document.body`. Default: `true`. |
| `isDisabled`? | `boolean` | Greys the button out and stops it opening. |
| `isLoading`? | `boolean` | Replaces the arrow with a spinner and stops the button opening. |
| `isMobileView`? | `boolean` | Pins the list to the bottom of the screen, full width, in portrait. |
| `isNoFixedHeightOptions`? | `boolean` | Renders the options in a plain scrollbar instead of the virtualised list. |
| `manualWidth`? | `string` | Width of the list as a CSS length. It has nothing to do with the button's width — use `scaledOptions` for that. Default: `"200px"`. |
| `manualX`? | `string` | (Non-portal mode) Exact horizontal offset of the list from the button. |
| `manualY`? | `number \| string` | (Non-portal mode) Exact vertical offset of the list from the button. |
| `modernView`? | `boolean` | Compact button with no background until it is open. |
| `noBorder`? | `boolean` | Removes the button's border. |
| `noSelect`? | `boolean` | Whether the button's text cannot be selected. Default: `true`. |
| `offsetX`? | `number` | Horizontal offset of the list, in pixels. |
| `onBackdropClick`? | `(e: Event) => void` | Called when a click outside closes the list, if `withBackdrop` is on. |
| `onClickSelectedItem`? | `(option: TOption) => void` | Called when the option already selected is clicked again. |
| `onSelect`? | `(option: TOption) => void` | Called with the option that was clicked. Nothing changes on its own — `selectedOption` is yours to update. |
| `onToggle`? | `(e: React.MouseEvent<HTMLDivElement>, isOpen: boolean) => void` | Called when the button is clicked, with the state being asked for. Passing it without `onBackdropClick` also stops a click outside closing the list. |
| `opened`? | `boolean` | Opens or closes the list from outside. It seeds the internal state rather than controlling it: the next click on the button wins until this changes. |
| `optionStyle`? | `CSSProperties` | Inline style applied to every option. |
| `plusBadgeValue`? | `number` | Number shown as `+N` after the label, for a multi-select summary. |
| `role`? | `string` | Ignored. Nothing reads this prop. |
| `scaled`? | `boolean` | Makes the button take the full width of its parent, which overrides `size`. Default: `true`. |
| `scaledOptions`? | `boolean` | Matches the list's width to the button's instead of `manualWidth`. |
| `searchPlaceholder`? | `string` | Ignored. Nothing reads this prop; there is no search field. |
| `setIsOpenItemAccess`? | `(isOpen: boolean) => void` | Called with the open state whenever it changes, alongside `onToggle`. |
| `shouldShowBackdrop`? | `boolean` | Renders the backdrop even when another one is already on screen. |
| `showDisabledItems`? | `boolean` | Ignored. The list is always told to keep disabled options. |
| `size`? | `"base" \| "big" \| "content" \| "huge" \| "middle"` | One of the fixed widths — 173, 300, 350 or 500px, or the content's own. It only applies when `scaled` is false. Default: `ComboBoxSize.base`. |
| `style`? | `CSSProperties` | Applied to the wrapper and, again, to the list. |
| `tabIndex`? | `number` | Position of the button in the tab order. It is `0` by default, so the control is reachable; pass `-1` to take it off the tab order. Default: `0`. |
| `textOverflow`? | `boolean` | Truncates an option's label with an ellipsis instead of wrapping it. |
| `title`? | `string` | Hover tooltip for the whole control. It needs `RootTooltip` mounted. |
| `topSpace`? | `number` | Space to leave above the list when it opens upwards, in pixels. |
| `type`? | `TCombobox` | Shape of the button: `badge` draws the label as a coloured badge, `onlyIcon` drops the label, `descriptive` adds the option's `description` under it. |
| `useImageIcon`? | `boolean` | Draws the kit's placeholder image next to the selected option's icon. |
| `usePortalBackdrop`? | `boolean` | Moves the list's backdrop into the portal, above the page. |
| `withBackdrop`? | `boolean` | Whether the list renders a backdrop to catch the next click. Default: `true`. |
| `withBackground`? | `boolean` | Gives that backdrop its dimming background. |
| `withBlur`? | `boolean` | Ignored. It reaches the list, which does not read it either. |
| `withLabel`? | `boolean` | Whether the selected option is matched by label rather than by key. Default: `true`. |
| `withoutArrow`? | `boolean` | Hides the arrow, whatever `displayArrow` and the options say. |
| `withoutBackground`? | `boolean` | Makes that backdrop transparent. |
| `withoutPadding`? | `boolean` | Removes the vertical padding around the button. |
| `withSearch`? | `boolean` | Ignored. Nothing reads this prop; there is no search field. |

</APITable>

### Enums

<APITable>

| Enum                  | Members             |
| --------------------- | ------------------- |
| `ComboBoxDisplayType` | `default`, `toggle` |

</APITable>

## Recipes

### Open and close, controlled

`opened` seeds the open state rather than owning it, and `onToggle` reports every click on the
button. Pass `onBackdropClick` as well, or a click outside stops closing the list.

```tsx
import { useState } from "react";
import {
  ComboBox,
  type TOption,
} from "@onlyoffice/apps-ui-kit/components/combobox";

const SORTS: TOption[] = [
  { key: "name", label: "Name" },
  { key: "date", label: "Last modified" },
];

export function SortPicker() {
  const [sort, setSort] = useState<TOption>(SORTS[0]);
  const [open, setOpen] = useState(false);

  return (
    <ComboBox
      options={SORTS}
      selectedOption={sort}
      opened={open}
      onToggle={(_event, next) => setOpen(next)}
      onBackdropClick={() => setOpen(false)}
      onSelect={(option) => {
        setSort(option);
        setOpen(false);
      }}
    />
  );
}
```

### Loading and disabled

```tsx
import {
  ComboBox,
  type TOption,
} from "@onlyoffice/apps-ui-kit/components/combobox";

const PLACEHOLDER: TOption = { key: "none", label: "Loading…" };

export function RoomPicker({
  rooms,
  isLoading,
}: {
  rooms: TOption[];
  isLoading: boolean;
}) {
  return (
    <ComboBox
      options={rooms}
      selectedOption={rooms[0] ?? PLACEHOLDER}
      isLoading={isLoading}
      isDisabled={rooms.length === 0}
      onSelect={() => {}}
    />
  );
}
```

### A long list that scrolls

`dropDownMaxHeight` is what gives the list a scrollbar; without it every option is rendered.

```tsx
import { useState } from "react";
import {
  ComboBox,
  type TOption,
} from "@onlyoffice/apps-ui-kit/components/combobox";

export function TimezonePicker({ zones }: { zones: TOption[] }) {
  const [zone, setZone] = useState<TOption>(zones[0]);

  return (
    <ComboBox
      options={zones}
      selectedOption={zone}
      onSelect={setZone}
      dropDownMaxHeight={320}
      displaySelectedOption
      textOverflow
    />
  );
}
```

## Behaviour the types don't state

- **The selected option is matched by its label, not its key.** `withLabel` is true by default,
  and the comparison is `option.label === selectedOption.label`, so two options that read the
  same are both treated as selected. Pass `withLabel={false}` to compare keys instead.
- **The option you are on is rendered disabled.** Unless `displaySelectedOption` is set, the
  option matching the selection is greyed out and cannot be clicked, which is how the kit shows
  the current value — and why re-picking it does nothing.
- **Nothing selects anything.** `onSelect` hands you the option; `selectedOption` is yours to
  update, and the component mirrors whatever you pass back.
- **The list is 200px wide whatever the button is.** `manualWidth` defaults to `"200px"`;
  `scaledOptions` is what matches it to the button, and even then the width is measured from the
  button on a later render, so the first open can still be 200px.
- **`scaled` is on by default**, so the control fills its parent and `size` has no effect. Turn
  it off to get the 173px of `ComboBoxSize.base`.
- **The keyboard does not work.** The component listens for ArrowDown and Enter on the document
  and looks for options by the test id `drop-down-item` — which its own options never carry,
  because it gives each one a test id of its own. The result is that the arrows and Enter do
  nothing while the list is open, and Enter is swallowed for the rest of the page as well.
- **Loading hides the choice.** `isLoading` draws a spinner in the button and hides its label,
  icon, `children` and arrow while keeping their space, so the button keeps its width but no
  longer shows the current value.
- A list of four or more options becomes a bottom sheet on a phone. `hideMobileView` keeps it
  anchored to the button.
- An option's `icon` has to be a component or a URL: an element is ignored by the button, and a
  URL is fetched at runtime by `react-svg`.
- `searchPlaceholder`, `withSearch`, `showDisabledItems`, `withBlur` and `role` are declared and
  never read. Disabled options are always kept in the list.
- The component is memoised with a deep comparison of all its props, so a new `options` array on
  every render costs a full walk of it rather than a re-render.

## Sub-components

`ComboButton` is the button alone, exported for a control that needs the same shape without a
list of its own. It takes the `selectedOption`, `size`, `type`, `isOpen` and `isLoading` props
described above and calls `onClick`; everything else — opening, choosing, closing — is yours.

## CSS variables

<APITable>

| Variable                        | Default                                 | Effect                                                             |
| ------------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| `--combobox-border-color`       | theme grey                              | Border colour of the button                                        |
| `--combobox-hover-border-color` | theme grey                              | Border colour of the button under the pointer                      |
| `--combobox-focus-border-color` | the accent colour (white in dark theme) | Border colour of the button while its list is open, hovered or not |
| `--combobox-radius`             | `3px`                                   | Corner radius of the button when it has a border                   |
| `--combobox-inner-padding`      | `4px 0`                                 | Space above and below the button, inside the wrapper               |
| `--combobox-base-width`         | `173px`                                 | Width of the wrapper at `ComboBoxSize.base`                        |
| `--combobox-middle-width`       | `300px`                                 | Width of the wrapper at `ComboBoxSize.middle`                      |
| `--combobox-big-width`          | `350px`                                 | Width of the wrapper at `ComboBoxSize.big`                         |
| `--combobox-huge-width`         | `500px`                                 | Width of the wrapper at `ComboBoxSize.huge`                        |

</APITable>

The four widths only apply with `scaled` off, and they size the wrapper, not the button: the
button keeps its own fixed 173, 300, 350 or 500px, so a larger value widens only the empty area
beside it. Under `noBorder` the button has no border and so no radius.

`--combobox-bg` and `--combobox-open-bg` are read by the stylesheet and paint nothing: the rule
that uses them waits for a `noBorder` class on the wrapper, which the component never sets.

The list is a [`DropDown`](../overlays/drop-down.md) and takes that component's variables.

## Accessibility

- The button is a `<div role="button">` with `aria-haspopup="listbox"`, and `aria-expanded` and
  `aria-pressed` that are both true while the list is open; `aria-disabled` follows
  `isDisabled`. Its `tabIndex` defaults to `0`, so it is reachable. It used to default to `-1`,
  which left the control off the keyboard entirely. Focus gets there, but only a click opens the
  list: Enter and Space on the button do nothing, Escape does not close it, and the arrow keys
  do not move through it, as above.
- The options are `role="option"` rows in a `role="listbox"` that is not linked to the button by
  `aria-controls` or `aria-activedescendant`.
- The control's name comes from its content, the selected option's label, which says the value
  but not what is being chosen. Put it in a
  [`FieldContainer`](./field-container.md), or give it an `aria-label` through a wrapper.
- `title` renders the kit's hover tooltip, which is not an accessible name and needs
  [`RootTooltip`](../overlays/tooltip.md) mounted.

## Test ids

<APITable>

| Element     | `data-testid`                                               |
| ----------- | ----------------------------------------------------------- |
| The control | `combobox`, overridable with `dataTestId`                   |
| The list    | set by `dropDownTestId`, otherwise `dropdown`               |
| An option   | the option's `dataTestId`, otherwise `drop_down_item_<key>` |

</APITable>

The button inside carries `data-test-id="combo-button"` — with hyphens, unlike everything else
in the kit — and so do its icon, badge and arrow.

## Related

- [`DropDown`](../overlays/drop-down.md) — the list this opens, and its own props.
- [`DropDownItem`](../overlays/drop-down-item.md) — what each option becomes.
- [`FieldContainer`](./field-container.md) — the label and error text around it.
