---
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import APITable from '@site/src/components/APITable/APITable';

# Connecting MCP servers

ONLYOFFICE Desktop Editors supports connecting MCP (Model Context Protocol) servers to extend AI capabilities with custom tools and integrations. MCP allows AI agents to interact with various services and data sources through standardized protocols.

MCP servers were first supported in version 9.2, in the desktop chat only. Version 10.0 introduced the AI Tools add-on, which brings MCP support to the editors. This guide describes the setup for version 10.0 and later.

## AI Chat capabilities

AI Chat in Desktop Editors provides several powerful features:

1. **Chat interface** - Natural language interaction with documents and data
2. **Web search** - Integrated web search capabilities for real-time information
3. **MCP servers** - Connect custom or community MCP servers for extended functionality
4. **Built-in tools** - Desktop Editors includes native tools for document operations (generation, forms, presentations)

### Viewing available tools

To see all available tools (both built-in and MCP):

**Method 1: Console command**

Open the browser console in Desktop Editors and execute:

```javascript
JSON.parse(AscDesktopEditor.getToolFunctions());
```

This returns an object with descriptions of all available functions.

**Method 2: Source code**

View the built-in tool definitions in the [Desktop SDK repository](https://github.com/ONLYOFFICE/desktop-sdk/blob/master/ChromiumBasedEditors/lib/tools/functions).

Each folder (except `internal`) contains a JSON file with function descriptions.

## Prerequisites

Before connecting MCP servers, ensure you have:

- **ONLYOFFICE Desktop Editors** version 10.0 or higher
- Installed AI Tools and at least one connected AI model (OpenAI, Anthropic Claude, or other supported LLM)
- Required dependencies for the MCP server (e.g., Docker, Node.js, or Python)

**Important:** The **MCP Servers** settings are unavailable until at least one AI model is added in Desktop Editors.

## Configuration steps

Follow these steps to connect an MCP server to Desktop Editors:

### Step 1: Access MCP configuration

1. Open ONLYOFFICE Desktop Editors
2. In the left panel, click **AI Tools**. If AI Tools are not installed yet, click **Accept & Install**, and then restart the application
3. Connect an AI model. In the **AI Chat** panel, select a provider, enter its API key, select a model, and click **Add Model**. You can also do this later in **Settings** → **AI Models**
4. In the left panel, click **Settings** and navigate to **MCP Servers**
5. Click **Edit configuration** to open the JSON editor

### Step 2: Add server configuration

Enter your MCP server configuration in JSON format. The configuration structure depends on how the server is launched:

<Tabs>
  <TabItem value="docker" label="Docker">
    ```json
    {
      "mcpServers": {
        "server-name": {
          "command": "docker",
          "args": [
            "run",
            "--interactive",
            "--rm",
            "--env", "VARIABLE_NAME",
            "--env", "API_KEY",
            "docker-image-name"
          ],
          "env": {
            "VARIABLE_NAME": "value",
            "API_KEY": "your-api-key"
          }
        }
      }
    }
    ```

    :::note
    Docker must be installed and running.
    :::

  </TabItem>
  <TabItem value="node" label="Node.js">
    ```json
    {
      "mcpServers": {
        "server-name": {
          "command": "node",
          "args": ["/path/to/server/index.js"],
          "env": {
            "API_KEY": "your-api-key"
          }
        }
      }
    }
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ```json
    {
      "mcpServers": {
        "server-name": {
          "command": "python",
          "args": ["-m", "mcp_server_package"],
          "env": {
            "API_KEY": "your-api-key"
          }
        }
      }
    }
    ```
  </TabItem>
  <TabItem value="npx" label="npx">
    ```json
    {
      "mcpServers": {
        "server-name": {
          "command": "npx",
          "args": ["--yes", "package-name"],
          "env": {
            "API_KEY": "your-api-key"
          }
        }
      }
    }
    ```

    :::note
    Uses npx to run packages without global installation. The `--yes` flag automatically installs the package if not present.
    :::

  </TabItem>
</Tabs>

### Configuration parameters

<APITable>

| Parameter       | Type   | Description                                                                                         |
|-----------------|--------|-----------------------------------------------------------------------------------------------------|
| mcpServers      | object | Root object containing all MCP server configurations.                                               |
| server-name     | object | Unique identifier for the MCP server. Replace with your server's name (e.g., "onlyoffice-apps").|
| command         | string | Command to launch the MCP server (e.g., "docker", "node", "python").                                |
| args            | array  | Array of command-line arguments passed to the command.                                              |
| env             | object | Environment variables required by the MCP server (e.g., API keys, URLs).                            |

</APITable>

## Practical examples

### ONLYOFFICE DocSpace MCP

Connect to DocSpace for document management operations:

```json
{
  "mcpServers": {
    "onlyoffice-apps": {
      "env": {
        "DOCSPACE_BASE_URL": "https://your-docspace-instance.onlyoffice.com",
        "DOCSPACE_API_KEY": "your-api-key"
      },
      "command": "npx",
      "args": [
        "--yes",
        "@onlyoffice/docspace-mcp"
      ]
    }
  }
}
```

### Local custom MCP server

Run a custom Node.js MCP server from your local machine:

```json
{
  "mcpServers": {
    "mcp_local": {
      "command": "node",
      "args": [
        "D:/MCP_EXAMPLE/index.js"
      ]
    }
  }
}
```

:::tip
To create your own custom MCP server:
1. Install Node.js on your system
2. Create a new directory for your MCP server
3. Run `npm install` to install dependencies
4. Implement your custom tools following the MCP protocol
5. Reference the path to your server's entry point in the configuration
:::

### Multiple MCP servers

Configure multiple servers simultaneously:

```json
{
  "mcpServers": {
    "mcp_local": {
      "command": "node",
      "args": [
        "D:/MCP_EXAMPLE/index.js"
      ]
    },
    "onlyoffice-apps": {
      "env": {
        "DOCSPACE_BASE_URL": "https://your-docspace-instance.onlyoffice.com",
        "DOCSPACE_API_KEY": "your-api-key"
      },
      "command": "npx",
      "args": [
        "--yes",
        "@onlyoffice/docspace-mcp"
      ]
    }
  }
}
```

:::note
When configuring multiple servers, separate each server configuration with a comma.
:::

### Step 3: Save and enable tools

1. After entering the configuration, click **Save**
2. The server starts automatically and appears in the **Permissions** section
3. Make sure the toggle next to the server name is on
4. To enable or disable individual tools, expand the server entry and use the toggles next to them

### Step 4: Use the MCP server

Once connected and enabled:

1. Open the **AI Chat** panel in Desktop Editors
2. Type natural language commands that correspond to the server's capabilities
3. AI Chat will automatically use the available MCP tools
4. Results are displayed directly in the chat interface
5. You can copy conversations or save them as .docx files

## Available MCP servers

Desktop Editors supports various MCP servers that extend AI capabilities:

- [ONLYOFFICE DocSpace](./docspace-mcp.md) - Connect to DocSpace for document management
- Community MCP servers - Any MCP-compatible server following the protocol specification

## Troubleshooting

Common issues and solutions:

- **MCP Servers settings unavailable**: Ensure you have added at least one AI model first
- **Server fails to start**: Check that all required dependencies are installed and running
- **Authentication errors**: Verify that API keys and credentials in the `env` section are correct
- **Tools not appearing**: Restart Desktop Editors after saving the configuration

## Notes

- MCP server support is currently in preview and may undergo changes in future versions
- Server configurations are stored locally on your machine
- Each server runs in its own process and communicates via the Model Context Protocol
- Multiple MCP servers can be configured simultaneously
