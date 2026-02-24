# Request configuration

This document lists and describes the variables used to configure the DocSpace MCP server behavior at the request level using [query parameters](#query-options) and [custom headers](#header-options). 

:::note
The request configuration parameters are only available for HTTP-like transports
:::

## Query Options

These options can be configured using query parameters in the request
URL and are divided into the MCP and API options.

Query parameters are only available if the MCP server is configured to accept
configuration via query parameters.

### MCP Options

The following options are used to configure the behavior of the MCP server.

#### dynamic

Enables meta tools for dynamic tool selection. Complementary to `toolsets`, `enabled_tools`, and `disabled_tools`. Mutually exclusive with `X-Mcp-Dynamic`.

| | |
|---|---|
| **Type** | boolean |
| **True** | `yes` `y` `true` `1` |
| **False** | `no` `n` `false` `0` |
| **Attributes** | trimmable, case-insensitive |

#### toolsets

Comma-separated list of toolsets to enable. Available toolsets depend on the global server configuration. Mutually exclusive with `X-Mcp-Toolsets`.

| | |
|---|---|
| **Type** | comma-separated list |
| **Example** | `files,people` |
| **Attributes** | trimmable, case-insensitive |

#### enabled_tools

Comma-separated list of tools to explicitly enable. Available tools depend on the global server configuration. Mutually exclusive with `X-Mcp-Enabled-Tools`.

| | |
|---|---|
| **Type** | comma-separated list |
| **Example** | `get_file,get_all_people` |
| **Attributes** | trimmable, case-insensitive |

#### disabled_tools

Comma-separated list of tools to explicitly disable. Available tools depend on the global server configuration. Mutually exclusive with `X-Mcp-Disabled-Tools`.

| | |
|---|---|
| **Type** | comma-separated list |
| **Example** | `get_file,get_all_people` |
| **Attributes** | trimmable, case-insensitive |

### API Options

The following options are used to configure the behavior for API requests.

#### base_url

Base URL of the DocSpace instance for API requests. Must use HTTP or HTTPS with no search parameters or hash fragments. Mutually exclusive with `X-Mcp-Base-Url`.

| | |
|---|---|
| **Type** | url |
| **Example** | `https://your-instance.onlyoffice.com/` |
| **Attributes** | trimmable |

## Header Options

The following options can be configured using custom HTTP headers.

HTTP headers are only available if the MCP server is configured to accept
configuration via HTTP headers.

### MCP Options

The following options are used to configure the behavior of the MCP server.

#### X-Mcp-Dynamic

Enables meta tools for dynamic tool selection. Complementary to `X-Mcp-Toolsets`, `X-Mcp-Enabled-Tools`, and `X-Mcp-Disabled-Tools`. Mutually exclusive with `dynamic`.

| | |
|---|---|
| **Type** | boolean |
| **True** | `yes` `y` `true` `1` |
| **False** | `no` `n` `false` `0` |
| **Attributes** | trimmable, case-insensitive |

#### X-Mcp-Toolsets

Comma-separated list of toolsets to enable. Available toolsets depend on the global server configuration. Mutually exclusive with `toolsets`.

| | |
|---|---|
| **Type** | comma-separated list |
| **Example** | `files,people` |
| **Attributes** | trimmable, case-insensitive |


#### X-Mcp-Enabled-Tools

Comma-separated list of tools to explicitly enable. Available tools depend on the global server configuration. Mutually exclusive with `enabled_tools`.

| | |
|---|---|
| **Type** | comma-separated list |
| **Example** | `get_file,get_all_people` |
| **Attributes** | trimmable, case-insensitive |

#### X-Mcp-Disabled-Tools

Comma-separated list of tools to explicitly disable. Available tools depend on the global server configuration. Mutually exclusive with `disabled_tools`.

| | |
|---|---|
| **Type** | comma-separated list |
| **Example** | `get_file,get_all_people` |
| **Attributes** | trimmable, case-insensitive |

### Sample custom tool selection

This sample configuration restricts the available tools to a specific set.

```http
X-Mcp-Toolsets: files
X-Mcp-Enabled-Tools: get_all_people
X-Mcp-Disabled-Tools: delete_file,delete_folder
```

### API Options

The following options are used to configure the behavior for API requests.

#### X-Mcp-Base-Url

Base URL of the DocSpace instance for API requests. Must use HTTP or HTTPS with no search parameters or hash fragments. Required if any authentication header is set. Mutually exclusive with `base_url`.

| | |
|---|---|
| **Type** | url |
| **Example** | `https://your-instance.onlyoffice.com/` |
| **Attributes** | trimmable |

#### Authorization

Raw value sent in the `Authorization` header for API requests. Available only if the server is configured to accept this header. Required if the server has no authentication configured and no other authentication option is set. Mutually exclusive with `X-Mcp-Api-Key`, `X-Mcp-Auth-Token`, the `X-Mcp-Username`/`X-Mcp-Password` pair, and the OAuth flow.

| | |
|---|---|
| **Type** | string |
| **Example** | `Bearer sk-a499e...` |
| **Attributes** | sensitive, trimmable |

#### X-Mcp-Api-Key

API key for accessing the API. Required if the server has no authentication configured and no other authentication option is set. Mutually exclusive with `Authorization`, `X-Mcp-Auth-Token`, the `X-Mcp-Username`/`X-Mcp-Password` pair, and the OAuth flow.

| | |
|---|---|
| **Type** | string |
| **Example** | `sk-a499e...` |
| **Attributes** | sensitive, trimmable |

#### X-Mcp-Auth-Token

Personal Access Token (PAT) for accessing the API. Required if the server has no authentication configured and no other authentication option is set. Mutually exclusive with `Authorization`, `X-Mcp-Api-Key`, the `X-Mcp-Username`/`X-Mcp-Password` pair, and the OAuth flow.

| | |
|---|---|
| **Type** | string |
| **Example** | `Fe4Hrgl6...` |
| **Attributes** | sensitive, trimmable |

#### X-Mcp-Username

Username for basic authentication. Used together with `X-Mcp-Password`. Required if the server has no authentication configured and no other authentication option is set. Mutually exclusive with `Authorization`, `X-Mcp-Api-Key`, `X-Mcp-Auth-Token`, and the OAuth flow.

| | |
|---|---|
| **Type** | string |
| **Example** | `henry.milton@onlyoffice.com` |
| **Attributes** | sensitive, trimmable |

#### X-Mcp-Password

Password for basic authentication. Used together with `X-Mcp-Username`. Required if the server has no authentication configured and no other authentication option is set. Mutually exclusive with `Authorization`, `X-Mcp-Api-Key`, `X-Mcp-Auth-Token`, and the OAuth flow.

| | |
|---|---|
| **Type** | string |
| **Example** | `ditgor-p...` |
| **Attributes** | sensitive, trimmable |

## Example

The following examples show how to use request configuration headers to
customize server behavior for specific requests.

### Authentication with API Key

This sample configuration uses an API key for authentication.

```http
X-Mcp-Base-Url: https://your-instance.onlyoffice.com/
X-Mcp-Api-Key: sk-a499e...
```

<!-- Definitions -->

[DocSpace API: API Keys]: https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/api-keys/
[DocSpace API: Basic Authentication]: https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/basic-authentication/
[DocSpace API: Personal Access Tokens]: https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/personal-access-tokens/

[DocSpace MCP: Toolsets]: ../features/tools.md#toolsets
[DocSpace MCP: Tools]: ../features/tools.md#regular-tools
[DocSpace MCP: Meta Tools]: ../features/tools.md#meta-tools
[DocSpace MCP: Authentication Resolution]: ./authentication-resolution.md
[DocSpace MCP: Tools Resolution]: ./tools-resolution.md

[`dynamic`]: #dynamic
[`toolsets`]: #toolsets
[`enabled_tools`]: #enabled_tools
[`disabled_tools`]: #disabled_tools
[`base_url`]: #base_url
[`X-Mcp-Dynamic`]: #x-mcp-dynamic
[`X-Mcp-Toolsets`]: #x-mcp-toolsets
[`X-Mcp-Enabled-Tools`]: #x-mcp-enabled-tools
[`X-Mcp-Disabled-Tools`]: #x-mcp-disabled-tools
[`X-Mcp-Base-Url`]: #x-mcp-base-url
[`Authorization`]: #authorization
[`X-Mcp-Api-Key`]: #x-mcp-api-key
[`X-Mcp-Auth-Token`]: #x-mcp-auth-token
[`X-Mcp-Username`]: #x-mcp-username
[`X-Mcp-Password`]: #x-mcp-password
