---
sidebar_position: 1
---

# ONLYOFFICE Apps MCP

The ONLYOFFICE Apps MCP server allows AI Chat in Desktop Editors to interact with your ONLYOFFICE Apps instance, enabling document management operations through natural language commands.

## Prerequisites

Before connecting the ONLYOFFICE Apps MCP server, ensure you have:

- **ONLYOFFICE Desktop Editors** version 10.0 or higher
- Access to your ONLYOFFICE Apps instance (SaaS or on-premises)
- Valid API key for ONLYOFFICE Apps
- Docker installed and running on your machine
- Installed AI Tools and at least one connected AI model (OpenAI, Anthropic Claude, or other supported LLM)

## Getting an ONLYOFFICE Apps API key

To obtain an API key from your ONLYOFFICE Apps instance:

1. Log in to your ONLYOFFICE Apps portal as an administrator
2. Click **Developer Tools** at the bottom of the left panel and select **API keys**
3. Create a new API key or use an existing one
4. Copy the API key for use in the configuration

## Configuration

### Step 1: Access MCP configuration

1. Open ONLYOFFICE Desktop Editors
2. In the left panel, click **AI Tools**. If AI Tools are not installed yet, click **Accept & Install**, and then restart the application
3. Connect an AI model. In the **AI Chat** panel, select a provider, enter its API key, select a model, and click **Add Model**. You can also do this later in **Settings** → **AI Models**. The **MCP Servers** settings are unavailable until at least one AI model is added
4. In the left panel, click **Settings** and navigate to **MCP Servers**
5. Click **Edit configuration**

![Access MCP configuration](/assets/images/desktop/step1.png#gh-light-mode-only)![Access MCP configuration](/assets/images/desktop/step1.dark.png#gh-dark-mode-only)

### Step 2: Add ONLYOFFICE Apps server configuration

Enter the following JSON configuration, replacing the placeholder values with your ONLYOFFICE Apps details:

```json
{
  "mcpServers": {
    "onlyoffice-apps": {
      "command": "docker",
      "args": [
        "run",
        "--interactive",
        "--rm",
        "--env", "DOCSPACE_BASE_URL",
        "--env", "DOCSPACE_API_KEY",
        "onlyoffice/docspace-mcp"
      ],
      "env": {
        "DOCSPACE_BASE_URL": "https://your-instance.onlyoffice.com",
        "DOCSPACE_API_KEY": "your-api-key"
      }
    }
  }
}
```

### Configuration parameters

- **DOCSPACE_BASE_URL**: The full URL to your ONLYOFFICE Apps instance (e.g., `https://your-company.onlyoffice.com`)
- **DOCSPACE_API_KEY**: Your ONLYOFFICE Apps API key obtained from the Developer Tools section

![Add ONLYOFFICE Apps server configuration](/assets/images/desktop/step2.png#gh-light-mode-only)![Add ONLYOFFICE Apps server configuration](/assets/images/desktop/step2.dark.png#gh-dark-mode-only)

### Step 3: Save and verify

1. Click **Save**. The server starts automatically and appears in the **Permissions** section
2. Make sure the **onlyoffice-apps** toggle is on
3. To enable or disable individual tools, expand the server entry and use the toggles next to them

You can now use the ONLYOFFICE Apps tools in **AI Chat**.

![Save and verify](/assets/images/desktop/step3.png#gh-light-mode-only)![Save and verify](/assets/images/desktop/step3.dark.png#gh-dark-mode-only)

## Available tools

Once connected, the ONLYOFFICE Apps MCP server provides various tools for document management operations:

- **File operations**: List, read, create, update, and delete files
- **Folder management**: Navigate folder structure, create and manage folders
- **Search**: Find documents and folders in ONLYOFFICE Apps
- **Sharing**: Manage document sharing and permissions
- **Metadata**: Access and modify document properties

## Usage examples

After connecting the ONLYOFFICE Apps MCP server, you can use natural language commands in AI Chat:

- "List all documents in the shared folder"
- "Create a new folder called 'Q1 Reports' in ONLYOFFICE Apps"
- "Find all presentations modified last week"
- "Share the document 'Budget 2026.xlsx' with john@example.com"
- "Show me the contents of the Marketing folder"

AI Chat will automatically use the ONLYOFFICE Apps MCP tools to execute these commands and display the results.

## Troubleshooting

### Server fails to start

- Verify that Docker is installed and running: `docker --version`
- Check Docker daemon status
- Ensure the Docker image is available: `docker pull onlyoffice/docspace-mcp`

### Authentication errors

- Verify your API key is correct and has not expired
- Check that the ONLYOFFICE Apps instance URL is accessible from your machine
- Ensure the API key has appropriate permissions for the operations you're attempting

### Connection timeout

- Verify your ONLYOFFICE Apps instance is online and accessible
- Check firewall settings that might block the connection
- Ensure your network allows connections to the ONLYOFFICE Apps URL

### Tools not appearing

- Restart ONLYOFFICE Desktop Editors after saving the configuration
- Check that there is no error icon next to the server in the **Permissions** section. Expand the server entry to see the connection log
- Review Docker logs: `docker logs <container-id>`

## Notes

- The ONLYOFFICE Apps MCP server is currently in preview and may undergo changes
- All operations are performed using your API key's permissions
- Network connectivity to your ONLYOFFICE Apps instance is required
- The server runs locally in a Docker container and does not store credentials
- Multiple ONLYOFFICE Apps instances can be configured with different server names

## Additional resources

For more information about the ONLYOFFICE Apps MCP server:

- [ONLYOFFICE Apps API Documentation](/docspace)
- [Model Context Protocol Specification](https://modelcontextprotocol.io)
- [ONLYOFFICE Blog: Connect DocSpace MCP Server to Desktop Editors](https://www.onlyoffice.com/blog/2025/12/connect-onlyoffice-docspace-mcp-server-to-desktop-editors?from=api)
