---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/selectors/Groups/Groups.docs.mdx"
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

# GroupsSelector

GroupsSelector is a searchable, paginated selector panel for choosing a user group.

### Features

- **Live API mode** — Fetches groups from the ONLYOFFICE Apps Groups API in batches of 100 with infinite scroll
- **Single-select** — The user can pick exactly one group at a time
- **Search** — Filters groups by name; resets and re-fetches the list automatically
- **Header** — Optional configurable header with a close button via `withHeader` / `headerProps`
- **Aside mode** — Can render inside an Aside panel with backdrop and optional blur via `useAside`
- **Callbacks** — `onSubmit` and `onClose` hooks

### Default

A basic GroupsSelector with default settings.

<ThemedImage alt="Default" width={724} sources={{ light: require('./groupsselector--default-light.png').default, dark: require('./groupsselector--default-dark.png').default }} />

```tsx
import GroupsSelector from "@onlyoffice/apps-ui-kit/selectors/Groups";

<GroupsSelector
  withHeader
  headerProps={{
    headerLabel: "Select Group",
    onCloseClick: () => setOpen(false),
  }}
  onSubmit={(items) => console.log(items[0])}
/>
```

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `withHeader`? | `trueundefined` | Show the header bar with a label and close button. Default: `false`. |
| `headerProps`? | `HeaderPropsundefined` | The header's own props. Required once withHeader is set. |
| `useAside`? | `booleanundefined` | Render the selector inside an Aside panel with a backdrop. Default: `false`. |
| `onClose`? | `VoidFunctionundefined` | Called when the selector panel is dismissed. |
| `withoutBackground`? | `booleanundefined` | Remove the background overlay when rendered in Aside mode. Default: `false`. |
| `withBlur`? | `booleanundefined` | Apply a blur effect to the Aside backdrop. Default: `false`. |
| `id`? | `stringundefined` | HTML id attribute for the root element. |
| `className`? | `stringundefined` | Additional CSS class name for the root element. |
| `onSubmit` | `(selectedItems: TSelectorItem[], access?: TAccessRight \| null \| undefined, fileName?: string \| undefined, isFooterCheckboxChecked?: boolean \| undefined) => void \| Promise<...>` | Called with the selected TSelectorItem array when the user confirms their choice. |

</APITable>
