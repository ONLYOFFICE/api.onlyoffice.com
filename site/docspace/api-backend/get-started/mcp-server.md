---
sidebar_position: -1
---

# MCP Server

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is a standardized protocol for managing context between large language models (LLMs) and external systems. An MCP server for ONLYOFFICE DocSpace can be found in this [repository](https://github.com/ONLYOFFICE/docspace-mcp).

## Installation

Most clients that implement the MCP protocol have a common configuration file in JSON format, inside which you can add the ONLYOFFICE DocSpace MCP server as follows:

```json
{
    "mcpServers": {
        "onlyoffice-docspace": {
            "env": {
                "DOCSPACE_BASE_URL": "https://your-instance.onlyoffice.com",
                "DOCSPACE_API_KEY": "your-api-key"
            },
            "command": "npx",
            "args": ["--yes", "@onlyoffice/docspace-mcp"]
        }
    }
}
```

For a more detailed example of the MCP server installation process, see how it can be done using [Claude Desktop](https://modelcontextprotocol.io/quickstart/user#for-claude-desktop-users).

## Configuration

The only way to configure the ONLYOFFICE DocSpace MCP server is through environment variables. Below is a table with the names of available environment variables and their descriptions:

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name                  | Description                                                                                                                                                                                                                       |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `DOCSPACE_BASE_URL`   | The base URL of the DocSpace instance. This configuration is required for making API requests to DocSpace.                                                                                                                        |
| `DOCSPACE_ORIGIN`     | The origin of the DocSpace instance. This configuration is not required but can be used to specify the `Origin` header in requests to DocSpace.                                                                                   |
| `DOCSPACE_USER_AGENT` | The user agent to use for requests. This configuration is not required but can be used to specify the `User-Agent` header in requests to DocSpace.                                                                                |
| `DOCSPACE_API_KEY`    | The API key for accessing the DocSpace API. This configuration is required if neither `DOCSPACE_AUTH_TOKEN` nor `DOCSPACE_USERNAME` and `DOCSPACE_PASSWORD` are provided.                                                         |
| `DOCSPACE_AUTH_TOKEN` | The authentication token for accessing the DocSpace API. This configuration is required if neither `DOCSPACE_API_KEY` nor `DOCSPACE_USERNAME` and `DOCSPACE_PASSWORD` are provided.                                               |
| `DOCSPACE_USERNAME`   | The username for accessing the DocSpace API using basic authentication. This configuration is required if neither `DOCSPACE_API_KEY` nor `DOCSPACE_AUTH_TOKEN` is provided. This is used in conjunction with `DOCSPACE_PASSWORD`. |
| `DOCSPACE_PASSWORD`   | The password for accessing the DocSpace API using basic authentication. This configuration is required if neither `DOCSPACE_API_KEY` nor `DOCSPACE_AUTH_TOKEN` is provided. This is used in conjunction with `DOCSPACE_USERNAME`. |

```mdx-code-block
</APITable>
```

## Authorization and authentication

You can authenticate in three ways:

- Using an API key
- Using an auth token
- Using username/password

If authentication fails, you’ll receive a *401* Unauthorized error.
Double-check your credentials and make sure your DocSpace account has the necessary permissions.

## Usage

Model Context Protocol describes several different concepts, however the ONLYOFFICE DocSpace MCP server implements [Tools](https://modelcontextprotocol.io/docs/concepts/tools) only.

### Tools

The DocSpace MCP server exposes a set of Tools — predefined operations that your MCP client or AI model can call. Each tool corresponds to a specific DocSpace action, such as creating folders, uploading files, or managing rooms.

```mdx-code-block
<APITable>
```

#### Files

| Name                           | Description                              |
| ------------------------------ | ---------------------------------------- |
| `files_archive_room`           | Archive a room.                          |
| `files_copy_batch_items`       | Copy files or folders.                   |
| `files_create_folder`          | Create a new folder.                     |
| `files_create_room`            | Create a room.                           |
| `files_delete_file`            | Delete a file.                           |
| `files_delete_folder`          | Delete a folder.                         |
| `files_get_file_info`          | Get file metadata.                       |
| `files_get_folder`             | Retrieve folder contents.                |
| `files_get_folder_info`        | Get information about a folder.          |
| `files_get_folders`            | List subfolders.                         |
| `files_get_my_folder`          | Access the “My Documents” folder.        |
| `files_get_operation_statuses` | Check active file operations.            |
| `files_get_room_info`          | Retrieve information about a room.       |
| `files_get_room_security_info` | List users and access levels for a room. |
| `files_get_rooms_folder`       | Get the “Rooms” root folder.             |
| `files_move_batch_items`       | Move files or folders.                   |
| `files_rename_folder`          | Rename a folder.                         |
| `files_set_room_security`      | Invite or remove users in a room.        |
| `files_update_file`            | Update file data.                        |
| `files_update_room`            | Update room details.                     |

#### Other tools

| Name                                          | Description                                  |
| --------------------------------------------- | -------------------------------------------- |
| `others_download_as_text`                     | Download a file as plain text.               |
| `others_get_available_room_invitation_access` | Get available access levels for invitations. |
| `others_get_available_room_types`             | List available room types.                   |
| `others_upload_file`                          | Upload a file.                               |

#### People and portal

| Name                | Description                        |
| ------------------- | ---------------------------------- |
| `people_get_all`    | Retrieve all users.                |
| `portal_get_quota`  | Check your current storage quota.  |
| `portal_get_tariff` | Retrieve your current tariff plan. |

#### Settings

| Name                              | Description                            |
| --------------------------------- | -------------------------------------- |
| `settings_get_supported_cultures` | List supported cultures and languages. |
| `settings_get_time_zones`         | List all available time zones.         |

### Tools

```mdx-code-block
</APITable>
```
