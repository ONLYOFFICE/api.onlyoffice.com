---
description: "FilesSelector is a full file-system browser selector for navigating ONLYOFFICE Apps rooms, folders, and files."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/selectors/Files/FilesSelector.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# FilesSelector

:::warning[Portal only]

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

FilesSelector is a full file-system browser selector for navigating ONLYOFFICE Apps rooms, folders, and files.

## Features

- **Browse rooms & folders** — Navigate the full file hierarchy with breadcrumb trail
- **Search** — Enable with `withSearch`, scoped to the current folder/room
- **Room type filter** — Restrict the root list to specific room types via `roomType`
- **File type filter** — Filter by extension or type via `filterParam`
- **Footer input** — Optionally show a file-name input field in the footer
- **Footer checkbox** — Optional checkbox (e.g., "keep original") in the footer
- **Creation** — Show a create-room button via `withCreate` + `createDefineRoomLabel`
- **Aside / embedded** — Rendered inside an `<Aside>` panel by default; pass `embedded` to render inline
- **Portal on mobile** — Automatically renders in a Portal on mobile/tablet devices
- **SSR support** — Pre-populate with server-fetched data via `withInit` + `initItems`

### Default

Browse rooms and folders, then click **Select** to confirm. The submit button is enabled only when a folder is selected.

<ThemedImage alt="Default" width={724} sources={{ light: require('./files-selector--default-light.png').default, dark: require('./files-selector--default-dark.png').default }} />

```tsx
<FilesSelector
  isPanelVisible={open}
  embedded={false}
  currentFolderId={0}
  rootFolderType={FolderType.VirtualRooms}
  currentDeviceType={DeviceType.desktop}
  isRoomsOnly={false}
  isThirdParty={false}
  withSearch
  withBreadCrumbs
  withoutBackButton={false}
  withCancelButton
  withCreate={false}
  withFooterInput={false}
  withFooterCheckbox={false}
  submitButtonLabel="Select"
  cancelButtonLabel="Cancel"
  footerInputHeader=""
  currentFooterInputValue=""
  footerCheckboxLabel=""
  descriptionText=""
  disabledItems={[]}
  filesSettings={filesSettings}
  onSubmit={(id, title) => console.log(id, title)}
  onCancel={() => setOpen(false)}
  getIsDisabled={getIsDisabled}
  getFilesArchiveError={getArchiveError}
/>
```

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `isPanelVisible`? | `boolean` | Controls visibility of the Aside panel (non-embedded mode). Default: `true`. |
| `embedded`? | `boolean` | Render inline without the Aside/Backdrop wrapper — useful for embedding inside dialogs. Default: `false`. |
| `currentDeviceType`? | `string` | Current device type — affects portal rendering on mobile/tablet. Default: `DeviceType.desktop`. |
| `currentFolderId`? | `number` | ID of the initially opened folder (0 = rooms root). Default: `0`. |
| `rootFolderType`? | `number` | Root folder context type. |
| `isRoomsOnly`? | `boolean` | Restrict navigation to rooms level — do not allow descending into folders. Default: `false`. |
| `isThirdParty`? | `boolean` | Whether navigating a third-party storage provider. Default: `false`. |
| `withSearch`? | `boolean` | Show a search input (hidden at root level). Default: `true`. |
| `withBreadCrumbs`? | `boolean` | Show the breadcrumb navigation trail. Default: `true`. |
| `withoutBackButton`? | `boolean` | Hide the back button in the breadcrumb bar. Default: `false`. |
| `withCancelButton`? | `boolean` | Show a cancel button in the footer. Default: `true`. |
| `cancelButtonLabel`? | `string` | Label for the cancel button. |
| `withCreate`? | `boolean` | Show a create-room button at the top of the rooms list. Default: `false`. |
| `withFooterInput`? | `boolean` | Show a text input in the footer (e.g., for file/folder name). Default: `false`. |
| `withFooterCheckbox`? | `boolean` | Show a checkbox in the footer. Default: `false`. |
| `submitButtonLabel`? | `string` | Label for the submit / confirm button. |
| `footerInputHeader`? | `string` | Header label for the footer input. |
| `currentFooterInputValue`? | `string` | Default value pre-filled in the footer input. |
| `footerCheckboxLabel`? | `string` | Label for the footer checkbox. |
| `descriptionText`? | `string` | Description text shown below the selector list. |
| `disabledItems`? | `array` | IDs of folders that are disabled as selection targets. |
| `roomType`? | `-` | Filter the root rooms list by type. |
| `isUserOnly`? | `-` | Show only the current user's personal folder tree. Default: `false`. |
| `openRoot`? | `-` | Open the selector at the root tree view instead of a specific folder. Default: `false`. |
| `withHeader`? | `-` | Show the header bar with a label and close button. Default: `false`. |
| `createDefineRoomLabel`? | `-` | Label for the create-room button (requires withCreate). |
| `createDefineRoomType`? | `-` | Room type to pre-select on create (requires withCreate). |
| `filterParam`? | `-` | File type filter — restricts the items shown inside folders. |
| `applyFilterOption`? | `-` | Whether filter applies to files only or all items. |
| `disableBySecurity`? | `-` | Security key — items without this security permission are disabled. |
| `withPadding`? | `-` | Add padding inside the selector body. Default: `false`. |
| `checkCreating`? | `-` | Validate folder write access by creating and deleting a test file on folder open. Default: `false`. |

</APITable>
