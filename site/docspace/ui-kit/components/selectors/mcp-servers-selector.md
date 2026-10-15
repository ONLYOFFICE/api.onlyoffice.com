---
description: "MCPServersSelector is a multi-select panel for choosing available MCP (Model Context Protocol) servers to connect to an AI agent."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/selectors/MCPServers/MCPServers.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# MCPServersSelector

:::warning[Portal only]

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

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

<ThemedImage alt="Default" width={724} sources={{ light: require('./mcp-servers-selector--default-light.png').default, dark: require('./mcp-servers-selector--default-dark.png').default }} />

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
