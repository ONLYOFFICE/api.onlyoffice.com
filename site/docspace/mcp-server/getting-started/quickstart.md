---
sidebar_label: Quickstart
sidebar_position: 1
title: Getting started with the DocSpace MCP server
---

import ThemedImage from '@theme/ThemedImage';

This guide will demonstrate how the [DocSpace MCP server](index.md) works with mcp clients like Claude desktop, and how to establish this connection to enable seamless exchange of information between ONLYOFFICE DocSpace and AI models.

This guide will help you achieve the following:

- [Connect Claude Desktop to the DocSpace MCP server](#step-1-connect-to-an-mcp-client)
- [Confirm the mcp server-client connection](#step-2-confirm-the-connection) 
- [Interact with DocSpace using the MCP client](#step-2-interact-with-your-docspace-using-newly-connected-client)

### Step 1: Connect to MCP client 

[MCP clients](clients.md) like ChatGPT, Claude, VSCode, and Windsurf act as a bridge to the DocSpace MCP server, enabling LLMs to access and use DocSpace tools, thus improving the overall capabilities of DocSpace. This guide uses the Claude Desktop client and [connects to a local mcp server](installation.md#install-with-docker-image). You can also [access via a remote server](installation.md#public-instance). 

:::note
Ensure Docker is installed on your system.
:::

To connect Claude Desktop to your local mcp server:

1. Open Claude Desktop;
2. Navigate to **Settings**
3. Navigate to **Developer**
4. Click **Edit config**
5. Open the configuration file in a text editor
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

WHERE: 
- `DOCSPACE_BASE_URL` - the URL of your DocSpace instance (e.g. https://portal.onlyoffice.com).
- `DOCSPACE_API_KEY` - your personal API key generated in DocSpace **Settings** -> **Developer Tools** -> **API keys**.

7. Save the file and close Claude Desktop.

### Step 2: Confirm the connection

1. Reopen Claude Desktop
2. Click **+** > **Connectors** on the chat bar

    Our newly configured mcp server (**onlyoffice-docspace**) is now enabled. 

<ThemedImage
  alt="This image confirms a successful client-DocSpace mcp server connection"
  sources={{
    light: require('../../../../static/img/confirm-connection.light.png').default,
    dark: require('../../../../static/img/confirm-connection.dark.png').default,
  }}
  style={{display: 'block', margin: '0 auto', width: '600px'}}
/>

### Step 3: Interact with your DocSpace using newly connected client

Now we have our connection, let us interact with DocSpace via Claude:

1. Lets create a new room. Claude requests for permission to create this room.

<ThemedImage
  alt="This image confirms a successful client-DocSpace mcp server connection"
  sources={{
    light: require('../../../../static/img/create-new-room.light.png').default,
    dark: require('../../../../static/img/create-new-room.dark.png').default,
  }}
  style={{display: 'block', margin: '0 auto', width: '600px'}}
/>
  
    You can confirm this new room in your DocSpace account

<ThemedImage
  alt="This image confirms a successful client-DocSpace mcp server connection"
  sources={{
    light: require('../../../../static/img/confirm-room-on-docspace.light.png').default,
    dark: require('../../../../static/img/confirm-room-on-docspace.dark.png').default,
  }}
  style={{display: 'block', margin: '0 auto', width: '600px'}}
/>

2. Now, create a new document in this room

<ThemedImage
  alt="This image confirms a successful client-DocSpace mcp server connection"
  sources={{
    light: require('../../../../static/img/create-new-doc.light.png').default,
    dark: require('../../../../static/img/create-new-doc.dark.png').default,
  }}
  style={{display: 'block', margin: '0 auto', width: '600px'}}
/>

       Confirm the new doc was created

<ThemedImage
  alt="This image confirms a successful client-DocSpace mcp server connection"
  sources={{
    light: require('../../../../static/img/confirm-new-doc.light.png').default,
    dark: require('../../../../static/img/confirm-new-doc.dark.png').default,
  }}
  style={{display: 'block', margin: '0 auto', width: '600px'}}
/>

      You can confirm the existence of this new doc in the new room in your DocSpace
  
<ThemedImage
  alt="This image confirms a successful client-DocSpace mcp server connection"
  sources={{
    light: require('../../../../static/img/confirm-new-doc-in-new-room.light.png').default,
    dark: require('../../../../static/img/confirm-new-doc-in-new-room.dark.png').default,
  }}
  style={{display: 'block', margin: '0 auto', width: '600px'}}
/>  

## Next steps

- [Discover other ways to connect to DocSpace MCP server](installation.md)
- [Learn how to connect other mcp clients to our DocSpace MCP server](clients.md)
