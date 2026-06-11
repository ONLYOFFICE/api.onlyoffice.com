# Selector

A component for selecting files, folders, rooms, users, or groups. Five selector types are available: **Base**, **Files**, **Groups**, **People**, **Room**.

To control the selector, use the following actions in the [IMessage](../plugin-message.md) response:

- **Actions.showSelector** - opens the selector with `selectorProps`.
- **Actions.updateSelector** - updates the currently open selector with `selectorProps`.
- **Actions.closeSelector** - closes the selector.

The `selectorProps` passed in `IMessage` has the following structure:

``` ts
{
  type: SelectorType,  // one of: Base, Files, Groups, People, Room
  props: TBaseSelector | TFilesSelector | TGroupsSelector | TPeopleSelector | TRoomSelector,
}
```

To set the selector type, use [SelectorType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums): *Base, Files, Groups, People, Room*.

To set the room type, use [RoomsType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Rooms.ts): *PublicRoom, FormRoom, EditingRoom, VirtualDataRoom, CustomRoom*.

To set the room search area, use [RoomSearchArea](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Rooms.ts): *Any, Active, Archive, Templates*.

---

## Common parameters

The following parameters are shared across all selector types.

### id

A unique identifier for the selector component.

Type: string

Example: `"my-selector"`

### className

Sets a CSS class name applied to the selector.

Type: string

Example: `"my-selector-class"`

### isLoading

Specifies whether to show a loading indicator for the entire selector.

Type: boolean

Example: `false`

### items

The list of items to display. Each item has a required `label` and optional `id`. See [Item parameters](#item-parameters).

Type: TSelectorItem[]

Example: `[{id: "1", label: "Report.pdf"}]`

### hasNextPage

Specifies whether more items are available on subsequent pages.

Type: boolean

Example: `true`

### isNextPageLoading

Specifies whether the next page is currently loading.

Type: boolean

Example: `false`

### onLoadNextPage

A function called to load the next page of items.

Type: func

Example: `() => {}`

### totalItems

The total number of items available.

Type: number

Example: `42`

### submitButtonLabel

The label of the submit button.

Type: string

Example: `"Select"`

### disabledSubmitButton

Specifies whether the submit button is disabled.

Type: boolean

Example: `false`

### onSubmit

A function called when the user clicks the submit button. Receives `selectedIds`, `fileName`, and `isFooterCheckboxChecked`.

Type: func

Example: `({selectedIds}) => {}`

### onSelect

A function called when an item is selected. Receives `selectedId` and `isDoubleClick`.

Type: func

Example: `({selectedId, isDoubleClick}) => {}`

### isMultiSelect

Specifies whether multiple items can be selected.

Type: boolean

Example: `true`

### maxSelectedItems

The maximum number of items that can be selected.

Type: number

Example: `5`

### selectedItems

The initially selected items.

Type: TSelectorItem[]

Example: `[{id: "1", label: "Report.pdf"}]`

### withHeader

Specifies whether to display the header.

Type: boolean

Example: `true`

### headerProps

Configuration of the selector header.

Type: object

| Name | Type | Description |
|---|---|---|
| label | string | The title text in the header. |
| isCloseable | boolean | Specifies whether to show a close button. |
| onCloseClick | func | A function called when the close button is clicked. |
| withBackButton | boolean | Specifies whether to show a back button. |
| onBackClick | func | A function called when the back button is clicked. |

### withBreadCrumbs

Specifies whether to display breadcrumb navigation.

Type: boolean

Example: `true`

### breadCrumbs

The breadcrumb items to display. Each item has `id`, `label`, and optional `isRoom`.

Type: TBreadCrumbItem[]

Example: `[{id: "root", label: "My Files"}]`

### isBreadCrumbsLoading

Specifies whether the breadcrumbs are loading.

Type: boolean

Example: `false`

### onSelectBreadCrumb

A function called when the user clicks a breadcrumb item. Receives the breadcrumb `id`.

Type: func

Example: `(id) => {}`

### withCancelButton

Specifies whether to display a cancel button.

Type: boolean

Example: `true`

### cancelButtonLabel

The label of the cancel button.

Type: string

Example: `"Cancel"`

### onCancel

A function called when the user clicks the cancel button.

Type: func

Example: `() => {}`

### withCheckbox

Specifies whether to display a checkbox in the footer.

Type: boolean

Example: `false`

### footerCheckboxLabel

The label of the footer checkbox.

Type: string

Example: `"Apply to all files"`

### isChecked

The initial checked state of the footer checkbox.

Type: boolean

Example: `false`

### emptyScreenHeader

The header text displayed when there are no items.

Type: string

Example: `"No files found"`

### emptyScreenDescription

The description text displayed when there are no items.

Type: string

Example: `"Upload files to get started"`

### descriptionText

A descriptive text displayed inside the selector.

Type: string

Example: `"Select a destination folder"`

### onLoad

A function called when the selector is mounted.

Type: func

Example: `() => {}`

### onClose

A function called when the selector is closed.

Type: func

Example: `() => {}`

---

## Files selector parameters

Used with `SelectorType.Files`. Extends common parameters with the following:

### currentFolderId

The id of the folder to open initially.

Type: string | number

Example: `"folder-123"`

### isRoomsOnly

Specifies whether to display only rooms.

Type: boolean

Example: `false`

### openRoot

Specifies whether to open the root folder initially.

Type: boolean

Example: `true`

### withFooterInput

Specifies whether to show an input field in the footer.

Type: boolean

Example: `true`

### footerInputHeader

The label for the footer input field.

Type: string

Example: `"File name"`

### currentFooterInputValue

The initial value of the footer input field.

Type: string

Example: `"New document"`

### withFooterCheckbox

Specifies whether to show a checkbox in the footer.

Type: boolean

Example: `false`

### getIsDisabled

A function that determines whether the submit button should be disabled based on the current selection state.

Type: func

Example: `(params) => false`

---

## Room selector parameters

Used with `SelectorType.Room`. Extends common parameters with the following:

### roomType

The type(s) of rooms to display.

Type: [RoomsType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Rooms.ts) | RoomsType[]

Example: `RoomsType.EditingRoom`

### searchArea

The area to search for rooms.

Type: [RoomSearchArea](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Rooms.ts)

Example: `RoomSearchArea.Active`

### excludeItems

Room ids to exclude from the list.

Type: (number | string)[]

Example: `["room-1", "room-2"]`

### createDefineRoomLabel

The label for the "create new room" option.

Type: string

Example: `"Create room"`

### createDefineRoomType

The default type for newly created rooms.

Type: [RoomsType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Rooms.ts)

Example: `RoomsType.CustomRoom`

---

## People selector parameters

Used with `SelectorType.People`. Extends common parameters with the following:

### withGroups

Specifies whether to include groups in the selector.

Type: boolean

Example: `true`

### isGroupsOnly

Specifies whether to display only groups.

Type: boolean

Example: `false`

### withGuests

Specifies whether to include guest users.

Type: boolean

Example: `false`

### isGuestsOnly

Specifies whether to display only guest users.

Type: boolean

Example: `false`

### currentUserId

The id of the current user to exclude from the list.

Type: string

Example: `"user-123"`

### excludeItems

User or group ids to exclude from the list.

Type: string[]

Example: `["user-1", "group-2"]`

### disableInvitedUsers

Ids of already invited users to show as disabled.

Type: string[]

Example: `["user-3"]`

### roomId

The id of the room the selector is related to.

Type: string | number

Example: `"room-456"`

### alwaysShowFooter

Specifies whether the footer is always visible, even when nothing is selected.

Type: boolean

Example: `true`

### onlyRoomMembers

Specifies whether to display only members of the current room.

Type: boolean

Example: `false`

---

## Groups selector parameters

Used with `SelectorType.Groups`. Extends common parameters with the following:

### onSubmit

A function called when the user clicks the submit button. Receives `selectedIds`, and optional `fileName` and `isFooterCheckboxChecked`.

Type: func

Example: `({selectedIds}) => {}`

---

## Item parameters

Each item in the `items` array is a `TSelectorItem` object with the following properties:

### label

The display text for the item.

Type: string

Example: `"Report.pdf"`

### id

A unique identifier for the item.

Type: string | number

Example: `"file-123"`

### icon

The URL or path to the item icon.

Type: string

Example: `"https://example.com/icon.svg"`

### isInputItem

Specifies whether to render this item as an inline input field.

Type: boolean

Example: `true`

### defaultInputValue

The default value shown in the input field when `isInputItem` is `true`.

Type: string

Example: `"New folder"`

### onAcceptInput

A function called when the user confirms the input value.

Type: func

Example: `(value) => {}`

### onCancelInput

A function called when the user cancels the input.

Type: func

Example: `() => {}`

### isCreateNewItem

Specifies whether to render this item as a "create new" button.

Type: boolean

Example: `true`

### onCreateClick

A function called when the user clicks the "create new" item.

Type: func

Example: `() => {}`

---

## Example

``` ts
import {Actions, SelectorType, type IMessage, type TBaseSelector} from "@onlyoffice/docspace-plugin-sdk"

const selectorProps: TBaseSelector = {
  withHeader: true,
  headerProps: {
    label: "Select destination",
    isCloseable: true,
    onCloseClick: () => {
      const message: IMessage = {actions: [Actions.closeSelector]}
      return message
    },
  },
  items: [
    {id: "folder-1", label: "Documents"},
    {id: "folder-2", label: "Images"},
  ],
  submitButtonLabel: "Select",
  onSubmit: ({selectedIds}) => {
    const message: IMessage = {
      actions: [Actions.closeSelector],
    }
    return message
  },
  withCancelButton: true,
  cancelButtonLabel: "Cancel",
  onCancel: () => {
    const message: IMessage = {actions: [Actions.closeSelector]}
    return message
  },
}

// Open the selector
const openMessage: IMessage = {
  actions: [Actions.showSelector],
  selectorProps: {
    type: SelectorType.Base,
    props: selectorProps,
  },
}
```
