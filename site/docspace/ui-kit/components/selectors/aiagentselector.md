---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/selectors/AIAgent/AIAgent.docs.mdx"
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

# AIAgentSelector

AIAgentSelector is a selector panel for choosing an AI agent room.

### Features

- **Live API mode** — Fetches AI agent rooms from the ONLYOFFICE Apps API with infinite scroll
- **Init data mode** — Accepts pre-loaded items for SSR or offline scenarios via `withInit`
- **Security filtering** — Disable items that lack the `UseChat` permission via `disableBySecurity`
- **Exclusion list** — Skip already-selected agents via `excludeItems`
- **Padding control** — Toggle inner padding with `withPadding`
- **Callbacks** — `onSubmit`, `onClose`, and `setIsDataReady` hooks

### Default

A basic AIAgentSelector with default settings.

<ThemedImage alt="Default" width={1019} sources={{ light: require('./aiagentselector--default-light.png').default, dark: require('./aiagentselector--default-dark.png').default }} />

```tsx
import AIAgentSelector from "@onlyoffice/apps-ui-kit/selectors/AIAgent";

<AIAgentSelector
  withPadding
  onSubmit={(items) => console.log(items)}
  onClose={() => setOpen(false)}
/>
```

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `id`? | `stringundefined` | HTML id attribute for the root element. |
| `className`? | `stringundefined` | Additional CSS class name for the root element. |
| `style`? | `CSSPropertiesundefined` |  |
| `onSubmit` | `(items: TSelectorItem[]) => void \| Promise<void>` | Called with the selected TSelectorItem array on confirm. |
| `excludeItems`? | `(string \| number \| undefined)[] \| undefined` | List of item ids to exclude from the selector list. |
| `setIsDataReady`? | `((value: boolean) => void) \| undefined` | Called with true/false when data loading state changes. |
| `withPadding`? | `booleanundefined` | Add inner padding to the selector panel. Default: `false`. |
| `onClose` | `() => void` | Called when the selector panel is dismissed. |
| `disableBySecurity`? | `stringundefined` | Message shown on items where UseChat security permission is missing. |
| `externalInfoBarData`? | `TInfoBarDataundefined` |  |
| `withInit`? | `trueundefined` | Use pre-loaded init data instead of fetching from the API. Default: `false`. |
| `initItems`? | `FolderDtoInteger[] \| undefined` |  |

</APITable>
