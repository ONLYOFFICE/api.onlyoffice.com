---
sidebar_position: -2
---

#  Visual Studio Code

This instruction describes how to connect to the DocSpace MCP server using [Visual Studio Code](https://code.visualstudio.com/download).

### Remote DocSpace MCP Server

Connect to the MCP server running remotely using Streamable-HTTP transport. This
is the preferred connection method.

1. Open Visual Studio Code;
2. Bring up Command Palette;
3. Select "MCP: Open User Configuration";
4. Add a new record to the `servers` section:
```json
{
    "servers": {
        "onlyoffice-docspace": {
            "type": "http",
            "url": "https://mcp.onlyoffice.com/mcp"
        }
    }
}
```
5. Save the file;
6. Bring up Command Palette;
7. Select "MCP: List Servers";
8. Select "onlyoffice-docspace";
9. Select "Start Server";
![Add MCP Server](/assets/images/docspace/mcp_server/vscode.png)
10. Complete the OAuth authentication process:
    - Sign in to your DocSpace account by entering your email and password and clicking "Sign In".
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.

### Local DocSpace MCP Server

Connect to the locally running MCP server using stdio transport.

Ensure [Docker](https://www.docker.com/) is installed on your system.

1. Open Visual Studio Code;
2. Bring up Command Palette;
3. Select "MCP: Open User Configuration";
4. Add a new record to the `servers` section:
```json
{
    "servers": {
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
5. Set environment values:
    - `DOCSPACE_BASE_URL` - the URL of your DocSpace instance (e.g. https://portal.onlyoffice.com).
    - `DOCSPACE_API_KEY` - your personal API key generated in DocSpace settings -> Developer Tools -> API keys.
6. Save the file.
7. Bring up Command Palette;
8. Select "MCP: List Servers";
9. Select "onlyoffice-docspace";
10. Select "Start Server".