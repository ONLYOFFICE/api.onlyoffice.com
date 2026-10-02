---
description: "Panel for picking one or many things out of a list too long to render at once."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/selector/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Selector

Panel for picking one or many things out of a list too long to render at once. It is the
portal's people picker, room picker and "save as" browser, and it brings its own search,
breadcrumbs, pagination and footer.

<ThemedImage alt="Selector" width={496} sources={{ light: require('./selector--primary-light.png').default, dark: require('./selector--primary-dark.png').default }} />

## Use this when / not when

- Use to choose users, groups, rooms, folders or files from a list you fetch a page at a time —
  it virtualises the rows, asks for the next page as they scroll past, and gives you the
  selection back in one callback.
- Not for a short, fixed list of options — [`ComboBox`](../form-controls/combobox.md) is that, and it
  costs none of the pagination machinery.
- Not for a table of data with columns — [`Table`](../table/index.md) is that.
- Not as a dialog on its own. Selector has no visibility prop; it fills whatever box you put it
  in. `useAside` is the one switch that turns it into a panel, and for anything else wrap it in
  [`ModalDialog`](./modal-dialog.md) yourself.

## Import

```ts
import { Selector } from "@onlyoffice/apps-ui-kit/components/selector";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

The folder also exports the three skeletons its own props ask for — `RowLoader`,
`SearchLoader`, `BreadCrumbsLoader` — and every type on this page.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, and `TranslationProvider`
from `@onlyoffice/apps-ui-kit/providers/translation` for the strings Selector prints on its own:
the user-type labels beside each person, and the empty screen's "Back" and "Clear filter" links.


## Stories

### Default

A long list that loads 100 rows at a time as you scroll, with one row picked at a time. The first row opens a "New folder" entry and the second is the inline name field for it (`isCreateNewItem`, `isInputItem`); change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={496} sources={{ light: require('./selector--default-light.png').default, dark: require('./selector--default-dark.png').default }} />

### Content Loading

Content refresh state: while new data is loading (search, tab change or folder navigation), the current list stays on screen dimmed and non-interactive instead of being replaced with a skeleton.

<ThemedImage alt="Content Loading" width={496} sources={{ light: require('./selector--content-loading-light.png').default, dark: require('./selector--content-loading-dark.png').default }} />

### Bread Crumbs

Use a folder trail when the list is one level of a folder tree. With more than three folders, the ones between the first and the last two collapse into a menu behind the dots; click an earlier folder and `onSelectBreadCrumb` reports it, so you can load that folder and pass new `items` and `breadCrumbs`.

<ThemedImage alt="Bread Crumbs" width={496} sources={{ light: require('./selector--bread-crumbs-light.png').default, dark: require('./selector--bread-crumbs-dark.png').default }} />

### New Name

Use a name field in the footer for a "save as" or copy flow, where the reader picks the destination folder and names the file in one step. The checkbox under the field is a second choice handed to `onSubmit` with the name (`withFooterCheckbox`); clear the field and the Add button goes dead.

<ThemedImage alt="New Name" width={496} sources={{ light: require('./selector--new-name-light.png').default, dark: require('./selector--new-name-dark.png').default }} />

### With Header

Give the panel a header when it stands on its own, in a dialog or a side panel. The title comes with a closing cross and, here, a back arrow for a step-by-step flow (`headerProps.withoutBackButton: false`); the footer gets a second button that calls `onCancel`, as Escape does.

<ThemedImage alt="With Header" width={496} sources={{ light: require('./selector--with-header-light.png').default, dark: require('./selector--with-header-dark.png').default }} />

### With Search

Add a search box when the reader knows the name they are looking for. Type part of a label to narrow the list; type something no label contains, such as `zzz`, to see the search empty screen (`searchEmptyScreenHeader`), and clear the box with its cross to get the whole list back. The filtering is the story's own: Selector hands over the query in `onSearch` and shows what `items` you give back.

<ThemedImage alt="With Search" width={496} sources={{ light: require('./selector--with-search-light.png').default, dark: require('./selector--with-search-dark.png').default }} />

### Multi Select

Use multi-select when the reader adds several items in one go, such as people to a share. Every row gets a checkbox, the footer appears with the first tick and its Add button shows how many are ticked, and the "All items" row above the list ticks or unticks every loaded row (`withSelectAll`). Two rows start out ticked (`selectedItems`).

<ThemedImage alt="Multi Select" width={496} sources={{ light: require('./selector--multi-select-light.png').default, dark: require('./selector--multi-select-dark.png').default }} />

### Selection Limit

Cap the selection when the target can take only so many items. Two rows are ticked and the limit is two, so every other row is greyed out and ignores clicks (`maxSelectedItems`); untick one and the rest come back. Selector shows no message of its own, so say what the limit is somewhere near the panel.

<ThemedImage alt="Selection Limit" width={496} sources={{ light: require('./selector--selection-limit-light.png').default, dark: require('./selector--selection-limit-dark.png').default }} />

### Disabled Items

Keep an item in the list but out of reach when the reader should see it and know why it cannot be picked. The greyed rows ignore clicks and show a reason in place of their checkbox (`isDisabled`, `disabledText` on the item).

<ThemedImage alt="Disabled Items" width={496} sources={{ light: require('./selector--disabled-items-light.png').default, dark: require('./selector--disabled-items-dark.png').default }} />

### With Access Rights

Add an access drop-down to the footer when the items being added need a permission as well. Open it beside the Add button to pick one; the choice is handed to `onSubmit` with the ticked items. Switch `accessRightsMode` to `detailed` in the Controls panel below to open the menu as wide as the footer instead.

<ThemedImage alt="With Access Rights" width={496} sources={{ light: require('./selector--with-access-rights-light.png').default, dark: require('./selector--with-access-rights-dark.png').default }} />

### Empty Folder

What the reader sees in a folder with nothing in it: the picture, heading and paragraph you pass (`emptyScreenImage`, `emptyScreenHeader`, `emptyScreenDescription`). The "New folder" link is the list's `isCreateNewItem` row turned into a link, and "Back" goes to the previous folder of the trail; `hideBackButton` removes it.

<ThemedImage alt="Empty Folder" width={496} sources={{ light: require('./selector--empty-folder-light.png').default, dark: require('./selector--empty-folder-dark.png').default }} />

### Loading State

Show skeletons while the first page is on its way, so the panel keeps its shape instead of flashing an empty screen. The trail, the search box and the list each have a skeleton of their own, and each is switched on separately (`isBreadCrumbsLoading`, `isSearchLoading`, `isLoading`); the folder exports all three loaders.

<ThemedImage alt="Loading State" width={496} sources={{ light: require('./selector--loading-state-light.png').default, dark: require('./selector--loading-state-dark.png').default }} />

### With Tabs

Split the list into tabs when the items come from separate sources. Tick a row, switch to the other tab and tick another: the Add button counts both, because Selector keeps a selection per tab (`withTabs`, `tabsData`, `activeTabId`). Switching tabs is yours to do from each tab's `onClick`.

<ThemedImage alt="With Tabs" width={496} sources={{ light: require('./selector--with-tabs-light.png').default, dark: require('./selector--with-tabs-dark.png').default }} />

### With Info

Two ways to say something about the list before the reader picks from it:

- **Only items you can edit are listed here.** — a tinted note with an info icon, for a condition that explains what the list holds (`withInfo`, `infoText`, `withInfoBadge`)
- **Recent items** — a bold line right above the rows, for a short heading (`descriptionText`)

<ThemedImage alt="With Info" width={496} sources={{ light: require('./selector--with-info-light.png').default, dark: require('./selector--with-info-dark.png').default }} />

### With Info Bar

Put a dismissable bar above the list for a notice the reader can read once and close. The cross appears because the bar has an `onClose`; hiding the bar when it is clicked is up to you (`withInfoBar`, `infoBarData`).

<ThemedImage alt="With Info Bar" width={496} sources={{ light: require('./selector--with-info-bar-light.png').default, dark: require('./selector--with-info-bar-dark.png').default }} />

### In Side Panel

Open Selector as a side panel over the page when picking is a step on its own. The panel slides in from the edge of the window over a dimmed backdrop, and a click on the backdrop calls `onClose` (`useAside`); without it, Selector is a plain box that fills its parent.

<ThemedImage alt="In Side Panel" width={1024} sources={{ light: require('./selector--in-side-panel-light.png').default, dark: require('./selector--in-side-panel-dark.png').default }} />

### Right To Left

The panel in a right-to-left layout: the folder trail starts at the right edge with its arrows pointing left, and the row labels and the footer button line up from the right.

<ThemedImage alt="Right To Left" width={496} sources={{ light: require('./selector--right-to-left-light.png').default, dark: require('./selector--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page. Hover a row to see the hover background and hover the tick beside the name field to see its hover colour. The two empty-screen variables are set too but show only when the list is empty.

<ThemedImage alt="Css Customization" width={496} sources={{ light: require('./selector--css-customization-light.png').default, dark: require('./selector--css-customization-dark.png').default }} />

## Minimal example

The six empty-screen fields and the pagination four are required even for a list that never
paginates, so the smallest working Selector is still a dozen props.

```tsx
import { useCallback, useState } from "react";
import {
  RowLoader,
  Selector,
  type TSelectorItem,
} from "@onlyoffice/apps-ui-kit/components/selector";

export function PickOnePerson({ people }: { people: TSelectorItem[] }) {
  const [chosen, setChosen] = useState<TSelectorItem | null>(null);

  const loadNextPage = useCallback(async () => {}, []);

  return (
    <div style={{ width: 480, height: 485 }}>
      <Selector
        items={people}
        totalItems={people.length}
        hasNextPage={false}
        isNextPageLoading={false}
        isLoading={false}
        disableFirstFetch
        loadNextPage={loadNextPage}
        rowLoader={<RowLoader isContainer />}
        isMultiSelect={false}
        selectedItem={chosen}
        onSelect={(item) => setChosen(item)}
        submitButtonLabel="Add"
        disableSubmitButton={false}
        onSubmit={(selected) => {
          console.log(selected);
        }}
        emptyScreenImage=""
        emptyScreenHeader="Nobody here yet"
        emptyScreenDescription="Invite somebody and they will show up in this list."
        searchEmptyScreenImage=""
        searchEmptyScreenHeader="Nothing matches"
        searchEmptyScreenDescription="Try a shorter query."
      />
    </div>
  );
}
```

## Props

Every `with…` flag below takes `true` or nothing at all — `withSearch={false}` does not
type-check. Setting one makes the props listed beside it required, which is how the type says
"a search box needs somewhere to send the query".


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `disableSubmitButton` | `boolean` | Whether the primary button is dead. With `withFooterInput` an empty input disables it too, whatever this says. |
| `emptyScreenDescription` | `string` | Paragraph under that heading. |
| `emptyScreenHeader` | `string` | Heading for the empty folder. |
| `emptyScreenImage` | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>> \| string` | Picture for the empty folder. A string is used as an `<img>` source, an element is rendered as it is. |
| `hasNextPage` | `boolean` | Whether another page can be fetched. |
| `isLoading` | `boolean` | Initial load: the body is replaced with a skeleton loader |
| `isMultiSelect` | `boolean` | Whether rows carry checkboxes and more than one can be ticked. |
| `isNextPageLoading` | `boolean` | Whether a page request is in flight, which suppresses another one. |
| `items` | `TSelectorItem[]` | The page of items loaded so far, in the order they are shown. |
| `loadNextPage` | `(startIndex: number) => Promise<void>` | Called with the index to start from when the list nears its end, and once with 0 on mount unless `disableFirstFetch` is set. Append to `items`. |
| `onSubmit` | `TOnSubmit` | Called with everything the footer holds. Return a promise and the button shows its spinner until it settles. Enter fires it as well. |
| `rowLoader` | `React.ReactNode` | Skeleton for a row that has not arrived yet, and for the whole body during the initial load. `RowLoader` from this folder fits. |
| `searchEmptyScreenDescription` | `string` | Paragraph under that heading. |
| `searchEmptyScreenHeader` | `string` | Heading for a search that found nothing. |
| `searchEmptyScreenImage` | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>> \| string` | The same picture, for a search that found nothing. |
| `submitButtonLabel` | `string` | Text of the primary button. In multi-select the count is appended in brackets, so pass "Add", not "Add (3)". |
| `totalItems` | `number` | How many items exist in total, which is what the scrollbar is sized from. |
| `accessRights`? | `TAccessRight[]` | The choices in that drop-down. |
| `accessRightsMode`? | `SelectorAccessRightsMode` | Whether each entry shows its `description`. |
| `activeTabId`? | `string` | Id of the open tab. Selector keeps one selection per tab id and adds them all up, so switching tabs does not drop what was ticked on the other. |
| `alwaysShowFooter`? | `boolean` | Whether the footer stays put instead of appearing with the first tick. |
| `bodyIsLoading`? | `boolean` | Ignored. Selector overwrites it with its own `isLoading` before the trail ever sees it; the type demands the field all the same. |
| `breadCrumbs`? | `TBreadCrumb[]` | The trail, outermost first. The last entry is the current folder. |
| `breadCrumbsLoader`? | `React.ReactNode` | Shown in place of the trail while it loads; `BreadCrumbsLoader` fits. |
| `cancelButtonId`? | `string` | `id` attribute of that button. |
| `cancelButtonLabel`? | `string` | Text of that button. |
| `className`? | `string` | Applied to the outermost element. |
| `currentFooterInputValue`? | `string` | Initial text of the field. Selector owns the value from then on and hands the edited one to `onSubmit`; changing this prop later does nothing. |
| `dataTestId`? | `string` | `data-testid` of the outermost element. Default: `"selector"`. |
| `descriptionText`? | `string` | A line of bold text above the list. It costs the list 32px of height. |
| `disableFirstFetch`? | `boolean` | Whether to skip the `loadNextPage(0)` call Selector makes on mount. |
| `displayFileExtension`? | `boolean` | Whether a file's extension is drawn after its name, in a dimmer colour. |
| `folderFormValidation`? | `RegExp` | Matched against the footer input on every keystroke. A match marks the field as in error and shows the kit's "contains special characters" line — so it describes what is _forbidden_, not what is allowed. |
| `footerCheckboxLabel`? | `string` | Label beside that checkbox. |
| `footerInputHeader`? | `string` | Label above that field. |
| `forceIsMultiSelect`? | `boolean` | Whether an item's own `disableMultiSelect` is overruled. |
| `headerProps`? | `HeaderProps` | The header's own props. Required once `withHeader` is set. |
| `hideBackButton`? | `boolean` | Whether the empty screen's "back" link is hidden. |
| `id`? | `string` | Applied to the outermost element. |
| `infoBarData`? | `TInfoBarData` | What that bar says. Nothing is drawn without it. |
| `infoText`? | `string` | Text of that note. |
| `injectedElement`? | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>>` | Rendered between the breadcrumbs and the search box. Selector clones it to attach a ref and subtracts its measured height from the list. |
| `isBreadCrumbsLoading`? | `boolean` | Whether to replace the trail with `breadCrumbsLoader`. Default: `false`. |
| `isChecked`? | `boolean` | Initial state of the checkbox. Selector owns it from then on and hands the current value to `onSubmit`; changing this prop later does nothing. |
| `isContentLoading`? | `boolean` | Content refresh: the current body stays on screen dimmed; wins over isLoading |
| `isSearchLoading`? | `boolean` | Whether to replace the box with `searchLoader`. |
| `isSSR`? | `boolean` | Whether to render every item as plain markup instead of virtualising. The list needs a measured height, which server rendering cannot give it. |
| `maxSelectedItems`? | `number` | Largest number of items that may be ticked at once. Beyond it the unticked rows go grey and stop responding, with no message of their own. |
| `onAccessRightsChange`? | `(access: TAccessRight) => void` | Called when the choice changes. |
| `onCancel`? | `() => void` | Called by that button — and by Escape, which Selector listens for on the window whether or not the button is there. |
| `onClearSearch`? | `(callback?: VoidFunction) => void` | Called by the box's cross and by the empty screen's "clear filter" link. Call the callback to take the selector out of its searching state. |
| `onClose`? | `VoidFunction` | Called by the backdrop and by the aside. Required once `useAside` is set. |
| `onSearch`? | `(value: string, callback?: VoidFunction) => void` | Called with the trimmed query once typing stops. Call the callback to put the selector into its searching state, which is what swaps the empty screen for the search one. An empty query calls `onClearSearch` instead. |
| `onSelect`? | `(item: TSelectorItem, isDoubleClick: boolean, doubleClickCallback: () => Promise<void>) => void` | Called when a row is clicked, before Selector updates its own selection. The third argument submits with that one item, which is how a double click confirms a choice. |
| `onSelectAll`? | `() => void` | Called when the row is clicked. Selector ticks and unticks the loaded items itself; this is a notification, not the implementation. |
| `onSelectBreadCrumb`? | `(item: TBreadCrumb) => void` | Called with the crumb that was clicked. Navigating is your job: fetch that folder and hand back new `items` and `breadCrumbs`. |
| `renderCustomItem`? | `TRenderCustomItem` | Replaces the text of a row, keeping its avatar, checkbox and layout. |
| `searchLoader`? | `React.ReactNode` | Shown in place of the box while `isSearchLoading` is set. |
| `searchPlaceholder`? | `string` | Placeholder of the box. |
| `searchValue`? | `string` | Text in the box. Searching is yours to do; this is what is displayed. |
| `selectAllIcon`? | `string` | URL of the icon beside it. |
| `selectAllLabel`? | `string` | Text of that row. |
| `selectedAccessRight`? | `null \| TAccessRight` | The chosen access. Selector copies it into its own state on mount and whenever this changes, and hands that copy to `onSubmit`. |
| `selectedItem`? | `null \| TSelectorItem` | The one ticked item outside multi-select, matched by `id`. |
| `selectedItems`? | `TSelectorItem[]` | Items to start out ticked, matched by `id`. Selector copies them into its own state; it is a starting point, not a controlled value. |
| `style`? | `React.CSSProperties` | Applied to the outermost element. |
| `submitButtonId`? | `string` | `id` attribute of the primary button. |
| `tabsData`? | `TTabItem[]` | The tabs, in order. |
| `useAside`? | `boolean` | Whether Selector wraps itself in a backdrop and an `Aside`. It is the only way the component becomes a panel; on its own it is a plain box that fills its parent. |
| `withAccessRights`? | `true` | Whether the footer carries an access drop-down. It only accepts `true`. |
| `withBlur`? | `boolean` | Ignored. Nothing reads this prop. |
| `withBreadCrumbs`? | `true` | Whether the folder trail is shown above the list. It only accepts `true`. |
| `withCancelButton`? | `true` | Whether a second, non-primary button sits in the footer. It only accepts `true`. |
| `withFooterCheckbox`? | `true` | Whether the footer carries a checkbox. It only accepts `true`, and it makes the footer 110px, or 181px alongside `withFooterInput`. |
| `withFooterInput`? | `true` | Whether the footer carries a text field — the "save as" name. It only accepts `true`, and it makes the footer 145px instead of 73px. |
| `withHeader`? | `true` | Whether the panel has a header bar. It only accepts `true` — leave it out for a selector with no header of its own. |
| `withInfo`? | `true` | Whether a tinted note sits between the search box and the list. It only accepts `true`, and the note is hidden during the initial load. |
| `withInfoBadge`? | `boolean` | Whether an icon is drawn beside the text. |
| `withInfoBar`? | `boolean` | Whether a dismissable bar is shown above the list. |
| `withoutBackground`? | `boolean` | Whether the backdrop behind the aside is transparent. |
| `withPadding`? | `boolean` | Whether the body keeps its 16px of padding at the top. Default: `true`. |
| `withSearch`? | `true` | Whether the list can be searched. It only accepts `true`. The box hides itself while the list is empty and no search is running, so an empty folder shows the empty screen rather than a search over nothing. |
| `withSelectAll`? | `true` | Whether the "select all" row sits above the list. It only accepts `true`, and the row appears only with `isMultiSelect` and only while no search is running. |
| `withTabs`? | `true` | Whether a tab strip is shown above the list. It only accepts `true`. |

</APITable>

### `headerProps`

Required once `withHeader` is set.


<APITable name="headerProps">

| Property | Type | Description |
| --- | --- | --- |
| `headerLabel` | `string` | Title of the panel. |
| `onCloseClick` | `() => void` | Called by the closing cross. |
| `isCloseable`? | `boolean` | Whether the closing cross is drawn. Default: `true`. |
| `onBackClick`? | `() => void` | Called by the back arrow. |
| `withoutBackButton`? | `false` | Whether to hide the back arrow. The arrow is drawn only when this is literally `false`; leaving the prop out hides it, as does `true`. |
| `withoutBorder`? | `boolean` | Whether the line under the header is removed. |

</APITable>

### `TSelectorItem`

One entry of `items`. Only `label` is required; which of the rest matter depends on what the
row stands for — a person carries `email` and `status`, a room carries `roomType` and `shared`,
and the two marker fields `isCreateNewItem` and `isInputItem` turn the row into the create link
and the inline name field.


<APITable name="TSelectorItem">

| Property | Type | Description |
| --- | --- | --- |
| `label` | `string` | Text of the row. The only field every kind of item must carry. |
| `access`? | `number \| string` | The user's current access, where the row shows one. |
| `avatar`? | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>> \| string` | URL of the avatar picture. An empty string draws the default one. Picture drawn instead of the folder icon. |
| `color`? | `string` | Colour of the generated logo, when there is no picture. Colour of the generated logo beside the field. |
| `cover`? | `ICover` | The room's cover art, which replaces the generated logo. Cover art drawn beside the field. |
| `createDefineRoomType`? | `RoomType` | Which room the create link makes, for that empty screen. |
| `defaultInputValue`? | `string` | Text the field starts with. |
| `disabledText`? | `string` | Text shown at the end of a disabled row, saying why. |
| `disableMultiSelect`? | `boolean` | Whether this row stays single-select while the rest are not. |
| `displayName`? | `string` | Full name, where it differs from `label`. |
| `dropDownItems`? | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>>[]` | Entries of a menu opened instead of calling `onCreateClick`. |
| `email`? | `string` | Shown under the name, and handed to `renderCustomItem`. |
| `fileExst`? | `string` | Extension including the dot; shown after the name with `displayFileExtension`. |
| `filesCount`? | `number` | How many files it holds. |
| `fileType`? | `FileType` | Which kind of document it is, which picks the icon. |
| `foldersCount`? | `number` | How many sub-folders it holds. |
| `forceIsMultiSelect`? | `boolean` | Overrules this row's own `disableMultiSelect`. |
| `groups`? | `TUserGroup[]` | Groups the user belongs to. |
| `hasAvatar`? | `boolean` | Whether the user has a picture at all, which picks the fallback. |
| `hotkey`? | `string` | Shortcut printed on the right of the row. |
| `icon`? | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>> \| string \| TSvgComponent` | The icon: a URL, or an SVG component the row renders itself. URL of the room's own logo. Icon beside the field: a URL, or an element rendered as it is. A URL for remotely hosted icons, or a rendered element for the ones bundled as SVG components (see utils/ai/getServerIcon). |
| `iconOriginal`? | `string` | URL of the logo before cropping. |
| `id`? | `number \| string` | Identifies the item. Selection is matched on it throughout, so two rows sharing an id tick and untick together. |
| `isAdmin`? | `boolean` | Whether the user is a full admin. |
| `isCollaborator`? | `boolean` | Whether the user is a power user. |
| `isCreateNewItem`? | `boolean` | Marks the row as the "create new" entry. It must be first in `items`, and it is what the empty screen turns into its create link. |
| `isDisabled`? | `boolean` | Whether the row is greyed out and ignores clicks. |
| `isFolder`? | `boolean` | Marks the row as a folder, which lets a click open it. Marks the row as openable, as a folder is. |
| `isGroup`? | `boolean` | Marks the row as a group, which draws the group avatar. |
| `isInputItem`? | `boolean` | Marks the row as the inline name field. It must be second in `items`, right after the "create new" row, and it takes over the whole body while it is there. |
| `isMCP`? | `boolean` | Marks the row as an MCP server, which draws the server tile. |
| `isOwner`? | `boolean` | Whether the user owns the portal. |
| `isRoomAdmin`? | `boolean` | Whether the user administers a room. |
| `isRoomsOnly`? | `boolean` | Whether only rooms may be created here, which picks the form-room empty screen. |
| `isSectionSeparator`? | `boolean` | Makes that divider a section break, 25px tall. |
| `isSelected`? | `boolean` | Whether the row starts out ticked. Selector recomputes it from `selectedItems` and its own state, so setting it here is a starting point. |
| `isSeparator`? | `boolean` | Renders the row as a thin divider, 16px tall, that cannot be clicked. |
| `isSystem`? | `boolean` | Whether this is a built-in group such as Everyone. System rows are sorted to the top and a divider is inserted under the first of them. |
| `isTemplate`? | `boolean` | Whether the room is a template, which changes its logo. |
| `isVisitor`? | `boolean` | Whether the user is a guest. |
| `key`? | `string` | React key of the row. |
| `lifetimeTooltip`? | `null \| string` | Tooltip about the file's lifetime. |
| `name`? | `string` | Name of the group. |
| `onAcceptInput`? | `(value: string) => void` | Called with the typed name when the tick is clicked or Enter pressed. |
| `onBackClick`? | `VoidFunction` | Called by the empty screen's "back" link. |
| `onCancelInput`? | `VoidFunction` | Called when the cross is clicked or Escape pressed. |
| `onCreateClick`? | `VoidFunction` | Called when the row is clicked, unless `dropDownItems` is set. |
| `parentId`? | `number \| string` | Folder the file sits in. Folder this one sits in. Folder the room sits in. |
| `placeholder`? | `string` | Placeholder of the field. |
| `private`? | `boolean` | Whether the room is private, which adds the shield badge. |
| `role`? | `AvatarRole` | Badge drawn on the avatar. |
| `roomType`? | `RoomType` | Which room it is, which picks the default logo. Which room logo to draw beside the field. |
| `rootFolderType`? | `number \| string` | Root section it belongs to. |
| `security`? | `FileEntryDtoIntegerAllOfSecurity` | What the current user may do with it. |
| `shared`? | `boolean` | Whether the room is shared, which adds the badge on its logo. |
| `specialFolderScope`? | `SpecialFolderScope` | Marks the row as a virtual folder such as Recent or Favorites. |
| `status`? | `EmployeeStatus` | Whether the account is active, pending or disabled. |
| `templateAccess`? | `FileShare` | The current user's access to that template. |
| `templateIsOwner`? | `boolean` | Whether the current user owns that template. |
| `userType`? | `EmployeeType` | Which type label is drawn — translated through the app's i18n instance. |
| `viewUrl`? | `string` | Link the row's title opens. |

</APITable>

### `TBreadCrumb`


<APITable name="TBreadCrumb">

| Property | Type | Description |
| --- | --- | --- |
| `id` | `number \| string` | Identifies the crumb; it is what `onSelectBreadCrumb` is handed back. |
| `label` | `string` | Text of the crumb. |
| `isAgent`? | `boolean` | Whether the crumb stands for an agent, which draws the agent's icon. |
| `isRoom`? | `boolean` | Whether the crumb stands for a room, which draws the room's logo. |
| `minWidth`? | `string` | Smallest width this crumb may shrink to, as a CSS length. |
| `onClick`? | `TOnBreadCrumbClick` | Called instead of the default navigation when this crumb is clicked. |
| `roomType`? | `RoomType` | Which room icon to draw, when `isRoom` is set. |
| `rootFolderType`? | `FolderType` | Root section the crumb belongs to, which picks its icon. |
| `shared`? | `boolean` | Whether the room is shared, which adds the badge on its logo. |

</APITable>

### `TAccessRight`


<APITable name="TAccessRight">

| Property | Type | Description |
| --- | --- | --- |
| `access` | `number \| string` | The value handed back to you; the component never reads it. |
| `key` | `string` | Identifies the entry within the drop-down. |
| `label` | `string` | Text of the entry. |
| `description`? | `string` | Second line under the label, in the detailed mode. |
| `isSeparator`? | `boolean` | Whether this entry is a divider rather than a choice. |

</APITable>

### `TInfoBarData`


<APITable name="TInfoBarData">

| Property | Type | Description |
| --- | --- | --- |
| `description` | `React.ReactNode` | Everything under the title. |
| `title` | `string` | Bold first line of the bar. |
| `className`? | `string` | Applied to the bar. |
| `icon`? | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>> \| string` | Icon on the left: a URL for `<img>`, or an element rendered as it is. |
| `onClose`? | `VoidFunction` | Called by the bar's own cross. Without it no cross is drawn. |

</APITable>

### Enums

<APITable name="Enums">

| Enum                       | Members                                                              |
| -------------------------- | -------------------------------------------------------------------- |
| `SelectorAccessRightsMode` | `Compact`, `Detailed`                                                |
| `AvatarRole`               | `owner`, `admin`, `guest`, `user`, `manager`, `collaborator`, `none` |

</APITable>

## Recipes

### Loading

`isLoading` replaces the body with `rowLoader` on the first fetch. `isContentLoading` is the
other one: it leaves the rows where they are and dims them, which is what a search or a folder
change wants — and it wins when both are set.

```tsx
import { useCallback, useState } from "react";
import {
  RowLoader,
  SearchLoader,
  Selector,
  type TSelectorItem,
} from "@onlyoffice/apps-ui-kit/components/selector";

export function SearchablePeople({
  fetchPage,
}: {
  fetchPage: (query: string) => Promise<TSelectorItem[]>;
}) {
  const [items, setItems] = useState<TSelectorItem[]>([]);
  const [query, setQuery] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const run = useCallback(
    async (next: string, first: boolean) => {
      if (first) setIsFirstLoad(true);
      else setIsRefreshing(true);

      setItems(await fetchPage(next));
      setIsFirstLoad(false);
      setIsRefreshing(false);
    },
    [fetchPage],
  );

  const loadNextPage = useCallback(async () => {
    await run(query, true);
  }, [query, run]);

  return (
    <div style={{ width: 480, height: 485 }}>
      <Selector
        items={items}
        totalItems={items.length}
        hasNextPage={false}
        isNextPageLoading={false}
        isLoading={isFirstLoad}
        isContentLoading={isRefreshing}
        loadNextPage={loadNextPage}
        rowLoader={<RowLoader isContainer />}
        withSearch
        searchLoader={<SearchLoader />}
        isSearchLoading={false}
        searchValue={query}
        searchPlaceholder="Search"
        onSearch={(value, entered) => {
          setQuery(value);
          entered?.();
          void run(value, false);
        }}
        onClearSearch={(left) => {
          setQuery("");
          left?.();
          void run("", false);
        }}
        isMultiSelect={false}
        submitButtonLabel="Add"
        disableSubmitButton={false}
        onSubmit={(selected) => {
          console.log(selected);
        }}
        emptyScreenImage=""
        emptyScreenHeader="Nobody here yet"
        emptyScreenDescription="Invite somebody and they will show up in this list."
        searchEmptyScreenImage=""
        searchEmptyScreenHeader="Nothing matches"
        searchEmptyScreenDescription="Try a shorter query."
      />
    </div>
  );
}
```

### Many at once, with a header and a cancel button

`isMultiSelect` puts a checkbox on every row and appends the count to the submit label, so pass
"Add", not "Add (3)". The footer appears with the first tick unless `alwaysShowFooter` is set.

```tsx
import { useCallback, useState } from "react";
import {
  RowLoader,
  Selector,
  type TSelectorItem,
} from "@onlyoffice/apps-ui-kit/components/selector";

export function PickSeveral({
  people,
  onDone,
}: {
  people: TSelectorItem[];
  onDone: (chosen: TSelectorItem[]) => void;
}) {
  const [isSaving, setIsSaving] = useState(false);
  const loadNextPage = useCallback(async () => {}, []);

  return (
    <div style={{ width: 480, height: 485 }}>
      <Selector
        withHeader
        headerProps={{
          headerLabel: "Add people",
          onCloseClick: () => onDone([]),
          onBackClick: () => {},
          withoutBackButton: false,
          withoutBorder: false,
        }}
        items={people}
        totalItems={people.length}
        hasNextPage={false}
        isNextPageLoading={false}
        isLoading={false}
        disableFirstFetch
        loadNextPage={loadNextPage}
        rowLoader={<RowLoader isContainer isMultiSelect />}
        isMultiSelect
        withSelectAll
        selectAllLabel="All accounts"
        selectAllIcon=""
        onSelectAll={() => {}}
        withCancelButton
        cancelButtonLabel="Cancel"
        onCancel={() => onDone([])}
        submitButtonLabel="Add"
        disableSubmitButton={isSaving}
        onSubmit={async (chosen) => {
          setIsSaving(true);
          onDone(chosen);
          setIsSaving(false);
        }}
        emptyScreenImage=""
        emptyScreenHeader="Nobody here yet"
        emptyScreenDescription="Invite somebody and they will show up in this list."
        searchEmptyScreenImage=""
        searchEmptyScreenHeader="Nothing matches"
        searchEmptyScreenDescription="Try a shorter query."
      />
    </div>
  );
}
```

### As a side panel

`useAside` is the only thing that makes Selector a panel: it wraps itself in a
[`Backdrop`](./backdrop.md) and an [`Aside`](./aside.md) at z-index 310. There
is still no visibility prop — mount it when it should be open.

```tsx
import { useCallback, useState } from "react";
import {
  RowLoader,
  Selector,
  type TSelectorItem,
} from "@onlyoffice/apps-ui-kit/components/selector";

export function PeoplePanel({ people }: { people: TSelectorItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const loadNextPage = useCallback(async () => {}, []);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Members
      </button>

      {isOpen ? (
        <Selector
          useAside
          onClose={() => setIsOpen(false)}
          withHeader
          headerProps={{
            headerLabel: "Members",
            onCloseClick: () => setIsOpen(false),
          }}
          items={people}
          totalItems={people.length}
          hasNextPage={false}
          isNextPageLoading={false}
          isLoading={false}
          disableFirstFetch
          loadNextPage={loadNextPage}
          rowLoader={<RowLoader isContainer />}
          isMultiSelect={false}
          submitButtonLabel="Add"
          disableSubmitButton={false}
          onSubmit={() => setIsOpen(false)}
          emptyScreenImage=""
          emptyScreenHeader="Nobody here yet"
          emptyScreenDescription="Invite somebody and they will show up in this list."
          searchEmptyScreenImage=""
          searchEmptyScreenHeader="Nothing matches"
          searchEmptyScreenDescription="Try a shorter query."
        />
      ) : null}
    </>
  );
}
```

### "Save as": a folder trail and a file name

`withBreadCrumbs` draws the trail above the list and `withFooterInput` puts a name field in the
footer. A crumb click only reports the crumb — loading that folder is yours — and the edited
name comes back as `onSubmit`'s third argument.

```tsx
import { useCallback, useState } from "react";
import {
  BreadCrumbsLoader,
  RowLoader,
  Selector,
  type TBreadCrumb,
  type TSelectorItem,
} from "@onlyoffice/apps-ui-kit/components/selector";

export function SaveAs({
  folders,
  trail,
  openFolder,
  save,
}: {
  folders: TSelectorItem[];
  trail: TBreadCrumb[];
  openFolder: (crumb: TBreadCrumb) => void;
  save: (folder: TSelectorItem | undefined, name: string) => void;
}) {
  const [folder, setFolder] = useState<TSelectorItem | null>(null);
  const loadNextPage = useCallback(async () => {}, []);

  return (
    <div style={{ width: 480, height: 485 }}>
      <Selector
        withBreadCrumbs
        breadCrumbs={trail}
        onSelectBreadCrumb={openFolder}
        isBreadCrumbsLoading={false}
        breadCrumbsLoader={<BreadCrumbsLoader />}
        bodyIsLoading={false}
        withFooterInput
        footerInputHeader="File name"
        currentFooterInputValue="Report.docx"
        items={folders}
        totalItems={folders.length}
        hasNextPage={false}
        isNextPageLoading={false}
        isLoading={false}
        disableFirstFetch
        loadNextPage={loadNextPage}
        rowLoader={<RowLoader isContainer />}
        isMultiSelect={false}
        selectedItem={folder}
        onSelect={(item) => setFolder(item)}
        submitButtonLabel="Save"
        disableSubmitButton={false}
        onSubmit={(selected, _access, fileName) => save(selected[0], fileName)}
        emptyScreenImage=""
        emptyScreenHeader="This folder is empty"
        emptyScreenDescription="Save here, or pick another folder."
        searchEmptyScreenImage=""
        searchEmptyScreenHeader="Nothing matches"
        searchEmptyScreenDescription="Try a shorter query."
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **It needs a parent with a real height.** The body measures itself and hands the pixel count
  to the virtual list; in a box of automatic height the list is zero tall and you see the
  chrome with nothing under it. `isSSR` is the escape hatch — it renders every row as plain
  markup until a height is measured.
- **The list height is arithmetic, not layout.** Each part is subtracted from the measured
  body: search 44px, tabs 33px, breadcrumbs 38px, "select all" 61px, `descriptionText` 32px,
  padding 16px, header 54px (70px without tabs), footer 73px — 110px with the checkbox, 145px
  with the input, 181px with both, plus 20px while the input is in error. A part you style to
  a different height will not move the list.
- **Selection is seeded, not controlled.** `selectedItems`, `selectedItem`, `isChecked` and
  `currentFooterInputValue` are copied into Selector's own state; changing them afterwards does
  not move the ticks, and the current values come back to you through `onSubmit`, never through
  a change handler.
- **It fetches on mount.** `loadNextPage(0)` runs in an effect on the first render unless
  `disableFirstFetch` is set — including when you have already put a page in `items`.
- **Escape and Enter are bound to the window**, not to the panel: Escape calls `onCancel` and
  Enter submits wherever focus happens to be on the page, and both stand down only while the
  inline name row is open. Two Selectors on one page both answer the same key.
- **The search callback is what shows the search empty screen.** `onSearch` hands you the
  trimmed query and a callback; until you call it Selector does not consider itself searching,
  so a query that matches nothing shows the _folder_ empty screen. A query that trims to
  nothing routes to `onClearSearch` instead.
- **The back arrow is drawn only for `withoutBackButton: false`.** Leaving the prop out hides
  it, exactly as `true` does.
- **Rows are 48px, always.** A separator row is 16px, or 25px with `isSectionSeparator`.
  Nothing measures a row's content.
- **Two rows have fixed positions.** The `isCreateNewItem` row must be first in `items`, and
  the `isInputItem` row second; the inline name field takes over the whole body while it is
  there, and the empty screen turns the create row into its link.
- **`maxSelectedItems` fails silently.** Past the limit the unticked rows go grey and stop
  responding, with no message and no callback.
- **A row with `isSystem` is sorted to the top** and a divider is spliced in beneath it.
- **`bodyIsLoading` and `withBlur` are dead.** The first is overwritten with Selector's own
  `isLoading` before the breadcrumbs see it — the type still demands it once `withBreadCrumbs`
  is set. The second is destructured and never read.
- The strings Selector prints itself — the user-type labels, "Back", "Clear filter" and the
  footer's "contains special characters" — come from the app's i18n instance, not from props.

## CSS variables

<APITable name="CSS-variables">

| Variable                                       | Default        | Effect                                                                                                                                       |
| ---------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `--selector-border`                            | 1px solid grey | Footer's top line and the "select all" rule, as a `border` shorthand                                                                         |
| `--selector-body-description-text`             | theme grey     | Colour of `descriptionText`                                                                                                                  |
| `--selector-breadcrumbs-prev-item-color`       | theme grey     | Crumbs behind the current one, and the dots of a collapsed trail                                                                             |
| `--selector-breadcrumbs-arrow-right-color`     | theme grey     | Arrows between crumbs                                                                                                                        |
| `--selector-info-background-color`             | theme grey     | Background of the `withInfo` note                                                                                                            |
| `--selector-info-color`                        | theme grey     | Text of that note                                                                                                                            |
| `--selector-item-hover-background`             | theme grey     | Row under the pointer                                                                                                                        |
| `--selector-item-selected-background`          | theme grey     | The ticked row, outside multi-select                                                                                                         |
| `--selector-item-disabled-text-color`          | theme grey     | Label of a disabled row                                                                                                                      |
| `--selector-item-input-button-border`          | 1px solid grey | Tick and cross of the inline name row, and the create-row drop-down, as a `border` shorthand                                                 |
| `--selector-item-input-button-border-hover`    | theme grey     | Border and icon colour of that tick and cross on hover                                                                                       |
| `--selector-empty-screen-description-color`    | theme grey     | Paragraph on the empty screen                                                                                                                |
| `--selector-empty-screen-pressed-button-color` | theme grey     | Paragraph on the other empty screen, drawn without `withSearch` when the create row sets `isRoomsOnly` with a form-filling or data room type |

</APITable>

The two empty-screen variables show only while the list is empty. The theme also defines
`--selector-empty-screen-button-color` and `--selector-empty-screen-hover-button-color`, but
the stylesheet reads neither, so setting them changes nothing.

## Accessibility

- **The list is not reachable from the keyboard.** Rows are `<div>`s with an `onClick`, carry
  no role and are never focusable; only the rows near the viewport exist in the DOM at all, so
  assistive technology is given no list, no count and no position. In multi-select the row's
  checkbox is focusable with Tab and toggled with Space, and that is the only way through the
  list; outside multi-select a row can be picked only with the pointer.
- **Focus moves into the selector when it mounts**: to the list's scroll container, unless the
  search box already has it, and to the new-name field when that field appears, with its text
  selected. Neither scrolls the page (`preventScroll`), so a selector further down a page takes
  focus without pulling the page to itself.
- The search box is given `tabIndex={1}`, a positive tab index, which pulls it ahead of
  everything else on the page in tab order.
- Escape and Enter are listened for on the window, so they act even when focus is outside the
  panel — and Enter submits without the button being focused.
- The empty screen's create and back controls are `<div>`s with click handlers, not buttons.
- The footer's submit and cancel buttons are native buttons, reached with Tab and pressed with
  Enter or Space.
- Give the panel a name yourself: `headerProps.headerLabel` renders as text, not as a label for
  the region.

## Test ids

<APITable name="Test-ids">

| Element               | `data-testid`                                          |
| --------------------- | ------------------------------------------------------ |
| The outermost element | `selector`, or `dataTestId`                            |
| A row                 | `selector-item-<index>`                                |
| The search box        | `selector_search_input`                                |
| A breadcrumb          | `selector_bread_crumb_item_<id>`                       |
| The submit button     | `selector_submit_button`                               |
| The cancel button     | `selector_cancel_button`                               |
| The footer input      | `selector_footer_input`                                |
| The footer checkbox   | `selector_footer_checkbox`                             |
| The inline name row   | `selector_input_item`                                  |
| Its tick and cross    | `selector_new_item_accept`, `selector_new_item_cancel` |
| `RowLoader`           | `row-loader`, with `isContainer`                       |
| `BreadCrumbsLoader`   | `bread-crumbs-loader`                                  |

</APITable>

Only the first can be overridden by a prop.

## Related

- [`Aside`](./aside.md) — the panel `useAside` wraps this in.
- [`SearchInput`](../form-controls/search-input.md) — the search box, whose `onChange` gives a string.
- [`Table`](../table/index.md) — for rows with columns rather than a single label.
