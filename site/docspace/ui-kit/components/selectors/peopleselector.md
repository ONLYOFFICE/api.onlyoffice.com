---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/selectors/People/People.docs.mdx"
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

# PeopleSelector

PeopleSelector is a searchable, paginated selector for choosing users and groups from the ONLYOFFICE Apps system.

### Features

- **Live API mode** — Fetches members, groups, and guests from the ONLYOFFICE Apps Search API with infinite scroll
- **Tabs** — Toggle Members, Groups, and Guests tabs via `withGroups` and `withGuests`
- **Single / multi-select** — Controlled by `isMultiSelect`
- **Room scope** — Pass `roomId` to filter users with access to a specific room
- **Access rights** — Optional access-right dropdown via `withAccessRights`
- **Current user** — Highlights the current user with a "(Me)" label via `currentUserId`
- **Exclusions** — Hide or disable specific users via `excludeItems` / `disableInvitedUsers`
- **Header / aside / cancel** — Fully composable via `withHeader`, `useAside`, `withCancelButton`

### Default

A basic PeopleSelector with default settings.

<ThemedImage alt="Default" width={724} sources={{ light: require('./peopleselector--default-light.png').default, dark: require('./peopleselector--default-dark.png').default }} />

```tsx
import PeopleSelector from "@onlyoffice/apps-ui-kit/selectors/People";

<PeopleSelector
  withHeader
  headerProps={{ headerLabel: "Select Member", onCloseClick: () => setOpen(false) }}
  onSubmit={(items) => console.log(items[0])}
/>
```

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `withHeader`? | `boolean` | Show the header bar with a label and close button. Default: `false`. |
| `headerProps`? | `object` |  |
| `isMultiSelect`? | `boolean` | Allow selecting multiple items at once. Default: `false`. |
| `onSubmit`? | `function` | Called with selected TSelectorItem array (and optional access right) on confirm. |
| `onClose`? | `function` | Called when the selector panel is dismissed. |
| `id`? | `-` | HTML id attribute for the root element. |
| `className`? | `-` | Additional CSS class name for the root element. |
| `withGroups`? | `-` | Show a Groups tab alongside the Members tab. Default: `false`. |
| `isGroupsOnly`? | `-` | Show only the Groups tab (no Members tab). Default: `false`. |
| `withGuests`? | `-` | Show a Guests tab alongside the Members tab. Default: `false`. |
| `isGuestsOnly`? | `-` | Show only the Guests tab. Default: `false`. |
| `currentUserId`? | `-` | ID of the current user — displayed with a '(Me)' label. |
| `filterUserId`? | `-` | ID of a user to remove from the list. |
| `withOutCurrentAuthorizedUser`? | `-` | Remove the current authorized user from the list entirely. Default: `false`. |
| `excludeItems`? | `-` | Array of user IDs to exclude from results. |
| `disableInvitedUsers`? | `-` | Array of user IDs to show as disabled (already invited). |
| `disableDisabledUsers`? | `-` | Disable terminated users in the list. Default: `false`. |
| `roomId`? | `-` | Scope the list to users/groups with access to this room ID. |
| `targetEntityType`? | `-` | Entity type used for shared-access queries when roomId is set. Default: `room`. |
| `onlyRoomMembers`? | `-` | Only show members already in the room. Default: `false`. |
| `isAgent`? | `-` | Adjusts empty screen description text for AI agent context. Default: `false`. |
| `useAside`? | `-` | Render the selector inside an Aside panel with a backdrop. Default: `false`. |
| `withoutBackground`? | `-` | Remove the background overlay in Aside mode. Default: `false`. |
| `withBlur`? | `-` | Apply blur effect to the Aside backdrop. Default: `false`. |
| `withCancelButton`? | `-` | Show a cancel button in the footer. Default: `false`. |
| `withFooterCheckbox`? | `-` | Show a checkbox in the footer. Default: `false`. |
| `emptyScreenHeader`? | `-` | Custom header text for the empty state screen. |
| `emptyScreenDescription`? | `-` | Custom description text for the empty state screen. |
| `onCancel`? | `-` | Called when the cancel button is clicked. |

</APITable>
