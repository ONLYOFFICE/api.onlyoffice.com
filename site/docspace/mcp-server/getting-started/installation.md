---
sidebar_label: Installation
sidebar_position: 2
title: Installing the DocSpace MCP server
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Before interacting and building with the DocSpace MCP server, you need to access this server. DocSpace offers two ways to do this:

- [Access server via a local machine](#installing-on-your-local-machine)
- [Access via a remote server](#accessing-via-a-remote-server)

This page provides a step by step approach to installing the MCP server using these methods.

## Before you start

- Ensure you have a DocSpace Instance. [Sign up to DocSpace](https://www.onlyoffice.com/docspace-registration?utm_source=api&utm_medium=article&utm_campaign=mcpserver) to access your instance and get an API key
- Choose your desired client. You can build a custom client or [choose from the different MCP clients](clients.md) available based on your integration, features, user interface, or security needs. 

<Tabs>
  <TabItem value="local machine" label="Install on local machine" default>
    
You can configure your local machine to interact with the DocSpace MCP server using:

- [Docker image](#install-with-docker-image)
- [Docker MCP toolkit](#install-with-docker-mcp-server)
- [MCP bundle](#install-with-mcp-bundle)
- [Node.js application](#install-via-nodejs-application)

Before proceeding, ensure to set these environment variables:

- `DOCSPACE_BASE_URL` - the URL of your DocSpace instance (e.g. https://portal.onlyoffice.com).
- `DOCSPACE_API_KEY` - your personal API key generated in DocSpace settings -> **Developer Tools** -> **API keys.**

## Install with Docker image

1. Locate your client `.json` config file. The location of this file depends on the specific client.

2. Add the DocSpace MCP Server entry

Insert the following block into the `mcpServers` section of your `.json` configuration file:

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

**Configuration options**

| Option | Description |
|--------|-------------|
| `docker` | The executable to run |
| `run` | Command to create and start a container |
| `rmv` | Automatically remove the container when it exits|
| `env` | Flag to pass environment variables 
| `onlyoffice/docspace-mcp` | Docker image name to run|

## Install with Docker MCP Server

Using the [Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) requires [Docker Desktop](https://docs.docker.com/desktop/) to be installed on your
system and the Docker MCP Toolkit to be enabled. 

:::note
The Docker MCP toolkit is currently a beta feature and is only available to specific user segments, subscription tiers, or by invitation
:::

1. Install the server through the Docker Desktop interface using the
   [Install an MCP Server] guide.

2. Connect the server to an MCP client through the Docker Desktop interface using
   the [Install an MCP Client] guide.

3. Configure the server through the Docker Desktop interface. In general:

    - Select the DocSpace MCP server in Docker Desktop
    - Open the server's configuration or settings panel
    - Enter your DocSpace base URL (e.g., `https://your-instance.onlyoffice.com`)
    - Enter your personal API key
    - Save the configuration

## Install with MCP Bundle

Running the MCP bundle requires [Node.js] version 18 or higher to be installed
on your system.

1. Download the latest MCP bundle from [GitHub Releases] (typically named `docspace-mcp-bundle-x.x.x.zip` or similar).

2. Install the MCP bundle in an application by following the application's MCP
   bundles installation procedure.

3. Configure the server through the application's interface. In general:

    - Open the server settings within your application
    - Enter your DocSpace base URL (e.g., `https://your-instance.onlyoffice.com`)
    - Enter your personal API key 
    - Save the configuration and restart the application if required

## Install via Node.js Application

:::note
Running the Node.js application requires [Node.js] version 18 or higher to be
installed on your system.
:::

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

</TabItem>
<TabItem value="remote server" label="Access via remote server">

Another way to use the DocSpace MCP server is to access it via a public DocSpace MCP Server instance hosted by ONLYOFFICE. This eliminates the need to run your own server infrastructure while providing access to DocSpace functionality through your AI assistant. To do this, provide the DocSpace MCP server public instance URL when [connecting to any of the MCP clients](clients.md). 

## Public Instance

The public instance is available at two endpoints:

| **Endpoint**                   | **Transport**             | **Recommendation**                                                                                                         |
|--------------------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------|
| https://mcp.onlyoffice.com/mcp | HTTP                      | Preferred - Use this endpoint whenever your client supports it. Streamable HTTP offers better performance and reliability. |
| https://mcp.onlyoffice.com/sse | Server Side Events. (SSE) | Legacy - Use this endpoint only if your client does not support the modern Streamable HTTP transport.                      |

The public instance provides access to all available tools by default. Tool selection can be customized using query parameters or custom headers. However, we recommend using the MCP client interface for tool configuration when supported.

## Tool Configuration

The public instance provides access to all available DocSpace tools by default. Tool selection can be customized using the following options:

- **MCP Client Interface**:  (Preferred) Most MCP clients provide a built-in interface for enabling or disabling specific tools. Use this method when your client supports it.

- **Query Parameters or Custom Headers**: For clients without a tool configuration interface, you can customize tool availability by passing parameters in the connection URL or via custom HTTP headers.

## Authenticating the remote mcp server-client connection

The public instance supports multiple authentication methods to meet different security requirements and client capabilities: OAuth, API key, Personal Access Token (PAT), username/password pair, or raw `Authorization` header.

:::note
OAuth is the recommended method as it provides the strongest security model by allowing users to authorize specific permissions without sharing their credentials directly.
:::

| **Authentication method**      | **Definition**                                                                  | **Requirements**                         | **Example**                      | **Recommendations**                                                                                                                   |
|--------------------------------|---------------------------------------------------------------------------------|------------------------------------------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| OAuth (public app)             | Authenticates the connection without requiring custom credentials               | Connection URL                           | [See ChatGPT connection](clients.md#connect-to-chatgpt) | Simplest and most secure method, requiring no custom credentials or additional configuration                                          |
| OAuth (custom app)             | Connects using a client ID and client secret after creating a [custom app]()    | Connection URL, Client ID, Client Secret | [See Claude Desktop connection](clients.md#connect-to-claude-desktop)    | Offers more flexibility and full control over the OAuth configuration, including custom redirect URIs, specific scopes, and branding. |
| API Key (Header)               | Connect using an API key and base URL configured via custom headers             | Connection URL, API key                  | [See Le chat connection](clients.md#connect-to-le-chat)        | Ideal when integrating with platforms that support custom HTTP headers but don't have built-in OAuth support                          |
| API Key (Authorization header) | Connect using API key in `Authorization` header and base URL in query parameter | Connection URL, API key                  | [See Le chat connection](clients.md#connect-to-le-chat)       | Ideal when working with clients that support Bearer token authentication but don't allow custom headers                                          |
| Username & password in URL     | Connect using URL-encoded credentials and base URL in query parameter           | Connection URL, username, password       | [See Claude web connection](clients.md#connect-to-claude-web)    | Ideal for quick setup, testing, or when using clients with limited authentication options                                             |


  </TabItem>
</Tabs>

## After Installation

- [Test MCP server-client installation](quickstart.md#step-2-confirm-the-connection)
- [Start exploring with the MCP server by creating a new room](quickstart.md#step-3-interact-with-your-docspace-using-newly-connected-client)