---
sidebar_position: -5
---

#  Cursor

This instruction describes how to connect to the DocSpace MCP server using [Cursor](https://cursor.com/download).

### Remote DocSpace MCP Server

Connect to the MCP server running remotely using Streamable-HTTP transport. This
is the preferred connection method.

1. Open Cursor;
2. Bring up Command Palette;
3. Select "View: Open MCP Settings";
4. Click "Add Custom MCP";
5. Add a new record to the `mcpServers` section:
```json
{
    "mcpServers": {
        "onlyoffice-docspace": {
            "type": "http",
            "url": "https://mcp.onlyoffice.com/mcp"
        }
    }
}
```
6. Save the file;
![Add MCP Server](/assets/images/docspace/mcp_server/cursor.png)
7. Navigate back to "MCP Settings";
8. Click "Connect" next to the newly added MCP server;
9. Complete the OAuth authentication process:
    - Sign in to your DocSpace account by entering your email and password and clicking "Sign In".
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.

### Local DocSpace MCP Server

Connect to the locally running MCP server using stdio transport.

Ensure [Docker](https://www.docker.com/) is installed on your system.

1. Open Cursor;
2. Bring up Command Palette;
3. Select "View: Open MCP Settings";
4. Click "Add Custom MCP";
5. Add a new record to the `mcpServers` section:
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
8. Save the file.