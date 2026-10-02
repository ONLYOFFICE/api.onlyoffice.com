---
description: "Drop-down for choosing an access level, with an icon, a description and a paid badge on each row."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/access-right-select/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# AccessRightSelect

Drop-down for choosing an access level, with an icon, a description and a paid badge on each
row. It is a [`ComboBox`](./combobox.md) whose options are laid out as access rows.

<ThemedImage alt="AccessRightSelect" width={147} sources={{ light: require('./access-right-select--primary-light.png').default, dark: require('./access-right-select--primary-dark.png').default }} />

## Use this when / not when

- Use wherever a role or permission is picked — inviting someone to a room, changing a member's
  access, setting what a share link allows.
- Not for a plain list of options. [`ComboBox`](./combobox.md) is that; this one spends
  its layout on the icon, the second line and the badge.
- Not for choices that are not exclusive, and not for more than a screenful — the drop-down does
  not paginate.
- Not to _show_ an access level that cannot be changed. Render the label as text instead of a
  disabled control.

## Import

```ts
import { AccessRightSelect } from "@onlyoffice/apps-ui-kit/components/access-right-select";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

`AccessRightSelectProps` is not exported — type a wrapper's props yourself.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, and `TranslationProvider`
from `@onlyoffice/apps-ui-kit/providers/translation` because a refused choice is reported
through a toast. Mount [`Toast`](../feedback/toast.md) once in your app, or that message is lost.


## Stories

### Default

The drop-down as it is placed next to a person or a link: open it to see each level's icon, description and paid badge, and pick one to see the button follow (`onSelect`, logged in the Actions panel). Change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={147} sources={{ light: require('./access-right-select--default-light.png').default, dark: require('./access-right-select--default-dark.png').default }} />

### Display Types

How much of the chosen level the button shows, from the most room to the least:

- **Editor** — the label alone, the usual form (no `type`)
- **Editor, Can edit and share files** — the label with the description underneath, for a form where the choice needs explaining (`type="descriptive"`)
- **The folder icon** — the icon alone, for a row with no room for text; the list still shows every label (`type="onlyIcon"`)

<ThemedImage alt="Display Types" width={413} sources={{ light: require('./access-right-select--display-types-light.png').default, dark: require('./access-right-select--display-types-dark.png').default }} />

### Restricted Choices

For a level the viewer may see but not grant. Open the list and pick **Full access**: a toast explains why, and the button keeps **Viewer**; **Commenter** and **Viewer** can still be picked (`isSelectionDisabled`, `availableAccess`, `selectionErrorText`). The toast needs `Toast` mounted once in the app.

<ThemedImage alt="Restricted Choices" width={125} sources={{ light: require('./access-right-select--restricted-choices-light.png').default, dark: require('./access-right-select--restricted-choices-dark.png').default }} />

### Disabled State

For an access level that cannot be changed right now, such as while the person is being removed: the button is greyed out and clicking it does not open the list (`isDisabled`).

<ThemedImage alt="Disabled State" width={147} sources={{ light: require('./access-right-select--disabled-state-light.png').default, dark: require('./access-right-select--disabled-state-dark.png').default }} />

### Loading State

For the moment a new level is being saved: a spinner takes the place of the label and icon, and the list cannot be opened until the save finishes (`isLoading`).

<ThemedImage alt="Loading State" width={147} sources={{ light: require('./access-right-select--loading-state-light.png').default, dark: require('./access-right-select--loading-state-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. Open any of the instances to see the row and panel variables; they render the list in place (`isDefaultMode={false}`), because a portalled list is out of reach of a wrapper's variables. The three instances share one wrapper:

- **Full access** — the usual button, for the button radius and everything in the list
- **The first icon** — `type="onlyIcon"`, for `--access-right-select-text`
- **The second icon** — `type="onlyIcon"` and `isDisabled`, for `--access-right-select-disabled-icon`

<ThemedImage alt="Css Customization" width={285} sources={{ light: require('./access-right-select--css-customization-light.png').default, dark: require('./access-right-select--css-customization-dark.png').default }} />

## Minimal example

Each option is a `TOption`: `key` identifies it, `label` is the first line, `description` the
second, and `access` is the value you care about.

```tsx
import { useState } from "react";
import { AccessRightSelect } from "@onlyoffice/apps-ui-kit/components/access-right-select";
import type { TOption } from "@onlyoffice/apps-ui-kit/components/combobox";

const OPTIONS: TOption[] = [
  {
    key: "editor",
    label: "Editor",
    description: "Can edit and share",
    access: 1,
  },
  { key: "viewer", label: "Viewer", description: "Can only read", access: 2 },
];

export function MemberAccess() {
  const [access, setAccess] = useState<TOption>(OPTIONS[0]);

  return (
    <AccessRightSelect
      accessOptions={OPTIONS}
      selectedOption={access}
      scaled={false}
      onSelect={(option) => setAccess(option)}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `accessOptions` | `TOption[]` | The access levels to choose from. Each is rendered as a row with its icon, label, description and quota badge; an entry with `isSeparator` becomes a divider. Ignored when `advancedOptions` is given. |
| `availableAccess`? | `number[]` | The `access` values that may still be chosen while `isSelectionDisabled` is set. Without it only the current level is allowed. |
| `comboIcon`? | `string` | Passed straight to `ComboBox`: URL of an icon to show instead of the arrow. |
| `dataTestId`? | `string` | `data-testid` of the combo button. |
| `directionX`? | `"left" \| "right"` | Which side of the button the drop-down opens towards. |
| `directionY`? | `"both" \| "bottom" \| "top"` | Whether the drop-down opens above or below the button. |
| `fillIcon`? | `boolean` | Passed straight to `ComboBox`: whether the arrow icon is recoloured. |
| `isDefaultMode`? | `boolean` | Passed straight to `ComboBox`: renders the open list in a portal at the end of the page, positioned against the button; `false` renders it in place, next to the button, where a wrapper's CSS variables reach it. Default: `true`. |
| `isSelectionDisabled`? | `boolean` | Whether picking a level other than the current one is refused. What is still allowed is `availableAccess`; everything else raises a toast. |
| `modernView`? | `boolean` | Passed straight to `ComboBox`: its compact presentation. |
| `selectionErrorText`? | `ReactNode` | The toast shown when a refused level is picked. |
| `setIsOpenItemAccess`? | `Dispatch<SetStateAction<boolean>>` | Passed straight to `ComboBox`: told when the drop-down opens and closes. |
| `topSpace`? | `number` | Passed straight to `ComboBox`: space above the drop-down, in pixels. |
| `usePortalBackdrop`? | `boolean` | Passed straight to `ComboBox`: whether the backdrop is rendered in a portal. |

</APITable>

#### Inherited from `TComboboxProps`

Declared by [`components/combobox`](./combobox.md) and accepted here too.

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `selectedOption` | `TOption` | The option to show in the button. The component does not choose it: keep it in your own state and set it from `onSelect`. |
| `advancedOptions`? | `ReactElement<{ children?: React.ReactNode; }, string \| JSXElementConstructor<any>>` | Element whose children replace the list entirely, for a menu that is not a list of options. `options` is then used only for the button. |
| `className`? | `string` | Applied to the element that wraps the button and the list. |
| `displaySelectedOption`? | `boolean` | Keeps the option that is currently selected usable and highlights it. Without it that option is rendered disabled, so the value cannot be picked again. |
| `fixedDirection`? | `boolean` | Keeps `directionX` and `directionY` as given instead of flipping them. |
| `isAside`? | `boolean` | Marks the list's backdrop as belonging to a side panel. |
| `isDisabled`? | `boolean` | Greys the button out and stops it opening. |
| `isLoading`? | `boolean` | Replaces the arrow with a spinner and stops the button opening. |
| `isMobileView`? | `boolean` | Pins the list to the bottom of the screen, full width, in portrait. |
| `manualWidth`? | `string` | Width of the list as a CSS length. It has nothing to do with the button's width — use `scaledOptions` for that. Default: `"200px"`. |
| `manualY`? | `number \| string` | (Non-portal mode) Exact vertical offset of the list from the button. |
| `noBorder`? | `boolean` | Removes the button's border. |
| `noSelect`? | `boolean` | Whether the button's text cannot be selected. Default: `true`. |
| `onSelect`? | `(option: TOption) => void` | Called with the option that was clicked. Nothing changes on its own — `selectedOption` is yours to update. |
| `scaled`? | `boolean` | Makes the button take the full width of its parent, which overrides `size`. Default: `true`. |
| `scaledOptions`? | `boolean` | Matches the list's width to the button's instead of `manualWidth`. |
| `shouldShowBackdrop`? | `boolean` | Renders the backdrop even when another one is already on screen. |
| `showDisabledItems`? | `boolean` | Ignored. The list is always told to keep disabled options. |
| `size`? | `"base" \| "big" \| "content" \| "huge" \| "middle"` | One of the fixed widths — 173, 300, 350 or 500px, or the content's own. It only applies when `scaled` is false. Default: `ComboBoxSize.base`. |
| `title`? | `string` | Hover tooltip for the whole control. It needs `RootTooltip` mounted. |
| `type`? | `TCombobox` | Shape of the button: `badge` draws the label as a coloured badge, `onlyIcon` drops the label, `descriptive` adds the option's `description` under it. |
| `withBackdrop`? | `boolean` | Whether the list renders a backdrop to catch the next click. Default: `true`. |
| `withBackground`? | `boolean` | Gives that backdrop its dimming background. |
| `withBlur`? | `boolean` | Ignored. It reaches the list, which does not read it either. |
| `withoutBackground`? | `boolean` | Makes that backdrop transparent. |

</APITable>

## Recipes

### Loading

`isLoading` is passed through to the combo button, which shows the kit's loader in place of the
label.

```tsx
import { useState } from "react";
import { AccessRightSelect } from "@onlyoffice/apps-ui-kit/components/access-right-select";
import type { TOption } from "@onlyoffice/apps-ui-kit/components/combobox";

const OPTIONS: TOption[] = [
  { key: "editor", label: "Editor", access: 1 },
  { key: "viewer", label: "Viewer", access: 2 },
];

export function SavingAccess({
  save,
}: {
  save: (option: TOption) => Promise<void>;
}) {
  const [access, setAccess] = useState<TOption>(OPTIONS[0]);
  const [isSaving, setIsSaving] = useState(false);

  return (
    <AccessRightSelect
      accessOptions={OPTIONS}
      selectedOption={access}
      isLoading={isSaving}
      onSelect={async (option) => {
        setIsSaving(true);
        await save(option);
        setAccess(option);
        setIsSaving(false);
      }}
    />
  );
}
```

### Refusing some levels

`isSelectionDisabled` turns the list into a set of levels that may be _seen_ but mostly not
chosen. `availableAccess` names the ones that still work; anything else raises
`selectionErrorText` as a toast and the selection does not move.

```tsx
import { useState } from "react";
import { AccessRightSelect } from "@onlyoffice/apps-ui-kit/components/access-right-select";
import type { TOption } from "@onlyoffice/apps-ui-kit/components/combobox";

const OPTIONS: TOption[] = [
  { key: "manager", label: "Room manager", access: 1 },
  { key: "editor", label: "Editor", access: 2 },
  { key: "viewer", label: "Viewer", access: 3 },
];

export function LimitedAccess() {
  const [access, setAccess] = useState<TOption>(OPTIONS[2]);

  return (
    <AccessRightSelect
      accessOptions={OPTIONS}
      selectedOption={access}
      isSelectionDisabled
      availableAccess={[2, 3]}
      selectionErrorText="Your plan does not include room managers"
      onSelect={(option) => setAccess(option)}
    />
  );
}
```

## Behaviour the types don't state

- **A refused choice is reported by a toast, not to your code.** With `isSelectionDisabled`, an
  option outside `availableAccess` shows `selectionErrorText` through `toastr.error` and
  `onSelect` is never called — so [`Toast`](../feedback/toast.md) has to be mounted or the refusal
  is silent.
- **`advancedOptions` replaces `accessOptions` outright.** Pass it and the access rows are not
  built at all; you are rendering the drop-down's contents yourself.
- **`type: "onlyIcon"` blanks the label and the description** of the _selected_ option before
  handing it to the combo button, so the button shows the icon alone. The rows in the list keep
  their text.
- **The selection is mirrored, not owned.** `selectedOption` seeds the component's state and is
  re-applied whenever it changes, and the state also moves on its own when a row is clicked.
- **Only `icon`s that are strings are drawn.** They are rendered through `ReactSVG` as a URL; an
  element passed as an icon is dropped.
- **An option's `quota` turns into a paid badge** beside the label, coloured by its `color`.
- **The underlying ComboBox is always given an empty `options` array** — every row goes through
  `advancedOptions` — so props that act on `options` have nothing to act on.
- `topSpace`, `modernView`, `fillIcon`, `isDefaultMode`, `comboIcon`, `usePortalBackdrop` and
  `setIsOpenItemAccess` are forwarded to [`ComboBox`](./combobox.md) untouched and are
  documented there.
- The component is memoised, so a new `accessOptions` array built inline on every render defeats
  the memo without changing anything.

## CSS variables

Set these on an ancestor to retheme the rows and the icon-only button. Everything else the
stylesheet defines is private to it.

<APITable>

| Variable                                 | Default    | Effect                                                             |
| ---------------------------------------- | ---------- | ------------------------------------------------------------------ |
| `--access-right-select-text`             | theme text | Icon and arrow colour in the button, with `type: "onlyIcon"` only  |
| `--access-right-select-disabled-icon`    | theme grey | The same icon and arrow while `isDisabled`, with `"onlyIcon"` only |
| `--access-right-select-icon`             | theme text | Colour of a row's icon in the list                                 |
| `--access-right-select-description`      | theme grey | Colour of a row's second line                                      |
| `--access-right-select-description-size` | `13px`     | Font size of a row's second line                                   |
| `--access-right-select-gap`              | `8px`      | Gap between a row's icon and its text                              |
| `--access-right-select-item-padding`     | `7px 0`    | Padding of a row                                                   |

</APITable>

The button is a [`ComboBox`](./combobox.md) and the list a
[`DropDown`](../overlays/drop-down.md), and they take those components' variables —
`--combobox-radius` for the button's corners, `--dropdown-bg`, `--dropdown-border-style`,
`--dropdown-shadow` and `--dropdown-radius` for the panel.

The list renders in a portal at the end of the page by default, out of reach of a wrapper's
variables, so the row and panel variables set on a wrapper only apply with
`isDefaultMode={false}`, which renders it in place. With the portal, set them on `body` or
`:root`.

## Accessibility

- The roles are [`ComboBox`](./combobox.md)'s. The button is a `div` with
  `role="button"`, `aria-haspopup="listbox"` and `aria-expanded`, and it is in the tab order;
  the list is a `role="listbox"` of `role="option"` rows, each carrying `aria-selected` and
  `aria-disabled`, and a divider is a `role="separator"`.
- **The button opens on click only.** Enter and Space do nothing on it, and the arrow keys and
  Enter do not move through these rows, because the rows are not the combo box's own options.
- **The refusal message is a toast**, which is easy to miss and is not tied to the control.
- The second line of each row is plain text, not a description associated with the option, so it
  is read as part of the row rather than as help.
- Give the control a name through the surrounding markup; nothing here labels it.

## Test ids

<APITable>

| Element          | `data-testid`                            |
| ---------------- | ---------------------------------------- |
| An option        | `access_right_option_<key>`, lower-cased |
| The combo button | `dataTestId`, passed to `ComboBox`       |

</APITable>

## Related

- [`ComboBox`](./combobox.md) — what this is built on, and where the forwarded props live.
- [`DropDownItem`](../overlays/drop-down-item.md) — the rows it builds.
- [`Toast`](../feedback/toast.md) — where a refused choice is reported.
