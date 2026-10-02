---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/selectors/Room/Room.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

{/*
(c) Copyright Ascensio System SIA 2009-2026

This program is a free software product.
You can redistribute it and/or modify it under the terms
of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
any third-party rights.

This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html

You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.

The  interactive user interfaces in modified source and object code versions of the Program must
display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.

Pursuant to Section 7(b) of the License you must retain the original Product logo when
distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
trademark law for use of our trademarks.

All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
*/}

# RoomSelector

RoomSelector is a searchable, paginated selector for choosing rooms from the ONLYOFFICE Apps system.

### Features

- **Live API mode** — Fetches rooms from the ONLYOFFICE Apps API with infinite scroll
- **Single / multi-select** — Controlled by `isMultiSelect`
- **Room type filter** — Pass `roomType` to restrict the list to specific room types
- **Search** — Enable with `withSearch`
- **Third-party rooms** — Optionally hide third-party storage rooms via `disableThirdParty`
- **Room creation** — Show a create-room button via `withCreate` + `createDefineRoomLabel`
- **Pre-selection** — Pass `selectedItems` with `sortSelectedFirst` to float already-selected rooms to the top
- **Header / aside / cancel** — Fully composable via `withHeader`, `useAside`, `withCancelButton`

### Default

A basic RoomSelector with default settings.

<ThemedImage alt="Default" width={724} sources={{ light: require('./roomselector--default-light.png').default, dark: require('./roomselector--default-dark.png').default }} />

```tsx
import RoomSelector from "@onlyoffice/apps-ui-kit/selectors/Room";

<RoomSelector
  isMultiSelect={false}
  withSearch
  withHeader
  headerProps={{ headerLabel: "Select Room", onCloseClick: () => setOpen(false) }}
  onSubmit={(items) => console.log(items[0])}
/>
```

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `withHeader`? | `boolean` | Show the header bar with a label and close button. Default: `false`. |
| `headerProps`? | `object` |  |
| `withSearch`? | `boolean` | Show a search input above the room list. Default: `false`. |
| `isMultiSelect`? | `boolean` | Allow selecting multiple rooms at once. Default: `false`. |
| `onSubmit`? | `function` | Called with the array of selected TSelectorItem(s) on confirm. |
| `onClose`? | `function` | Called when the selector panel is dismissed. |
| `id`? | `-` | HTML id attribute for the root element. |
| `className`? | `-` | Additional CSS class name for the root element. |
| `roomType`? | `-` | Filter rooms by type. Omit to show all room types. |
| `searchArea`? | `-` | Search scope — Active rooms, Archive, or Templates. |
| `excludeItems`? | `-` | Array of room IDs to exclude from the list. |
| `disableThirdParty`? | `-` | Hide rooms backed by third-party storage. Default: `false`. |
| `useAside`? | `-` | Render the selector inside an Aside panel with a backdrop. Default: `false`. |
| `withoutBackground`? | `-` | Remove the background overlay in Aside mode. Default: `false`. |
| `withBlur`? | `-` | Apply blur effect to the Aside backdrop. Default: `false`. |
| `withCancelButton`? | `-` | Show a cancel button in the footer. Default: `false`. |
| `cancelButtonLabel`? | `-` | Label for the cancel button. |
| `withPadding`? | `-` | Add padding inside the selector. Default: `false`. |
| `withCreate`? | `-` | Show a create-room button at the top of the list. Default: `false`. |
| `createDefineRoomLabel`? | `-` | Label for the create-room button (requires withCreate). |
| `createDefineRoomType`? | `-` | Room type to pre-fill on create (requires withCreate). |
| `forceIsMultiSelect`? | `-` | Force multi-select UI behavior regardless of the isMultiSelect prop. Default: `false`. |
| `sortSelectedFirst`? | `-` | Float pre-selected rooms to the top of the list. Default: `false`. |
| `disableSubmitUntilChanged`? | `-` | Keep submit disabled until the selection differs from the initial state. Default: `false`. |
| `submitButtonLabel`? | `-` | Custom label for the submit button. |
| `emptyScreenHeader`? | `-` | Custom header text for the empty state screen. |
| `emptyScreenDescription`? | `-` | Custom description text for the empty state screen. |
| `onCancel`? | `-` | Called when the cancel button is clicked. |

</APITable>
