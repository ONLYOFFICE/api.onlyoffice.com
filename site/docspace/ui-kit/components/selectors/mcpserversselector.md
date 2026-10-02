---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/selectors/MCPServers/MCPServers.docs.mdx"
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

# MCPServersSelector

MCPServersSelector is a multi-select panel for choosing available MCP (Model Context Protocol) servers to connect to an AI agent.

### Features

- **Live API mode** — Fetches available MCP servers from the API in batches of 100 with infinite scroll
- **Multi-select** — Users can select and deselect multiple servers simultaneously
- **Pre-selection** — Pass `initedSelectedServers` with server IDs to restore a previous selection on open
- **Disabled items** — Servers with `needReset: true` are rendered as disabled
- **Back navigation** — Separate `onBackClick` and `onClose` callbacks for two-level navigation
- **Cancel button** — Built-in cancel button that triggers `onBackClick`

### Default

A basic MCPServersSelector with default settings.

<ThemedImage alt="Default" width={724} sources={{ light: require('./mcpserversselector--default-light.png').default, dark: require('./mcpserversselector--default-dark.png').default }} />

```tsx
import MCPServersSelector from "@onlyoffice/apps-ui-kit/selectors/MCPServers";

<MCPServersSelector
  initedSelectedServers={["server-id-1"]}
  onSubmit={(servers) => saveConnectedServers(servers.map((s) => s.id))}
  onClose={() => setOpen(false)}
  onBackClick={() => navigateBack()}
/>
```

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `useAside`? | `booleanundefined` | Render the selector inside an Aside panel with a backdrop. Default: `false`. |
| `onClose`? | `VoidFunctionundefined` | Called to fully close the selector. |
| `withoutBackground`? | `booleanundefined` | Remove the background overlay in Aside mode. Default: `false`. |
| `withBlur`? | `booleanundefined` | Apply blur effect to the Aside backdrop. Default: `false`. |
| `onSubmit` | `(servers: TSelectorItem[]) => void` | Called with the array of selected TSelectorItem servers when the user confirms. |
| `onBackClick` | `VoidFunction` | Called when the back button or cancel button is clicked — navigate to previous view. |
| `initedSelectedServers`? | `string[] \| undefined` | Array of server IDs that should be pre-selected when the selector opens. |

</APITable>
