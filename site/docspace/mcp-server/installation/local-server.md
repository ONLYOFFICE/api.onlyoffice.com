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

## Docker MCP Server

Using the Docker MCP Toolkit requires [Docker Desktop] to be installed on your
system and the [Docker MCP Toolkit] to be enabled. See the
[Enable Docker MCP Toolkit] guide for how to enable the Docker MCP Toolkit.

1. Install the server through the Docker Desktop interface using the
   [Install an MCP Server] guide.

2. Connect the server to a MCP client through the Docker Desktop interface using
   the [Install an MCP Client] guide.

3. Configure the server through the Docker Desktop interface.

## MCP Bundle

Running the MCP bundle requires [Node.js] version 18 or higher to be installed
on your system.

1. Download the latest MCP bundle from [GitHub Releases].

2. Install the MCP bundle in an application by following the application's MCP
   bundles installation procedure.

3. Configure the server through the application's interface.

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

<!-- Definitions -->

[Docker]: https://www.docker.com/
[Docker Desktop]: https://www.docker.com/products/docker-desktop/
[Docker MCP Toolkit]: https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/
[GitHub Releases]: https://github.com/ONLYOFFICE/docspace-mcp/releases/
[Node.js]: https://nodejs.org/

[Enable Docker MCP Toolkit]: https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#enable-docker-mcp-toolkit
[Install an MCP Server]: https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#install-an-mcp-server
[Install an MCP Client]: https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#install-an-mcp-client