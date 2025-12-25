---
sidebar_position: -3
---

#  ONLYOFFICE Desktop Editors

This instruction describes how to connect to the DocSpace MCP server using [ONLYOFFICE Desktop Editors](https://onlyoffice.com/download-desktop?utm_source=api&utm_medium=article&utm_campaign=mcpserver).

### Local DocSpace MCP Server

Connect to the locally running MCP server using stdio transport.

Ensure [Docker](https://www.docker.com/) is installed on your system.

1. Open ONLYOFFICE Desktop Editors;
2. Navigate to AI agent;
3. Navigate to Settings;
4. Navigate to MCP Servers;
5. Click "Edit configuration";
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

9. Click "Save".