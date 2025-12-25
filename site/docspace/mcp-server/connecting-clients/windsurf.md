---
sidebar_position: -1
---

#  Windsurf

This instruction describes how to connect to the DocSpace MCP server using [Windsurf](https://windsurf.com/download).

### Remote DocSpace MCP Server

Connect to the MCP server running remotely using Streamable-HTTP transport. This
is the preferred connection method.

1. Open Windsurf;
2. Bring up Command Palette;
3. Select "Open Windsurf User Settings";
4. Navigate to Cascade;
5. Click "Open MCP Marketplace";
6. Click "Settings";
7. Add a new record to the `mcpServers` section:
```json
{
    "mcpServers": {
        "onlyoffice-docspace": {
            "serverUrl": "https://mcp.onlyoffice.com/mcp"
        }
    }
}
```
8. Save the file;
9. Complete the OAuth authentication process:

- Sign in to your DocSpace account by entering your email and password and clicking "Sign In".
- If you have more than one account associated with the entered email, choose one of them.
- Allow the MCP Remote Server to access the specified data in your DocSpace account.

### Local DocSpace MCP Server

Connect to the locally running MCP server using stdio transport.

Ensure [Docker](https://www.docker.com/) is installed on your system.

1. Open Windsurf;
2. Bring up Command Palette;
3. Select "Open Windsurf User Settings";
4. Navigate to Cascade;
5. Click "Open MCP Marketplace";
6. Click "Settings";
7. Add a new record to the `mcpServers` section:
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
8. Set environment values:

- `DOCSPACE_BASE_URL` - the URL of your DocSpace instance (e.g. https://portal.onlyoffice.com).
- `DOCSPACE_API_KEY` - your personal API key generated in DocSpace settings -> Developer Tools -> API keys.

9. Save the file.