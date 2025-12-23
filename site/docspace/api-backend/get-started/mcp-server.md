---
sidebar_position: -1
---

# MCP Server

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is a standardized protocol for managing context between large language models (LLMs) and external systems. An MCP server for ONLYOFFICE DocSpace can be found in this [repository](https://github.com/ONLYOFFICE/docspace-mcp).

The DocSpace MCP Server connects AI tools directly to ONLYOFFICE DocSpace. This gives AI agents, assistants, and chatbots the ability to manage rooms, collaborate on files, handle permissions, and automate document workflows - all through natural language interactions.

## Features

- **Tools with granular control** - Access to tools organized into logical
  toolsets with fine-grained enable/disable capabilities and meta tools.
- **Multiple transport protocols** - Support for stdio, SSE, and Streamable HTTP
  transports.
- **Different authentication methods** - Supports OAuth, API keys, Personal
  Access Tokens, and Basic authentication.
- **Request-level configuration** - Configure authentication and tool selection
  during session initialization using custom HTTP headers.
- **Various distribution formats** - Available as Docker image, Docker MCP
  Server, MCP bundle, and Node.js application.

## Use Cases

- **Room Management**: Create, update, and archive rooms. Configure room types, manage membership, and control access levels.
- **Folder & File Operations**: Create folders, upload documents, copy or move items in batches, rename or delete content, and check file or folder details.
- **Collaboration & Permissions**: Invite or remove users, adjust security settings, and review current access rights for rooms and shared spaces.
- **Content Access**: Retrieve "My documents" or "Rooms" folders, get folder contents, download files as text, and monitor ongoing file operations.
- **People Directory**: List all people in the portal to streamline invitations and access management.

## Installation

You can connect to the DocSpace MCP server using any MCP clients. We have covered some popular clients, such as Claude Desktop, Cursor, Windsurf, etc., and [here](https://github.com/ONLYOFFICE/docspace-mcp/blob/main/docs/clients/README.md) you can read about it.

### Remote DocSpace MCP Server

The remote DocSpace MCP Server is hosted by ONLYOFFICE and provides the fastest way to start using DocSpace tools inside your AI agent. You can connect to it instantly without deploying or configuring anything on your machine.

The public instance is available at https://mcp.onlyoffice.com/mcp for clients
that support modern Streamable HTTP transport and at
https://mcp.onlyoffice.com/sse for clients that support only the legacy SSE
transport. It is preferable to use the Streamable HTTP transport whenever possible.

See all options for connecting clients to the Remote DocSpace MCP Server [here](https://github.com/ONLYOFFICE/docspace-mcp/blob/main/docs/installation/remote-server.md).

### Local DocSpace MCP Server

If your MCP host does not support remote MCP servers, you can run the [local version](https://github.com/ONLYOFFICE/docspace-mcp/blob/main/docs/installation/local-server.md) of the DocSpace MCP Server instead.

Most clients that implement the MCP protocol have a common configuration file in the `JSON` format, inside which you can add the ONLYOFFICE DocSpace MCP Local Server.

**Note**: The common example below is applicable for Docker image, so Docker must be installed on your system.

#### Step 1. Locate your config file

Find your client `.json` configuration file.

#### Step 2. Add the DocSpace MCP Server entry

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

#### Step 3. Set environment values

- `DOCSPACE_BASE_URL` - the URL of your DocSpace instance (e.g. https://portal.onlyoffice.com).
- `DOCSPACE_API_KEY` - your personal API key generated in DocSpace settings -> Developer Tools -> API keys.

#### Step 4. Restart the client

Close and reopen your client. In most cases, the DocSpace MCP Server will start automatically, and you'll be able to issue natural language commands like:

- Create a new project room and invite Anna with editor rights.
- Upload this file to "My documents".

For a more detailed example of the MCP server installation process, see how it can be done using [Claude Desktop](https://modelcontextprotocol.io/quickstart/user#for-claude-desktop-users).

## Configuration

The only way to configure the ONLYOFFICE DocSpace MCP server is through environment variables. Below is a table with the names of available environment variables and their descriptions. They are used to configure the behavior for API requests.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name                  | Description                                                                                                                                                                                                                       |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `DOCSPACE_USER_AGENT` | The user agent to use for requests. This option is not required but can be used to specify the `User-Agent` header in requests to DocSpace.                                                                                |
| `DOCSPACE_BASE_URL`   | The base URL of the DocSpace instance for API requests. This option is required if either `DOCSPACE_AUTHORIZATION`, `DOCSPACE_API_KEY`, `DOCSPACE_AUTH_TOKEN`, or the `DOCSPACE_USERNAME`/`DOCSPACE_PASSWORD` pair is set.                                                                                                                       |
| `DOCSPACE_AUTHORIZATION`     | The raw value to include in the `Authorization` header for API requests.  This option is required if neither `DOCSPACE_API_KEY`, `DOCSPACE_AUTH_TOKEN`, nor the `DOCSPACE_USERNAME`/`DOCSPACE_PASSWORD` pair is set. |
| `DOCSPACE_API_KEY`    | The API key for accessing the DocSpace API. This option is required if neither `DOCSPACE_AUTHORIZATION`, `DOCSPACE_AUTH_TOKEN`, nor the `DOCSPACE_USERNAME`/`DOCSPACE_PASSWORD` pair is set. |
| `DOCSPACE_AUTH_TOKEN` | The Personal Access Token (PAT) for accessing the DocSpace API. This option is required if neither `DOCSPACE_AUTHORIZATION`, `DOCSPACE_API_KEY`, nor the `DOCSPACE_USERNAME`/`DOCSPACE_PASSWORD` pair is set.  |
| `DOCSPACE_USERNAME`   | The username for accessing the DocSpace API using basic authentication. This is used in conjunction with `DOCSPACE_PASSWORD`. This option is required if neither `DOCSPACE_AUTHORIZATION`, `DOCSPACE_API_KEY` nor `DOCSPACE_AUTH_TOKEN` is provided. |
| `DOCSPACE_PASSWORD`   | The password for accessing the DocSpace API using basic authentication. This is used in conjunction with `DOCSPACE_USERNAME`. This option is required if neither `DOCSPACE_AUTHORIZATION`, `DOCSPACE_API_KEY` nor `DOCSPACE_AUTH_TOKEN` is provided. |
| `DOCSPACE_OAUTH_BASE_URL`   | The base URL of the DocSpace OAuth service for OAuth requests.                                                                                                                       |
| `DOCSPACE_OAUTH_CLIENT_ID`   | The client ID of the OAuth application. This is used in conjunction with `DOCSPACE_OAUTH_CLIENT_SECRET`.                                                                                                                       |
| `DOCSPACE_OAUTH_CLIENT_SECRET`   | The client secret of the OAuth application. This is used in conjunction with `DOCSPACE_OAUTH_CLIENT_ID`.                                                                                                                       |

```mdx-code-block
</APITable>
```

All available configuration parameters are listed [here](https://github.com/ONLYOFFICE/docspace-mcp/blob/main/docs/configuration/global-configuration.md).

## Usage

Model Context Protocol describes several different concepts, however the ONLYOFFICE DocSpace MCP server implements [Tools](https://modelcontextprotocol.io/docs/concepts/tools) only.

### Tools

Below are tables with the names of available tools and their descriptions:

#### Files

```mdx-code-block
<APITable>
```

| Name                    | Description              |
|-------------------------|--------------------------|
| `copy_batch_items`      | Copy to a folder.        |
| `delete_file`           | Delete a file.           |
| `download_file_as_text` | Download a file as text. |
| `get_file_info`         | Get file information.    |
| `move_batch_items`      | Move to a folder.        |
| `update_file`           | Update a file.           |
| `upload_file`           | Upload a file.           |

```mdx-code-block
</APITable>
```

#### Folders

```mdx-code-block
<APITable>
```

| Name                 | Description                    |
|----------------------|--------------------------------|
| `create_folder`      | Create a folder.               |
| `delete_folder`      | Delete a folder.               |
| `get_folder_content` | Get content of a folder.       |
| `get_folder_info`    | Get folder information.        |
| `get_my_folder`      | Get the "My Documents" folder. |
| `rename_folder`      | Rename a folder.               |

```mdx-code-block
</APITable>
```

#### People

```mdx-code-block
<APITable>
```

| Name             | Description     |
|------------------|-----------------|
| `get_all_people` | Get all people. |

```mdx-code-block
</APITable>
```

#### Rooms

```mdx-code-block
<APITable>
```

| Name                     | Description                                             |
|--------------------------|---------------------------------------------------------|
| `archive_room`           | Archive a room.                                         |
| `create_room`            | Create a room.                                          |
| `get_room_access_levels` | Get a list of available room invitation access levels.  |
| `get_room_info`          | Get room information.                                   |
| `get_room_security_info` | Get a list of users with their access levels to a room. |
| `get_room_types`         | Get a list of available room types.                     |
| `get_rooms_folder`       | Get the "Rooms" folder.                                 |
| `set_room_security`      | Invite or remove users from a room.                     |
| `update_room`            | Update a room.                                          |

```mdx-code-block
</APITable>
```
