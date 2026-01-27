---
sidebar_position: -1
---

# Local Server

This instruction describes how to connect to the DocSpace MCP server running on
your local machine.

## Docker Image

Using the Docker image requires [Docker] to be installed on your system.

Configure your MCP client to use the Docker image by adding the following
configuration to your client's configuration file:

```json
{
	"mcpServers": {
		"onlyoffice-docspace": {
			"command": "docker",
			"args": [
				"run",
				"--interactive",
				"--rm",
				"--env",
				"DOCSPACE_BASE_URL",
				"--env",
				"DOCSPACE_API_KEY",
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


**Configuration options**

| Option | Description |
|--------|-------------|
| `--interactive` | Keeps STDIN open, allowing the MCP client to communicate with the server |
| `--rm` | Automatically removes the container when it exits, preventing container accumulation |
| `--env DOCSPACE_BASE_URL` | Passes your DocSpace instance URL to the container |
| `--env DOCSPACE_API_KEY` | Passes your API key to the container for authentication |
| `onlyoffice/docspace-mcp` | The official DocSpace MCP server image from Docker Hub |

**Environment variables**

| Variable | Description |
|----------|-------------|
| `DOCSPACE_BASE_URL` | The full URL of your DocSpace instance (e.g., `https://your-instance.onlyoffice.com`) |
| `DOCSPACE_API_KEY` | Your personal API key generated in DocSpace settings -> Developer Tools -> API keys |

For example, you can see step-by-step instructions for [Claude Desktop](/docspace/mcp-server/connecting-clients/claude-desktop/#local-mcp).

## Docker MCP Server

Using the Docker MCP Toolkit requires [Docker Desktop] to be installed on your
system and the [Docker MCP Toolkit] to be enabled. See the
[Enable Docker MCP Toolkit] guide for how to enable the Docker MCP Toolkit.

1. Install the server through the Docker Desktop interface using the
   [Install an MCP Server] guide.

2. Connect the server to an MCP client through the Docker Desktop interface using
   the [Install an MCP Client] guide.

3. Configure the server through the Docker Desktop interface. In general:

    - Select the DocSpace MCP server in Docker Desktop
    - Open the server's configuration or settings panel
    - Enter your DocSpace base URL (e.g., `https://your-instance.onlyoffice.com`)
    - Enter your personal API key generated in DocSpace settings -> Developer Tools -> API keys
    - Save the configuration

## MCP Bundle

Running the MCP bundle requires [Node.js] version 18 or higher to be installed
on your system.

1. Download the latest MCP bundle from [GitHub Releases] (typically named `docspace-mcp-bundle-x.x.x.zip` or similar).

2. Install the MCP bundle in an application by following the application's MCP
   bundles installation procedure.

3. Configure the server through the application's interface. In general:

    - Open the server settings within your application
    - Enter your DocSpace base URL (e.g., `https://your-instance.onlyoffice.com`)
    - Enter your personal API key generated in DocSpace settings -> Developer Tools -> API keys
    - Save the configuration and restart the application if required

For example, you can see step-by-step instructions for [Claude Desktop](/docspace/mcp-server/connecting-clients/claude-desktop/#extension).

## Node.js Application

Running the Node.js application requires [Node.js] version 18 or higher to be
installed on your system.

Configure your MCP client to use the Node.js application by adding the following
configuration to your client's configuration file:

```json
{
	"mcpServers": {
		"onlyoffice-docspace": {
			"command": "npx",
			"args": ["--yes", "@onlyoffice/docspace-mcp"],
			"env": {
				"DOCSPACE_BASE_URL": "https://your-instance.onlyoffice.com",
				"DOCSPACE_API_KEY": "your-api-key"
			}
		}
	}
}
```

**Configuration options**

| Option | Description |
|--------|-------------|
| `npx` | The Node.js package runner, which downloads and executes packages on demand |
| `--yes` | Automatically confirms the installation prompt, enabling unattended startup |
| `@onlyoffice/docspace-mcp` | The official DocSpace MCP server package from npm |

**Environment variables**

| Variable | Description |
|----------|-------------|
| `DOCSPACE_BASE_URL` | The full URL of your DocSpace instance (e.g., `https://your-instance.onlyoffice.com`) |
| `DOCSPACE_API_KEY` | Your personal API key generated in DocSpace settings -> Developer Tools -> API keys|

<!-- Definitions -->

[Docker]: https://www.docker.com/
[Docker Desktop]: https://www.docker.com/products/docker-desktop/
[Docker MCP Toolkit]: https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/
[GitHub Releases]: https://github.com/ONLYOFFICE/docspace-mcp/releases/
[Node.js]: https://nodejs.org/

[Enable Docker MCP Toolkit]: https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#enable-docker-mcp-toolkit
[Install an MCP Server]: https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#install-an-mcp-server
[Install an MCP Client]: https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#install-an-mcp-client