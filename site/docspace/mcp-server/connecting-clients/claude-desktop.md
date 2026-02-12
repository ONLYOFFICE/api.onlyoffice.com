---
sidebar_position: -7
---

#  Claude Desktop

This instruction describes how to connect to the DocSpace MCP server using [Claude
Desktop](https://claude.com/download).

### Remote DocSpace MCP Server

Connect to the MCP server running remotely using Claude's Connectors. This is
the preferred connection method.

1. Open Claude Desktop;
2. Navigate to Settings;
3. Navigate to Connectors;
4. Click "Add custom connector";
5. Enter a name (e.g., "ONLYOFFICE DocSpace MCP");
6. Enter a URL (e.g., https://mcp.onlyoffice.com/mcp);
7. Click "Add";
![Add MCP Server](/assets/images/docspace/mcp_server/claude_desktop.png)
8. Click "Connect" next to the newly added connector;
9. Complete the OAuth authentication process:
    - Sign in to your DocSpace account by entering your email and password and clicking "Sign In".
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.

### Local DocSpace MCP Server

#### Extension

Connect to the locally running MCP server using Claude's Extensions.

Ensure [Node.js](https://nodejs.org/) version 18 or higher is installed on your system, then download
the MCP bundle from [GitHub Releases](https://github.com/ONLYOFFICE/docspace-mcp/releases).

1. Open Claude Desktop;
2. Navigate to Settings;
3. Navigate to Extensions;
4. Click "Advanced settings";
5. Click "Install Extension";
6. Select the downloaded MCP bundle;
7. Click "Install";
8. Click "Configure";
9. In the "Base URL" field, enter the URL of your DocSpace instance (e.g. https://portal.onlyoffice.com);
10. In the "API Key" field, enter your personal API key generated in DocSpace settings -> Developer Tools -> API keys;
11. Click "Save".

#### Local MCP

Connect to the locally running MCP server using Claude's Local MCP servers.

Ensure [Docker](https://www.docker.com/) is installed on your system.

1. Open Claude Desktop;
2. Navigate to Settings;
3. Navigate to Developer;
4. Click "Edit Config";
5. Open the configuration file in a text editor;
6. Add a new record to the `mcpServers` section:
```json
{
    "mcpServers": {
        "onlyoffice-docspace": {
            "command": "docker",
            "args": ["run", "--interactive", "--rm", "--env", "DOCSPACE_BASE_URL", "--env", "DOCSPACE_API_KEY", "onlyoffice/docspace-mcp"],
            "env": {
                "DOCSPACE_BASE_URL": "https://your-instance.onlyoffice.com",
                "DOCSPACE_API_KEY": "your-api-key"
            }
        }
    }
}
```
7. Set environment values:
    - `DOCSPACE_BASE_URL` - the URL of your DocSpace instance (e.g. https://portal.onlyoffice.com).
    - `DOCSPACE_API_KEY` - your personal API key generated in DocSpace settings -> Developer Tools -> API keys.
8. Save the file;
9. Restart Claude Desktop.