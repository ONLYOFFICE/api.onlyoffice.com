---
description: "The bar above a file listing: search, a filter panel, a sort menu, a view switch and the chips for what is in force."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/filter/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# FilterInput

The bar above a file listing: search, a filter panel, a sort menu, a view switch and the chips for
what is in force. It holds no filter state of its own — you tell it what is selected through two
getters and it tells you what changed.

<ThemedImage alt="Filter" width={1014} sources={{ light: require('./filter--primary-light.png').default, dark: require('./filter--primary-dark.png').default }} />

## Use this when / not when

- **This is portal-internal.** Its filter groups, its contacts pages and its room grouping row are
  DocSpace's; the type even names the pages it can be on.
- Use it above a listing that already has a filter model of the shape the panel expects.
- Not for a plain search box — [`SearchInput`](../form-controls/search-input.md) is that, and this renders
  one inside itself.
- Not for the chips alone — [`SelectedItem`](../data-display/selected-item.md) is the chip.
- **Every getter must be stable.** They are effect dependencies, and one recreated on each render
  either re-runs a request or loops; see the behaviour notes.
- **It renders no selector.** The step where the panel picks a person or a room is yours, through
  `renderSelector`.

## Import

```ts
import FilterInput from "@onlyoffice/apps-ui-kit/components/filter";
```

It is a **default** export, so the name is yours to choose; `FilterInput` is also exported by name
and reaches the root barrel `@onlyoffice/apps-ui-kit` through it.

Needs `ThemeProvider` above it in the tree for its colours, and `TranslationProvider` for the
labels it does not take as props — "Clear all", "All rooms", "Create group" and the group
management tooltip render as **empty strings** without one.


## Stories

### Default

The bar as a desktop listing shows it: the search box, the filter button, the sort button and the button that switches to the other view. Change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={1014} sources={{ light: require('./filter--default-light.png').default, dark: require('./filter--default-dark.png').default }} />

### Document Types

The filter panel with one group of options, opened for you when the story loads. Pick a type and press Apply to see the selection reach `onFilter` in the Actions panel.

<ThemedImage alt="Document Types" width={1024} sources={{ light: require('./filter--document-types-light.png').default, dark: require('./filter--document-types-dark.png').default }} />

### With Selected Filters

A filter already in force when the bar mounts: its chip is under the search box and its option is highlighted in the panel, opened for you when the story loads (`initSelectedFilterData`). Apply stays disabled until the selection changes.

<ThemedImage alt="With Selected Filters" width={1024} sources={{ light: require('./filter--with-selected-filters-light.png').default, dark: require('./filter--with-selected-filters-dark.png').default }} />

### Multiple Filter Groups

Several groups in one panel, each under its heading and divided by a line, so a listing can be narrowed by type, status and author at once. The panel opens for you when the story loads; one option can be picked per group.

<ThemedImage alt="Multiple Filter Groups" width={1024} sources={{ light: require('./filter--multiple-filter-groups-light.png').default, dark: require('./filter--multiple-filter-groups-dark.png').default }} />

### Rooms Filter

The panel of a listing of rooms: it shows a loading skeleton for half a second before the options appear, and passes the rooms flag on to `renderSelector` (`isRooms`). The panel opens for you when the story loads.

<ThemedImage alt="Rooms Filter" width={1024} sources={{ light: require('./filter--rooms-filter-light.png').default, dark: require('./filter--rooms-filter-dark.png').default }} />

### Disabled Filter

The bar while the listing is being reordered, when searching, filtering and sorting would fight the new order: the search box is disabled and the filter button is gone (`isIndexEditingMode`), and so are the sort button and the view switch (`isIndexing`).

<ThemedImage alt="Disabled Filter" width={1014} sources={{ light: require('./filter--disabled-filter-light.png').default, dark: require('./filter--disabled-filter-dark.png').default }} />

### View Selector Default

The view switch the sort menu holds on smaller screens: one button per view, the current one filled. Click the other icon to switch views.

<ThemedImage alt="View Selector Default" width={78} sources={{ light: require('./filter--view-selector-default-light.png').default, dark: require('./filter--view-selector-default-dark.png').default }} />

### View Selector Disabled

The view switch greyed out while switching views is not possible; clicks on its icons do nothing (`isDisabled`).

<ThemedImage alt="View Selector Disabled" width={78} sources={{ light: require('./filter--view-selector-disabled-light.png').default, dark: require('./filter--view-selector-disabled-dark.png').default }} />

### View Selector Filter Mode

The single button the bar shows on a desktop: it carries the icon of the view you would switch to, not the current one, and turns into the other icon when clicked (`isFilter`).

<ThemedImage alt="View Selector Filter Mode" width={48} sources={{ light: require('./filter--view-selector-filter-mode-light.png').default, dark: require('./filter--view-selector-filter-mode-dark.png').default }} />

### With Filter Chips

The filters in force as chips under the bar, so the reader sees what narrows the listing and can drop any of it in one click. Click a chip to remove it (`removeSelectedItem`); the "Clear all" link appears once more than one chip is shown (`clearAll`).

<ThemedImage alt="With Filter Chips" width={1014} sources={{ light: require('./filter--with-filter-chips-light.png').default, dark: require('./filter--with-filter-chips-dark.png').default }} />

### Panel Option Kinds

The kinds of option a group can hold besides tags, for filters that are not a choice among a few words. The panel opens for you when the story loads:

- **Documents**, **Spreadsheets** — tags, one of which can be picked
- **Anywhere** — a drop-down list of values (`withOptions` with `options`)
- **Exclude subfolders** — a checkbox, in a group without a heading (`isCheckbox`, `withoutHeader`)

<ThemedImage alt="Panel Option Kinds" width={1024} sources={{ light: require('./filter--panel-option-kinds-light.png').default, dark: require('./filter--panel-option-kinds-dark.png').default }} />

### Sort Menu On Tablet

The sort menu on a device narrower than a desktop, opened for you when the story loads: the view switch has left the bar and heads the menu, above the sort fields (`currentDeviceType`). The current field carries an arrow for its direction; pick it again to reverse it (`onSort`).

<ThemedImage alt="Sort Menu On Tablet" width={1014} sources={{ light: require('./filter--sort-menu-on-tablet-light.png').default, dark: require('./filter--sort-menu-on-tablet-dark.png').default }} />

### With Grouping Row

A row of group chips under the bar, for a listing its host has sorted into groups: "All rooms" first, the chosen group highlighted (`currentGroupId`), and the groups that do not fit behind the "..." button. Click a chip to choose it (`onFilterByGroup`); the button at the end of the row opens the host's group management (`setEditRoomGroupsDialogVisible`).

<ThemedImage alt="With Grouping Row" width={1014} sources={{ light: require('./filter--with-grouping-row-light.png').default, dark: require('./filter--with-grouping-row-dark.png').default }} />

### With Main Button

A main button inside the search box, for a listing that has no room for one of its own beside the bar (`showMainButton`, `mainButtonProps`).

<ThemedImage alt="With Main Button" width={1014} sources={{ light: require('./filter--with-main-button-light.png').default, dark: require('./filter--with-main-button-dark.png').default }} />

### Right To Left

The bar in a right-to-left interface: the search box starts at the right edge, the filter, sort and view buttons line up at the left, and the chips and the "Clear all" link run from right to left.

<ThemedImage alt="Right To Left" width={1014} sources={{ light: require('./filter--right-to-left-light.png').default, dark: require('./filter--right-to-left-dark.png').default }} />

### Css Customization

The variables of the bar set on one wrapper -- the variables are listed under CSS variables on this page. Hover the filter and view buttons, and open the sort menu, to see the hover and menu values. The sort menu's view icons appear only below the desktop layout, so set those two with `currentDeviceType` in the Controls panel; the panel's variables apply only on `:root` or `body`, because it renders in a portal.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./filter--css-customization-light.png').default, dark: require('./filter--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useCallback, useState } from "react";

import FilterInput from "@onlyoffice/apps-ui-kit/components/filter";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function ListingFilter() {
  const [search, setSearch] = useState("");
  const [clearSearch, setClearSearch] = useState(false);

  const getSelectedInputValue = useCallback(() => search, [search]);
  const getSelectedFilterData = useCallback(() => [], []);
  const getViewSettingsData = useCallback(() => [], []);
  const getFilterData = useCallback(async () => [], []);
  const getSortData = useCallback(() => [], []);
  const getSelectedSortData = useCallback(
    () => ({ sortDirection: "asc" as const, sortId: "AZ" as const }),
    [],
  );

  return (
    <FilterInput
      placeholder="Search"
      onSearch={setSearch}
      onClearFilter={() => setSearch("")}
      clearSearch={clearSearch}
      setClearSearch={setClearSearch}
      getSelectedInputValue={getSelectedInputValue}
      getSelectedFilterData={getSelectedFilterData}
      getViewSettingsData={getViewSettingsData}
      getFilterData={getFilterData}
      getSortData={getSortData}
      getSelectedSortData={getSelectedSortData}
      onFilter={() => {}}
      onSort={() => {}}
      onSortButtonClick={() => {}}
      onChangeViewAs={() => {}}
      removeSelectedItem={() => {}}
      clearAll={() => {}}
      view="files"
      viewAs="row"
      viewSelectorVisible={false}
      filterHeader="Filter"
      selectorLabel="Select"
      filterTitle="Filter"
      sortByTitle="Sort by"
      userId="1"
      currentDeviceType={DeviceType.desktop}
      isIndexing={false}
      isIndexEditingMode={false}
      isRecentFolder={false}
      isRooms={false}
      isContactsPage={false}
      isContactsPeoplePage={false}
      isContactsGroupsPage={false}
      isContactsInsideGroupPage={false}
      isContactsGuestsPage={false}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `clearAll` | `() => void` | Called by the "clear all" link, which appears once more than one chip carries a label. |
| `clearSearch` | `boolean` | Set it to `true` to clear the search box. The component empties the field, calls `onClearFilter` and then calls `setClearSearch(false)` itself. |
| `currentDeviceType` | `DeviceType` | Which layout to render: on a desktop the view selector is a control of its own, below that it moves inside the sort menu. Nothing here measures the viewport. |
| `filterHeader` | `string` | Heading of the filter panel. Nothing translates it for you. |
| `filterTitle` | `string` | Native tooltip of the filter button. |
| `getFilterData` | `TGetFilterData` | Loads the groups of filter options, awaited when the filter panel opens. |
| `getSelectedFilterData` | `() => Promise<TItem[]> \| TItem[]` | Returns the filters in force, which become the chips under the bar. **Give it a stable identity**: it is re-read whenever the function changes. |
| `getSelectedInputValue` | `() => string` | Returns the text the search box should show. **Give it a stable identity**: the effect that reads it also focuses the field, so a new function on every render keeps stealing focus. |
| `getSelectedSortData` | `TGetSelectedSortData` | Returns the sort in force, as a key and a direction. |
| `getSortData` | `TGetSortData` | Returns the sort options. It is called when the sort menu opens. |
| `getViewSettingsData` | `() => TViewSelectorOption[]` | Returns the views the selector offers. **Give it a stable identity**: it is called during render and again in an effect keyed on the function itself, so a new one each render loops. |
| `isContactsGroupsPage` | `boolean` | Whether the contacts page is showing groups. |
| `isContactsGuestsPage` | `boolean` | Whether the contacts page is showing guests. |
| `isContactsInsideGroupPage` | `boolean` | Whether the contacts page is showing the members of one group. |
| `isContactsPage` | `boolean` | Whether the listing is the contacts page. It and the four flags below decide which groups the panel shows. |
| `isContactsPeoplePage` | `boolean` | Whether the contacts page is showing people. |
| `isIndexEditingMode` | `boolean` | Removes the filter button while the listing is being reordered. |
| `isIndexing` | `boolean` | Whether the listing is being reordered, which removes the sort button and the view selector. |
| `isRecentFolder` | `boolean` | Whether the listing is the recent folder. It hides the sort button and keeps the view selector on screen below the desktop breakpoint. |
| `isRooms` | `boolean` | Whether the listing is of rooms, which changes which filter groups are offered. |
| `onChangeViewAs` | `TOnChangeViewAs` | Called when the view is switched. The component holds no view state of its own. |
| `onClearFilter` | `() => void` | Called when the search box is cleared through `clearSearch`. |
| `onFilter` | `TOnFilter` | Called with the whole new selection whenever the filter panel is applied. |
| `onSearch` | `(value: string) => void` | Called with the search string on every keystroke — the string itself, not an event. The component keeps no value of its own beyond the caret. |
| `onSort` | `TOnSort` | Called with the chosen key and direction. |
| `onSortButtonClick` | `TOnSortButtonClick` | Called with `true` when the sort menu opens and `false` when it closes. |
| `placeholder` | `string` | Placeholder of the search box. Nothing translates it for you. |
| `removeSelectedItem` | `({ key, group, }: { key: string \| number; group?: FilterGroups; }) => void` | Called when one chip is removed. The component drops the chip from its own list first and does not wait for you. |
| `selectorLabel` | `string` | Heading of the selector the panel opens for a group that picks a person or a room. |
| `setClearSearch` | `(value: boolean) => void` | Called with `false` once a requested clear has been carried out. |
| `sortByTitle` | `string` | Native tooltip of the sort button. |
| `userId` | `string` | Id of the signed-in person, handed to the selector so it can exclude them. |
| `view` | `string` | Name of the current page, used as the key under which the sort menu remembers its width. |
| `viewAs` | `TViewAs` | The listing's current view. `"table"` is treated as `"row"` by the sort menu and the view selector. |
| `viewSelectorVisible` | `boolean` | Whether a view selector belongs on screen at all. On a desktop it is a separate control; below that breakpoint it moves inside the sort menu. |
| `currentGroupId`? | `null \| string` | Current group ID from URL filter - used to highlight the correct group tag on page load |
| `disableThirdParty`? | `boolean` | Removes the third-party storage group from the filter panel. |
| `getAllRoomGroups`? | `() => Promise<TRoomGroup[]>` | Loads the room groups. It is awaited once, only while `organizeRoomsGrouping` is set, and only to decide that the row may be shown — the groups themselves come from `roomGroups`. |
| `initSearchValue`? | `string` | Text the search box starts with, read once. |
| `initSelectedFilterData`? | `TItem[]` | The filters in force at the first render, so the chips are right before `getSelectedFilterData` has resolved. |
| `isFilterOrSearchActive`? | `boolean` | When true, hides the room grouping row because filters/search are active |
| `isFlowsPage`? | `boolean` | Whether the listing is the flows page. It removes the filter button, the sort button and the view selector outright. |
| `isFormsSection`? | `boolean` | Switches the grouping row wording from rooms to form spaces. |
| `mainButtonIcon`? | `React.ReactNode` | Icon node rendered inside the MainButton (12x12) |
| `mainButtonProps`? | `MainButtonProps` | Props for the MainButton displayed to the left of the search field |
| `onFilterByGroup`? | `(groupId: string \| null) => void` | Called with a group's id when its chip is chosen, and with `null` for "all rooms". |
| `organizeRoomsGrouping`? | `boolean` | Whether room grouping is turned on for the portal. Without it the grouping row is never rendered. |
| `renderSelector`? | `TRenderSelector` | Renders the selector the panel opens for a person or a room group. Without it that step is empty — this package ships no portal selector. |
| `roomGroups`? | `TRoomGroup[]` | The room groups to show as chips. Only those whose `icon` is an object are rendered; a string or `null` icon drops the group from the row. |
| `setEditRoomGroupsDialogVisible`? | `(visible: boolean, roomIds?: number[] \| null, openInCreateMode?: boolean) => void` | Opens the host's "manage room groups" dialog. Without it the group management button and the create-group chip do nothing. |
| `showMainButton`? | `boolean` | Shows a MainButton to the left of the search field |
| `withRoomGroups`? | `boolean` | Whether the listing is the Rooms or the Forms section. It is one of four conditions for the room grouping row. |

</APITable>

## Recipes

### Clearing the search box from outside

There is no value prop. To empty the field, raise `clearSearch`: the component clears it, calls
`onClearFilter` and then calls `setClearSearch(false)` itself, so the flag is a pulse rather than a
state you hold at `true`.

```tsx
import { useCallback, useState } from "react";

import FilterInput from "@onlyoffice/apps-ui-kit/components/filter";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function ResettableFilter() {
  const [search, setSearch] = useState("");
  const [clearSearch, setClearSearch] = useState(false);

  const getSelectedInputValue = useCallback(() => search, [search]);
  const empty = useCallback(() => [], []);
  const emptyAsync = useCallback(async () => [], []);
  const getSelectedSortData = useCallback(
    () => ({ sortDirection: "asc" as const, sortId: "AZ" as const }),
    [],
  );

  return (
    <div>
      <FilterInput
        placeholder="Search"
        onSearch={setSearch}
        onClearFilter={() => setSearch("")}
        clearSearch={clearSearch}
        setClearSearch={setClearSearch}
        getSelectedInputValue={getSelectedInputValue}
        getSelectedFilterData={empty}
        getViewSettingsData={empty}
        getFilterData={emptyAsync}
        getSortData={empty}
        getSelectedSortData={getSelectedSortData}
        onFilter={() => {}}
        onSort={() => {}}
        onSortButtonClick={() => {}}
        onChangeViewAs={() => {}}
        removeSelectedItem={() => {}}
        clearAll={() => setSearch("")}
        view="files"
        viewAs="row"
        viewSelectorVisible={false}
        filterHeader="Filter"
        selectorLabel="Select"
        filterTitle="Filter"
        sortByTitle="Sort by"
        userId="1"
        currentDeviceType={DeviceType.desktop}
        isIndexing={false}
        isIndexEditingMode={false}
        isRecentFolder={false}
        isRooms={false}
        isContactsPage={false}
        isContactsPeoplePage={false}
        isContactsGroupsPage={false}
        isContactsInsideGroupPage={false}
        isContactsGuestsPage={false}
      />
      <Button label="Reset" onClick={() => setClearSearch(true)} />
    </div>
  );
}
```

### The chips under the bar

The chips come from `getSelectedFilterData`, not from a prop. Removing one calls
`removeSelectedItem` — and the component has already dropped the chip from its own list by then, so
your model has to catch up rather than confirm.

```tsx
import { useCallback, useState } from "react";

import FilterInput from "@onlyoffice/apps-ui-kit/components/filter";
import type { TItem } from "@onlyoffice/apps-ui-kit/components/filter";
import { DeviceType, FilterGroups } from "@onlyoffice/apps-ui-kit/enums";

export function FilterWithChips() {
  const [items, setItems] = useState<TItem[]>([
    { key: "docx", label: "Documents", group: FilterGroups.filterType },
  ]);

  const getSelectedFilterData = useCallback(() => items, [items]);
  const empty = useCallback(() => [], []);
  const emptyAsync = useCallback(async () => [], []);
  const getSelectedSortData = useCallback(
    () => ({ sortDirection: "asc" as const, sortId: "AZ" as const }),
    [],
  );

  return (
    <FilterInput
      placeholder="Search"
      onSearch={() => {}}
      onClearFilter={() => {}}
      clearSearch={false}
      setClearSearch={() => {}}
      getSelectedInputValue={useCallback(() => "", [])}
      getSelectedFilterData={getSelectedFilterData}
      getViewSettingsData={empty}
      getFilterData={emptyAsync}
      getSortData={empty}
      getSelectedSortData={getSelectedSortData}
      onFilter={() => {}}
      onSort={() => {}}
      onSortButtonClick={() => {}}
      onChangeViewAs={() => {}}
      removeSelectedItem={({ key }) =>
        setItems((rest) => rest.filter((item) => item.key !== key))
      }
      clearAll={() => setItems([])}
      view="files"
      viewAs="row"
      viewSelectorVisible={false}
      filterHeader="Filter"
      selectorLabel="Select"
      filterTitle="Filter"
      sortByTitle="Sort by"
      userId="1"
      currentDeviceType={DeviceType.desktop}
      isIndexing={false}
      isIndexEditingMode={false}
      isRecentFolder={false}
      isRooms={false}
      isContactsPage={false}
      isContactsPeoplePage={false}
      isContactsGroupsPage={false}
      isContactsInsideGroupPage={false}
      isContactsGuestsPage={false}
    />
  );
}
```

## Behaviour the types don't state

- **Every getter is an effect dependency, and an unstable one is a bug.**
  `getViewSettingsData` is called during render and again in an effect keyed on the function itself,
  which then sets state — pass an inline arrow and the component re-renders without end.
  `getSelectedFilterData` re-fetches on every new identity, and `getSelectedInputValue`
  **focuses the search box** each time it is read. Wrap all of them in `useCallback`.
- **The search box has no value prop.** What it shows comes from `getSelectedInputValue`, what you
  get back is the string, and clearing it is the `clearSearch` pulse described above.
- **The filter panel works on a copy.** It opens as a side panel of grouped options — tags,
  checkboxes, toggles, drop-down lists and selector steps — and the whole selection reaches
  `onFilter` only when Apply is pressed; closing it discards the changes. The one exception is the
  clear icon in the panel's header, which calls `onFilter([])` at once when filters were in force.
- **The sort menu marks the current field with an arrow** pointing in the current direction; picking
  that field again reverses the direction, and picking another keeps it.
- **The sort button disappears** whenever `isIndexing`, `isFlowsPage` or `isRecentFolder` is set,
  and the filter button whenever `isIndexEditingMode` or `isFlowsPage` is; `isIndexEditingMode`
  also disables the search box.
- **The view selector is in two places.** On a desktop it is a single button beside the sort
  button that offers the view you are not in; below that breakpoint it is rendered inside the sort menu instead, and
  `viewSelectorVisible` governs both.
- **`viewAs="table"` is quietly treated as `"row"`** by the sort menu and the view selector.
- **The room grouping row needs four things at once**: `withRoomGroups`, `organizeRoomsGrouping`, a
  resolved `getAllRoomGroups`, and `isFilterOrSearchActive` unset. Only groups whose `icon` is an
  object survive — a string or `null` icon drops the group — and the icon is an SVG source turned
  into a data URL.
- **That row measures itself in a hidden copy.** Every chip is rendered twice, once off-screen, and
  the visible row appears only once those measurements are in; the overflow spills into a menu.
- **Removing a chip is optimistic.** The component filters its own list first and calls
  `removeSelectedItem` afterwards, so a failed removal leaves the bar and your model disagreeing
  until the next read.
- **"Clear all" needs two labelled chips.** The link appears only when more than one selected item
  carries a label.
- **It assigns `window.onscroll`** when the search box is focused on an iOS tablet, replacing any
  handler already there with a no-op.
- **`renderSelector` is not optional in practice.** Any filter group that picks a person or a room
  opens a step this package cannot fill.
- The bar is a full-width flex column: a 32px row of controls with an 8px margin under it, then the
  chips, then the grouping row.

## CSS variables

<APITable>

| Variable                        | Default | Effect                                                                                                          |
| ------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `--filter-btn-border`           | theme   | Border of the filter button, as a `border` shorthand                                                            |
| `--filter-btn-hover-border`     | theme   | The same on hover                                                                                               |
| `--filter-btn-open-fill`        | theme   | Fill of the filter button's icon while the panel is open                                                        |
| `--filter-btn-radius`           | `3px`   | Corner radius of the filter button                                                                              |
| `--filter-sort-bg`              | theme   | Background of the sort button                                                                                   |
| `--filter-sort-selected-bg`     | theme   | Background of the current field in the open sort menu                                                           |
| `--filter-sort-fill`            | theme   | Colour of the direction arrow in the open sort menu                                                             |
| `--filter-sort-selected-icon`   | theme   | Colour of the current view's icon in the sort menu, below the desktop layout only                               |
| `--filter-sort-unselected-icon` | theme   | Colour of the other view's icon there                                                                           |
| `--filter-view-fill`            | theme   | Background of the view switch button                                                                            |
| `--filter-view-checked`         | theme   | Colour of the view switch button's icon                                                                         |
| `--filter-view-border`          | theme   | Border colour of the view switch button                                                                         |
| `--filter-view-hover-border`    | theme   | Meant as that border on hover, but it has no effect: the rule reading it has an invalid selector and is dropped |
| `--filter-view-hover-icon`      | theme   | Colour of the view switch button's icon on hover                                                                |
| `--filter-tag-border`           | theme   | Border of an option tag in the filter panel, as a `border` shorthand                                            |
| `--filter-tag-selected`         | theme   | Background and border colour of a picked option tag                                                             |
| `--filter-tag-radius`           | `16px`  | Corner radius of an option tag                                                                                  |
| `--filter-tag-height`           | `28px`  | Height of an option tag                                                                                         |
| `--filter-separator`            | theme   | Colour of the line between groups in the filter panel                                                           |
| `--filter-bg`                   | theme   | Background of the step `renderSelector` fills inside the panel — not of the panel itself                        |
| `--filter-width`                | `480px` | Width of that step                                                                                              |

</APITable>

The two sort-menu view icons are coloured by position, not by which view they are: the rules
assume the row view comes first in `getViewSettingsData`, so a different order swaps the colours.

The filter panel is a [`ModalDialog`](../overlays/modal-dialog.md) rendered in a portal on
`<body>`, outside any wrapper you put round the bar, so `--filter-tag-*`, `--filter-separator`,
`--filter-bg` and `--filter-width` take effect only when set on `:root` or `body`. The search box,
the chips and the buttons inside the bar read their own components' variables —
[`SearchInput`](../form-controls/search-input.md), [`SelectedItem`](../data-display/selected-item.md),
`IconButton` and `Button`.

## Accessibility

- **The buttons are `<div>`s with an `onClick`.** The filter button, the sort button, the view
  switch, the chips and the overflow control have no role, no `tabindex` and no key handler, so none
  of them can be reached or operated from the keyboard.
- The only labels the controls carry are the native `title` attributes from `filterTitle` and
  `sortByTitle`; the panel's heading comes from `filterHeader`, and nothing translates any of them.
- The filter panel is a [`ModalDialog`](../overlays/modal-dialog.md): `role="dialog"` with
  `aria-modal`, closed by Escape. The bar passes it no `aria-label`, so it is announced unnamed.
- The hidden measurement copy of the grouping row is `aria-hidden`, so it is not read twice.
- The search box is the kit's [`SearchInput`](../form-controls/search-input.md) and is the one part of the
  bar a keyboard user can use — but it takes focus by itself whenever the value getter changes.
- Nothing announces that the listing has been filtered or sorted; the chips are the only report, and
  they are not a live region.

## Test ids

<APITable>

| Element              | `data-testid`                   |
| -------------------- | ------------------------------- |
| The bar              | `filter_container`              |
| The "clear all" link | `filter_clear_all_link`         |
| One chip             | `filter_selected_item_<key>`    |
| A room group chip    | `room_group_tag_<id>`           |
| The overflow control | `rooms_groups_overflow_trigger` |

</APITable>

None of them are settable.

## Related

- [`Section`](../layout/section.md) — the layout whose filter slot this belongs in.
- [`SearchInput`](../form-controls/search-input.md) — the search box it renders, on its own.
- [`SelectedItem`](../data-display/selected-item.md) — the chip it renders for each filter in force.
