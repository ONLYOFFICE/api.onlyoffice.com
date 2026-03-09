---
sidebar_label: Configuring clients
sidebar_position: 4
title: Connect DocSpace MCP server to MCP clients
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The DocSpace MCP server allows you to connect numerous mcp clients, offering flexibility to choose between interfaces when interacting with your DocSpace. This guide demonstrates how to connect the DocSpace MCP server to the following clients:

- [ONLYOFFICE Desktop editors](#connect-to-local-docspace-mcp-server)
- [Claude-desktop](#connect-to-claude-desktop)
- [Claude-web](#connect-to-claude-web)
- [Cursor](#connect-to-cursor)
- [Le Chat](#connect-to-le-chat)
- [VSCode](#connect-to-vscode)
- [Windsurf](#connect-to-windsurf)

## Before you start

- Ensure [Docker](https://www.docker.com/) is installed on your system.
- Take note of these environment variables for configuring your local DocSpace server:

    - `DOCSPACE_BASE_URL` — the URL of your DocSpace instance (e.g., `https://portal.onlyoffice.com`).
    - `DOCSPACE_API_KEY` — your personal API key generated in DocSpace settings → **Developer Tools** → **API Keys**.

    **Ensure your API key is valid.** 

## Client configuration

Follow the steps to connect to your client of choice

<Tabs groupId="mcp-clients" queryString="client">
<TabItem value="Desktop editors" label="ONLYOFFICE desktop editors" default>

## Connect to local DocSpace MCP Server

Connect to the locally running MCP server using stdio transport.

1. Open ONLYOFFICE Desktop Editors.
2. Navigate to **AI agent**.
3. Navigate to **Settings**.
4. Navigate to **MCP Servers**.
5. Click **Edit configuration**.
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

7. Click **Save**.

</TabItem>
<TabItem value="claude-desktop" label="Claude Desktop" default>

## Connect to Claude Desktop

Claude desktop offers three different ways to connect to the DocSpace MCP server:

- [Connectors](#connect-via-connectors)
- [Extensions](#connect-via-extensions)
- [Local MCP servers](#connect-via-local-mcp)

### Connect via connectors

Connect to the MCP server running remotely using Claude's Connectors. This is the preferred connection method.

1. Open Claude Desktop.
2. Navigate to Settings.
3. Navigate to Connectors.
4. Click "Add custom connector".
5. Enter a name for the connector (e.g., "ONLYOFFICE DocSpace MCP").
6. Enter the connection URL (e.g., https://mcp.onlyoffice.com/mcp).
7. Click "Advanced settings".
8. In the "OAuth Client ID" field, enter the Client ID from your [DocSpace OAuth application](https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/oauth2/creating-oauth-app/).
9. In the "OAuth Client Secret" field, enter the Client Secret from your DocSpace OAuth application.
10. Click "Add".
11. Click "Connect" next to the newly added connector.
12. Complete the OAuth authentication process:
    - Sign in to your DocSpace account by entering your email and password and clicking "Sign In".
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.

### Connect via extensions

Connect to the locally running MCP server using Claude's Extensions. Before connecting, ensure to have:

- Node.js (v18 or higher)
- Download the Github MCP bundle. Follow [these steps](./distribution/github-releases.md) to install Node and the Github release.

1. Open Claude Desktop;
2. Navigate to Settings;
3. Navigate to Extensions;
4. Click "Advanced settings";
5. Click "Install extension";
6. Select the downloaded MCP bundle;
7. Click "Install".

### Connect via Local MCP

Connect to the locally running MCP server using Claude's Local MCP servers.

1. Open Claude Desktop;
2. Navigate to Settings;
3. Navigate to Developer;
4. Click "Edit config";
5. Open the configuration file in a text editor;
6. Add a new record to the `mcpServers` section:
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
7. Save the file.

</TabItem>
<TabItem value="claude-web" label="Claude web" default>

## Connect to Claude web

1.  Open Claude Web in your web browser.
2. Navigate to Settings.
3. Navigate to Connectors.
4. Click "Add custom connector".
5. Enter a name for the connector (e.g., "ONLYOFFICE DocSpace MCP").
6. Enter the connection URL with your encoded credentials:
   `https://{encoded_username}:{encoded_password}@mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com/`
   - Replace `{encoded_username}` with your URL-encoded DocSpace email
   - Replace `{encoded_password}` with your URL-encoded DocSpace password
   - Replace `your-instance.onlyoffice.com` with your actual DocSpace domain
7. Click "Add".

</TabItem>
<TabItem value="cursor" label="Cursor" default>

## Connect to Cursor

Cursor allows you connect to the DocSpace mcp server either via:

- (Recommended) [HTTP](#connect-via-http) 
- [Command](#command)

### Connect via HTTP to remote DocSpace MCP server

Connect to the MCP server running remotely using Streamable-HTTP transport

1. Open Cursor;
2. Bring up Command Palette;
3. Select **View: Open MCP Settings**;
4. Click **Add Custom MCP**;
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
7. Navigate back to **MCP Settings**;
8. Click **Connect** next to the newly added MCP server;
9. Complete the OAuth authentication process.
    - Sign in to your DocSpace account by entering your email and password and clicking **Sign In**.
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.
    
### Connect via command to local DocSpace MCP server

Connect to the locally running MCP server using stdio transport.

1. Open Cursor;
2. Bring up Command Palette;
3. Select **View: Open MCP Settings**;
4. Click **Add Custom MCP**;
5. Add a new record to the `mcpServers` section:
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
6. Enter the values of the `DOCSPACE_BASE_URL` and `DOCSPACE_API_KEY` environment variables. 
7. Save the file.

</TabItem>
<TabItem value="Le Chat" label="Le Chat" default>

## Connect to Le Chat

1. Open Le Chat  in your web browser.
2. Navigate to Intelligence.
3. Navigate to Connectors.
4. Click **Add Connector**.
5. Navigate to Custom MCP Connector.
6. Enter a name for the connector (e.g., "ONLYOFFICE_DocSpace_MCP").
7. Enter the server URL based on your authenticating method:
    - **OAuth**: `https://mcp.onlyoffice.com/mcp` 
    - **API Token Authentication**: server URL with your DocSpace instance as a query parameter:
   `https://mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com`
   (replace the base_url value with your actual DocSpace URL).
8. Authenticate the connection with any of these auth methods 
    - **OAuth**: 
        - Select **OAuth 2.1** from **Authentication method**. 
        - Enter your **Client ID** and **Client Secret** gotten from [creating your custom app on DocSpace](https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/oauth2/creating-oauth-app/)
    - **API Token**: 
        - Select "API Token Authentication" from "Authentication Methods" section and 
        - In the "Header value" field, enter your personal API key generated in DocSpace settings -> Developer Tools -> API keys.
9. Click **Connect**.
10. Confirm connection by enabling the Docspace MCP server in the **Enable tools** section of the chat bar. 

</TabItem>
<TabItem value="vscode" label="VSCode" default>

## Connect to VSCode

VSCode client also connects to DocSpace MCP server using:

- [HTTP](#http)
- [Command](#command)

### Connect via HTTP to remote DocSpace MCP server

This is the preferred connection method and connects to the remote MCP server using Streamable-HTTP transport. 

1. Open Visual Studio Code;
2. Bring up Command Palette;
3. Select **MCP: Open User Configuration**;
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
7. Select **MCP: List Servers**;
8. Select **onlyoffice-docspace**;
9. Select **Start Server**;
10. Complete the OAuth authentication process.
    - Sign in to your DocSpace account by entering your email and password and clicking **Sign In**.
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.

### Connect via command to local DocSpace MCP server

Connect to the locally running MCP server using stdio transport.

1. Open Visual Studio Code;
2. Bring up Command Palette;
3. Select **MCP: Open User Configuration**;
4. Add a new record to the `servers` section:
   ```json
   {
    "servers": {
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
5. Save the file;
6. Bring up Command Palette;
7. Select **MCP: List Servers**;
8. Select **onlyoffice-docspace**;
9. Select **Start Server**.

</TabItem>
<TabItem value="Windsurf" label="Windsurf" default>

## Connect to Windsurf

Windsurf offers two ways to connect to the DocSpace MCP server:

- [HTTP](#http)
- [Command](#command)

### Connect via HTTP to remote DocSpace MCP server

This is the recommended method and connects to the remote MCP server using Streamable-HTTP transport.

1. Open Windsurf;
2. Bring up Command Palette;
3. Select **Open Windsurf User Settings**;
4. Navigate to **Cascade**;
5. Click **Open MCP Marketplace**;
6. Click **Settings**;
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
9. Complete the OAuth authentication process.
    - Sign in to your DocSpace account by entering your email and password and clicking **Sign In**.
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.

### Connect via command to local DocSpace MCP server

This method uses stdio transport to connect to a local running MCP server.

1. Open Windsurf;
2. Bring up Command Palette;
3. Select **Open Windsurf User Settings**;
4. Navigate to **Cascade**;
5. Click **Open MCP Marketplace**;
6. Click **Settings**;
7. Add a new record to the `mcpServers` section:
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
8. Save the file.
9. Open **Cascade**. 
10. Click **Actions(...)**. You'll find **onlyoffice-docspace** under MCP section if connection was successful. Toggle to enable the connection. 

</TabItem>
</Tabs>