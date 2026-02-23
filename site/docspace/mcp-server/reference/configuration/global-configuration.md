# Global Configuration

This document describes all available configuration options for the DocSpace MCP server. Configuration can be provided through environment variables, and options are organized by their functional area.

- [MCP options](#mcp-options): This group controls the behavior of the DocSpace MCP server. 
- [API options](#api-options): Variables in this group configures the behavior of API requests
- [OAuth options](#oauth-options): This group contains variables that controls the behavior of the OAuth server
- [Server Options](#server-options): Variables in this group configures the behavior of the HTTP server. 


## Contents

- [Options](#options)
  - [MCP Options](#mcp-options)
    - [DOCSPACE_TRANSPORT](#docspace_transport)
    - [DOCSPACE_DYNAMIC](#docspace_dynamic)
    - [DOCSPACE_TOOLSETS](#docspace_toolsets)
    - [DOCSPACE_ENABLED_TOOLS](#docspace_enabled_tools)
    - [DOCSPACE_DISABLED_TOOLS](#docspace_disabled_tools)
    - [DOCSPACE_SESSION_TTL](#docspace_session_ttl)
    - [DOCSPACE_SESSION_INTERVAL](#docspace_session_interval)
  - [API Options](#api-options)
    - [DOCSPACE_USER_AGENT](#docspace_user_agent)
    - [DOCSPACE_BASE_URL](#docspace_base_url)
    - [DOCSPACE_AUTHORIZATION](#docspace_authorization)
    - [DOCSPACE_API_KEY](#docspace_api_key)
    - [DOCSPACE_AUTH_TOKEN](#docspace_auth_token)
    - [DOCSPACE_USERNAME](#docspace_username)
    - [DOCSPACE_PASSWORD](#docspace_password)
    - [DOCSPACE_OAUTH_BASE_URL](#docspace_oauth_base_url)
    - [DOCSPACE_OAUTH_CLIENT_ID](#docspace_oauth_client_id)
    - [DOCSPACE_OAUTH_CLIENT_SECRET](#docspace_oauth_client_secret)
  - [OAuth Options](#oauth-options)
    - [DOCSPACE_OAUTH_AUTH_TOKEN_ALGORITHM](#docspace_oauth_auth_token_algorithm)
    - [DOCSPACE_OAUTH_AUTH_TOKEN_TTL](#docspace_oauth_auth_token_ttl)
    - [DOCSPACE_OAUTH_AUTH_TOKEN_SECRET_KEY](#docspace_oauth_auth_token_secret_key)
    - [DOCSPACE_OAUTH_STATE_TOKEN_ALGORITHM](#docspace_oauth_state_token_algorithm)
    - [DOCSPACE_OAUTH_STATE_TOKEN_TTL](#docspace_oauth_state_token_ttl)
    - [DOCSPACE_OAUTH_STATE_TOKEN_SECRET_KEY](#docspace_oauth_state_token_secret_key)
  - [Server Options](#server-options)
    - [DOCSPACE_SERVER_BASE_URL](#docspace_server_base_url)
    - [DOCSPACE_HOST](#docspace_host)
    - [DOCSPACE_PORT](#docspace_port)
    - [DOCSPACE_SERVER_PROXY_HOPS](#docspace_server_proxy_hops)
    - [DOCSPACE_SERVER_CORS_MCP_ORIGIN](#docspace_server_cors_mcp_origin)
    - [DOCSPACE_SERVER_CORS_MCP_MAX_AGE](#docspace_server_cors_mcp_max_age)
    - [DOCSPACE_SERVER_CORS_OAUTH_ORIGIN](#docspace_server_cors_oauth_origin)
    - [DOCSPACE_SERVER_CORS_OAUTH_MAX_AGE](#docspace_server_cors_oauth_max_age)
    - [DOCSPACE_SERVER_RATE_LIMITS_MCP_CAPACITY](#docspace_server_rate_limits_mcp_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_MCP_WINDOW](#docspace_server_rate_limits_mcp_window)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_SERVER_METADATA_CAPACITY](#docspace_server_rate_limits_oauth_server_metadata_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_SERVER_METADATA_WINDOW](#docspace_server_rate_limits_oauth_server_metadata_window)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_RESOURCE_METADATA_CAPACITY](#docspace_server_rate_limits_oauth_resource_metadata_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_RESOURCE_METADATA_WINDOW](#docspace_server_rate_limits_oauth_resource_metadata_window)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_AUTHORIZE_CAPACITY](#docspace_server_rate_limits_oauth_authorize_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_AUTHORIZE_WINDOW](#docspace_server_rate_limits_oauth_authorize_window)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_CALLBACK_CAPACITY](#docspace_server_rate_limits_oauth_callback_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_CALLBACK_WINDOW](#docspace_server_rate_limits_oauth_callback_window)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_INTROSPECT_CAPACITY](#docspace_server_rate_limits_oauth_introspect_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_INTROSPECT_WINDOW](#docspace_server_rate_limits_oauth_introspect_window)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_REGISTER_CAPACITY](#docspace_server_rate_limits_oauth_register_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_REGISTER_WINDOW](#docspace_server_rate_limits_oauth_register_window)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_REVOKE_CAPACITY](#docspace_server_rate_limits_oauth_revoke_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_REVOKE_WINDOW](#docspace_server_rate_limits_oauth_revoke_window)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_TOKEN_CAPACITY](#docspace_server_rate_limits_oauth_token_capacity)
    - [DOCSPACE_SERVER_RATE_LIMITS_OAUTH_TOKEN_WINDOW](#docspace_server_rate_limits_oauth_token_window)
  - [Request Options](#request-options)
    - [DOCSPACE_REQUEST_QUERY](#docspace_request_query)
    - [DOCSPACE_REQUEST_AUTHORIZATION_HEADER](#docspace_request_authorization_header)
    - [DOCSPACE_REQUEST_HEADER_PREFIX](#docspace_request_header_prefix)
- [Examples](#examples)
  - [stdio with API key](#stdio-with-api-key)
  - [stdio with Custom Tool Selection](#stdio-with-custom-tool-selection)
  - [Local HTTP Server with Meta Tools](#local-http-server-with-meta-tools)
  - [Local HTTP Server with Session Management](#local-http-server-with-session-management)
  - [Network-Accessible HTTP Server with CORS](#network-accessible-http-server-with-cors)
  - [Network-Accessible HTTP Server with Rate Limits](#network-accessible-http-server-with-rate-limits)

## Options

Configuration options are grouped into categories based on their purpose.

### MCP Options

The following options are used to configure the behavior of the MCP server.

#### DOCSPACE_TRANSPORT

Transport protocol for MCP server communication. The `http` variant is a composite of `sse` and `streamable-http`.

:::note
`sse` is deprecated since MCP 2025-03-26 but remains supported for backward compatibility.
:::

| | |
|---|---|
| **Type** | string (union) |
| **Default** | `stdio` |
| **Variants** | `stdio` `sse` `streamable-http` `http` |
| **Attributes** | trimmable, case-insensitive |

#### DOCSPACE_DYNAMIC

Enables meta tools for dynamic tool selection. Complementary to `DOCSPACE_TOOLSETS`, `DOCSPACE_ENABLED_TOOLS`, and `DOCSPACE_DISABLED_TOOLS`.

| | |
|---|---|
| **Type** | boolean |
| **Default** | `0` (false) |
| **True** | `yes` `y` `true` `1` |
| **False** | `no` `n` `false` `0` |
| **Attributes** | trimmable, case-insensitive |
| **Transports** | all |


#### DOCSPACE_TOOLSETS

Comma-separated list of toolsets to enable. Use `all` to include every available tool.

| | |
|---|---|
| **Type** | comma-separated list |
| **Default** | `all` |
| **Example** | `files,people` |
| **Attributes** | trimmable, case-insensitive |
| **Transports** | all |


#### DOCSPACE_ENABLED_TOOLS

Comma-separated list of tools to explicitly enable.

| | |
|---|---|
| **Type** | comma-separated list |
| **Example** | `get_file,get_all_people` |
| **Attributes** | trimmable, case-insensitive |
| **Transports** | all |

#### DOCSPACE_DISABLED_TOOLS

Comma-separated list of tools to explicitly disable.

| | |
|---|---|
| **Type** | comma-separated list |
| **Example** | `get_file,get_all_people` |
| **Attributes** | trimmable, case-insensitive |
| **Transports** | all |

#### DOCSPACE_SESSION_TTL

TTL for HTTP sessions in milliseconds. Set to `0` to disable session expiration.

| | |
|---|---|
| **Type** | number |
| **Default** | `28800000` (8 hours) |
| **Minimum** | `0` |
| **Attributes** | trimmable |
| **Transports** | `sse` `streamable-http` `http` |

#### DOCSPACE_SESSION_INTERVAL

Interval for checking HTTP sessions for expiration in milliseconds. Set to `0` to disable session cleanup entirely.

| | |
|---|---|
| **Type** | number |
| **Default** | `240000` (4 minutes) |
| **Minimum** | `0` |
| **Attributes** | trimmable |
| **Transports** | `sse` `streamable-http` `http` |

### API Options

The following options are used to configure the behavior for API requests.

#### DOCSPACE_USER_AGENT

User agent sent in the `User-Agent` header for API requests.

| | |
|---|---|
| **Type** | string |
| **Default** | `@onlyoffice/docspace-mcp v3.1.0` |
| **Attributes** | trimmable |
| **Transports** | all |


#### DOCSPACE_BASE_URL

Base URL of the DocSpace instance for API requests. Must use HTTP or HTTPS with no search parameters or hash fragments. Required if any authentication option is set.

| | |
|---|---|
| **Type** | url |
| **Example** | `https://your-instance.onlyoffice.com/` |
| **Attributes** | trimmable |
| **Transports** | all |

#### DOCSPACE_AUTHORIZATION

Raw value sent in the `Authorization` header for API requests. Required for `stdio` if no other authentication option is set. Mutually exclusive with all other authentication options on HTTP transports.

| | |
|---|---|
| **Type** | string |
| **Example** | `Bearer sk-a499e...` |
| **Attributes** | sensitive, trimmable |
| **Transports** | all |

#### DOCSPACE_API_KEY

Raw value sent in the `Authorization` header for API requests. 

This option is required if [`DOCSPACE_TRANSPORT`] is set to `stdio` and neither
[`DOCSPACE_AUTHORIZATION`], [`DOCSPACE_AUTH_TOKEN`], nor the
[`DOCSPACE_USERNAME`]/[`DOCSPACE_PASSWORD`] pair is set.

This option is mutually exclusive with [`DOCSPACE_AUTHORIZATION`],
[`DOCSPACE_AUTH_TOKEN`], the [`DOCSPACE_USERNAME`]/[`DOCSPACE_PASSWORD`] pair,
and the [`DOCSPACE_OAUTH_CLIENT_ID`]/[`DOCSPACE_OAUTH_CLIENT_SECRET`] pair if
[`DOCSPACE_TRANSPORT`] is set to `sse`, `streamable-http`, or `http`.

| | |
|---|---|
| **Type** | string |
| **Example** | `Bearer sk-a499e...` |
| **Attributes** | sensitive, trimmable |
| **Transports** | all |


#### DOCSPACE_AUTH_TOKEN

Personal Access Token (PAT) for accessing the API. Required for `stdio` if no other authentication option is set. Mutually exclusive with all other authentication options on HTTP transports.

| | |
|---|---|
| **Type** | string |
| **Example** | `Fe4Hrgl6...` |
| **Attributes** | sensitive, trimmable |
| **Transports** | all |

#### DOCSPACE_USERNAME

Username for basic authentication. Used together with `DOCSPACE_PASSWORD`. Required for `stdio` if no other authentication option is set. Mutually exclusive with all other authentication options on HTTP transports.

| | |
|---|---|
| **Type** | string |
| **Example** | `henry.milton@onlyoffice.com` |
| **Attributes** | sensitive, trimmable |
| **Transports** | all |

#### DOCSPACE_PASSWORD

Password for basic authentication. Used together with `DOCSPACE_USERNAME`. 
This option is used in conjunction with [`DOCSPACE_USERNAME`].

This option is required if [`DOCSPACE_TRANSPORT`] is set to `stdio` and neither
[`DOCSPACE_AUTHORIZATION`], [`DOCSPACE_API_KEY`], nor [`DOCSPACE_AUTH_TOKEN`] is
set.

This option is mutually exclusive with [`DOCSPACE_AUTHORIZATION`],
[`DOCSPACE_API_KEY`], [`DOCSPACE_AUTH_TOKEN`], and the
[`DOCSPACE_OAUTH_CLIENT_ID`]/[`DOCSPACE_OAUTH_CLIENT_SECRET`] pair if
[`DOCSPACE_TRANSPORT`] is set to `sse`, `streamable-http`, or `http`.

| | |
|---|---|
| **Type** | string |
| **Example** | `ditgor-p...` |
| **Attributes** | sensitive, trimmable |
| **Transports** | all |


#### DOCSPACE_OAUTH_BASE_URL

Base URL of the DocSpace OAuth service. Must use HTTP or HTTPS with no search parameters or hash fragments. Set to an empty string to disable OAuth authentication.

| | |
|---|---|
| **Type** | url |
| **Example** | `https://oauth-instance.onlyoffice.com/` |
| **Attributes** | trimmable |
| **Transports** | `sse` `streamable-http` `http` |

#### DOCSPACE_OAUTH_CLIENT_ID

Client ID of the OAuth application. Used together with `DOCSPACE_OAUTH_CLIENT_SECRET`. Set to an empty string to disable client registration. 
This option is mutually exclusive with [`DOCSPACE_AUTHORIZATION`],
[`DOCSPACE_API_KEY`], [`DOCSPACE_AUTH_TOKEN`], and the
[`DOCSPACE_USERNAME`]/[`DOCSPACE_PASSWORD`] pair if [`DOCSPACE_TRANSPORT`] is
set to `sse`, `streamable-http`, or `http`.

| | |
|---|---|
| **Type** | string |
| **Example** | `68cf0a49...` |
| **Attributes** | trimmable |
| **Transports** | `sse` `streamable-http` `http` |

#### DOCSPACE_OAUTH_CLIENT_SECRET

Client secret of the OAuth application. Used together with `DOCSPACE_OAUTH_CLIENT_ID`. 
This option is mutually exclusive with [`DOCSPACE_AUTHORIZATION`],
[`DOCSPACE_API_KEY`], [`DOCSPACE_AUTH_TOKEN`], and the
[`DOCSPACE_USERNAME`]/[`DOCSPACE_PASSWORD`] pair if [`DOCSPACE_TRANSPORT`] is
set to `sse`, `streamable-http`, or `http`.

| | |
|---|---|
| **Type** | string |
| **Example** | `vEHLGi5...` |
| **Attributes** | sensitive, trimmable |
| **Transports** | `sse` `streamable-http` `http` |

### OAuth Options

The following options are used to configure the behavior of the OAuth server.

#### DOCSPACE_OAUTH_AUTH_TOKEN_ALGORITHM

Algorithm for signing OAuth access tokens. Used together with `DOCSPACE_OAUTH_AUTH_TOKEN_SECRET_KEY`. Set to an empty string to disable token signing.

| | |
|---|---|
| **Type** | string (union) |
| **Default** | `HS256` |
| **Variants** | `HS256` `HS384` `HS512` |
| **Attributes** | trimmable, case-insensitive |
| **Transports** | `sse` `streamable-http` `http` |

#### DOCSPACE_OAUTH_AUTH_TOKEN_TTL

TTL for OAuth access tokens in milliseconds. Set to `0` to disable token expiration.

| | |
|---|---|
| **Type** | number |
| **Default** | `3600000` (1 hour) |
| **Minimum** | `0` |
| **Attributes** | trimmable |
| **Transports** | `sse` `streamable-http` `http` |

#### DOCSPACE_OAUTH_AUTH_TOKEN_SECRET_KEY

Secret key for signing OAuth access tokens. Used together with `DOCSPACE_OAUTH_AUTH_TOKEN_ALGORITHM`. Set to an empty string to disable token signing.

| | |
|---|---|
| **Type** | string |
| **Example** | `Qynnyd-b...` |
| **Attributes** | sensitive, trimmable |
| **Transports** | `sse` `streamable-http` `http` |

#### DOCSPACE_OAUTH_STATE_TOKEN_ALGORITHM

Algorithm for signing OAuth state tokens. Used together with `DOCSPACE_OAUTH_STATE_TOKEN_SECRET_KEY`. Set to an empty string to disable state token signing.

| | |
|---|---|
| **Type** | string (union) |
| **Default** | `HS256` |
| **Variants** | `HS256` `HS384` `HS512` |
| **Attributes** | trimmable, case-insensitive |
| **Transports** | `sse` `streamable-http` `http` |

#### DOCSPACE_OAUTH_STATE_TOKEN_TTL

TTL for OAuth state tokens in milliseconds. Set to `0` to disable token expiration.

| | |
|---|---|
| **Type** | number |
| **Default** | `3600000` (1 hour) |
| **Minimum** | `0` |
| **Attributes** | trimmable |
| **Transports** | `sse` `streamable-http` `http` |

#### DOCSPACE_OAUTH_STATE_TOKEN_SECRET_KEY

Secret key for signing OAuth state tokens. Used together with `DOCSPACE_OAUTH_STATE_TOKEN_ALGORITHM`. Set to an empty string to disable state token signing.

| | |
|---|---|
| **Type** | string |
| **Example** | `hoPkun-6...` |
| **Attributes** | sensitive, trimmable |
| **Transports** | `sse` `streamable-http` `http` |

### Server Options

The following options are used to configure the behavior of the HTTP server.

#### DOCSPACE_SERVER_BASE_URL

The base URL of the server.

The base URL must use HTTP or HTTPS scheme without search parameters or hash
fragments.

This option is required if [`DOCSPACE_TRANSPORT`] is set to `sse`,
`streamable-http`, or `http` and [`DOCSPACE_OAUTH_BASE_URL`] is set.

##### Signature

- Type: url
- Attributes: trimmable
- Example: `https://mcp.example.com/`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_HOST

The host to bind the server to.

This option is required if [`DOCSPACE_TRANSPORT`] is set to `sse`,
`streamable-http`, or `http`.

##### Signature

- Type: string
- Attributes: trimmable
- Default: `127.0.0.1`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_PORT

The port to bind the server to.

The `0` is a special value that binds the server to a random port.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Maximum: `65535`
- Default: `8080`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_PROXY_HOPS

The number of proxy servers between the server and the client.

The `0` is a special value that indicates no proxy servers are used.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `0`
- Transports: `sse`, `streamable-http`, `http`

##### References

- [Express: Express Behind Proxies]
- [Express: Troubleshooting Proxy Issues]

#### DOCSPACE_SERVER_CORS_MCP_ORIGIN

The list of allowed origins to include in the `Access-Control-Allow-Origin`
header for CORS requests to MCP endpoints (e.g., `/sse`, `/messages`, `/mcp`).

##### Signature

- Type: comma-separate list of origins
- Attributes: trimmable
- Default: `*`
- Example: `https://example.com,https://another-example.com`
- Transports: `sse`, `streamable-http`, `http`

##### References

- [MDN: Access-Control-Allow-Origin Header]

#### DOCSPACE_SERVER_CORS_MCP_MAX_AGE

The maximum age in milliseconds to include in the `Access-Control-Max-Age`
header for CORS requests to MCP endpoints (e.g., `/sse`, `/messages`, `/mcp`).

The value `0` is a special value that omits the `Access-Control-Max-Age` header
from the response.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `86400000` (1 day)
- Transports: `sse`, `streamable-http`, `http`

##### References

- [MDN: Access-Control-Max-Age Header]

#### DOCSPACE_SERVER_CORS_OAUTH_ORIGIN

The list of allowed origins to include in the `Access-Control-Allow-Origin`
header for CORS requests to OAuth endpoints (e.g.,
`/.well-known/oauth-authorization-server`, `/oauth/authorize`, etc).

##### Signature

- Type: comma-separate list of origins
- Attributes: trimmable
- Default: `*`
- Example: `https://example.com,https://another-example.com`
- Transports: `sse`, `streamable-http`, `http`

##### References

- [MDN: Access-Control-Allow-Origin Header]

#### DOCSPACE_SERVER_CORS_OAUTH_MAX_AGE

The maximum age in milliseconds to include in the `Access-Control-Max-Age`
header for CORS requests to OAuth endpoints (e.g.,
`/.well-known/oauth-authorization-server`, `/oauth/authorize`, etc).

The value `0` is a special value that omits the `Access-Control-Max-Age` header
from the response.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `86400000` (1 day)
- Transports: `sse`, `streamable-http`, `http`

##### References

- [MDN: Access-Control-Max-Age Header]

#### DOCSPACE_SERVER_RATE_LIMITS_MCP_CAPACITY

The maximum number of requests allowed per window for the MCP endpoints (e.g.,
`/sse`, `/messages`, `/mcp`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `1000`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_MCP_WINDOW

The time window in milliseconds for the rate limit for the MCP endpoints (e.g.,
`/sse`, `/messages`, `/mcp`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `1000` (1 second)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_SERVER_METADATA_CAPACITY

The maximum number of requests allowed per window for the OAuth server metadata
endpoint (`/.well-known/oauth-authorization-server`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `200`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_SERVER_METADATA_WINDOW

The time window in milliseconds for the rate limit for the OAuth server metadata
endpoint (`/.well-known/oauth-authorization-server`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `60000` (1 minute)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_RESOURCE_METADATA_CAPACITY

The maximum number of requests allowed per window for the OAuth resource
metadata endpoint (`/.well-known/oauth-protected-resource`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `200`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_RESOURCE_METADATA_WINDOW

The time window in milliseconds for the rate limit for the OAuth resource
metadata endpoint (`/.well-known/oauth-protected-resource`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `60000` (1 minute)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_AUTHORIZE_CAPACITY

The maximum number of requests allowed per window for the OAuth authorization
endpoint (`/oauth/authorize`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default `200`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_AUTHORIZE_WINDOW

The time window in milliseconds for the rate limit for the OAuth authorization
endpoint (`/oauth/authorize`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `60000` (1 minute)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_CALLBACK_CAPACITY

The maximum number of requests allowed per window for the OAuth callback
endpoint (`/oauth/callback`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `200`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_CALLBACK_WINDOW

The time window in milliseconds for the rate limit for the OAuth callback
endpoint (`/oauth/callback`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `60000` (1 minute)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_INTROSPECT_CAPACITY

The maximum number of requests allowed per window for the OAuth introspection
endpoint (`/oauth/introspect`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `10`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_INTROSPECT_WINDOW

The time window in milliseconds for the rate limit for the OAuth introspection
endpoint (`/oauth/introspect`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `60000` (1 minute)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_REGISTER_CAPACITY

The maximum number of requests allowed per window for the OAuth client
registration endpoint (`/oauth/register`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `10`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_REGISTER_WINDOW

The time window in milliseconds for the rate limit for the OAuth client
registration endpoint (`/oauth/register`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `60000` (1 minute)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_REVOKE_CAPACITY

The maximum number of requests allowed per window for the OAuth token revocation
endpoint (`/oauth/revoke`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `10`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_REVOKE_WINDOW

The time window in milliseconds for the rate limit for the OAuth token
revocation endpoint (`/oauth/revoke`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `60000` (1 minute)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_TOKEN_CAPACITY

The maximum number of requests allowed per window for the OAuth token endpoint
(`/oauth/token`).

The `0` is special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `10`
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_SERVER_RATE_LIMITS_OAUTH_TOKEN_WINDOW

The time window in milliseconds for the rate limit for the OAuth token endpoint
(`/oauth/token`).

The `0` is a special value that disables the rate limit.

##### Signature

- Type: number
- Attributes: trimmable
- Minimum: `0`
- Default: `60000` (1 minute)
- Transports: `sse`, `streamable-http`, `http`

### Request Options

The following options are used to configure the behavior of incoming requests.

#### DOCSPACE_REQUEST_QUERY

The flag that indicates whether the server should accept configuration via query
parameters in incoming requests.

##### Signature

- Type: boolean
- Variants (true): `yes`, `y`, `true`, `1`
- Variants (false): `no`, `n`, `false`, `0`
- Attributes: trimmable, case-insensitive
- Default: `1` (true)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_REQUEST_AUTHORIZATION_HEADER

The flag that indicates whether the server should check for the `Authorization`
header in incoming requests.

##### Signature

- Type: boolean
- Variants (true): `yes`, `y`, `true`, `1`
- Variants (false): `no`, `n`, `false`, `0`
- Attributes: trimmable, case-insensitive
- Default: `1` (true)
- Transports: `sse`, `streamable-http`, `http`

#### DOCSPACE_REQUEST_HEADER_PREFIX

The prefix to use with custom configuration headers.

The empty string is a special value that disables custom configuration headers.

##### Signature

- Type: string
- Attributes: trimmable, lowercase
- Default: `x-mcp-`
- Transports: `sse`, `streamable-http`, `http`

## Examples

The following examples demonstrate common configuration scenarios for different
use cases and deployment environments.

### stdio with API key

This configuration uses the default stdio transport with API key
authentication. In this shared authentication model, all requests are
associated with the API key owner.

```ini
DOCSPACE_BASE_URL=https://your-instance.onlyoffice.com/
DOCSPACE_API_KEY=sk-a499e...
```

### stdio with Custom Tool Selection

This configuration uses the default stdio transport with API key
authentication and restricts the available tools to a specific set. In this
shared authentication model, all requests are associated with the API key owner.

```ini
DOCSPACE_TOOLSETS=files
DOCSPACE_ENABLED_TOOLS=get_all_people
DOCSPACE_DISABLED_TOOLS=delete_file,delete_folder
DOCSPACE_BASE_URL=https://your-instance.onlyoffice.com/
DOCSPACE_API_KEY=sk-a499e...
```

### Local HTTP Server with Meta Tools

This configuration uses HTTP transport with API key authentication and enables
meta tools. In this shared authentication model, all requests are associated
with the API key owner.

```ini
DOCSPACE_TRANSPORT=http
DOCSPACE_DYNAMIC=1
DOCSPACE_BASE_URL=https://your-instance.onlyoffice.com/
DOCSPACE_API_KEY=sk-a499e...
```

### Local HTTP Server with Session Management

This configuration uses HTTP transport with API key authentication and custom
session management. It configures shorter session lifetimes and more frequent
cleanup intervals. In this shared authentication model, all requests are
associated with the API key owner.

```ini
DOCSPACE_TRANSPORT=http
DOCSPACE_BASE_URL=https://your-instance.onlyoffice.com/
DOCSPACE_API_KEY=sk-a499e...
DOCSPACE_SESSION_TTL=14400000 # 4 hours
DOCSPACE_SESSION_INTERVAL=120000 # 2 minutes
```

### Network-Accessible HTTP Server with CORS

This configuration uses HTTP transport with API key authentication and custom
CORS options. It restricts the allowed origins for CORS requests to a specific
set of domains. In this shared authentication model, all requests are associated
with the API key owner.

```ini
DOCSPACE_TRANSPORT=http
DOCSPACE_BASE_URL=https://your-instance.onlyoffice.com/
DOCSPACE_API_KEY=sk-a499e...
DOCSPACE_HOST=0.0.0.0
DOCSPACE_SERVER_CORS_MCP_ORIGIN=https://example.com,https://another-example.com
DOCSPACE_SERVER_CORS_MCP_MAX_AGE=1800000 # 30 minutes
```

<!-- Definitions -->

[RFC 7518: Cryptographic Algorithms for Digital Signatures and MACs]: https://www.rfc-editor.org/rfc/rfc7518#section-3
[RFC 7518: HMAC with SHA-2 Functions]: https://www.rfc-editor.org/rfc/rfc7518.html#section-3.2
[RFC 7591: Client Metadata]: https://www.rfc-editor.org/rfc/rfc7591#section-2
[RFC 7591: "exp" (Expiration Time) Claim]: https://www.rfc-editor.org/rfc/rfc7519.html#section-4.1.4

[MDN: Access-Control-Allow-Origin Header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin
[MDN: Access-Control-Max-Age Header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age
[MDN: User-Agent Header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/User-Agent

[Express: Express Behind Proxies]: https://expressjs.com/en/guide/behind-proxies.html
[Express: Troubleshooting Proxy Issues]: https://express-rate-limit.mintlify.app/guides/troubleshooting-proxy-issues

[MCP: Transports]: https://modelcontextprotocol.io/specification/2025-06-18/basic/transports/
[MCP: Session Management]: https://modelcontextprotocol.io/specification/2025-06-18/basic/transports/#session-management

[DocSpace API: API Keys]: https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/api-keys/
[DocSpace API: OAuth]: https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/oauth2/
[DocSpace API: Basic Authentication]: https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/basic-authentication/
[DocSpace API: Personal Access Tokens]: https://api.onlyoffice.com/docspace/api-backend/get-started/authentication/personal-access-tokens/



[`DOCSPACE_TRANSPORT`]: #docspace_transport
[`DOCSPACE_TOOLSETS`]: #docspace_toolsets
[`DOCSPACE_ENABLED_TOOLS`]: #docspace_enabled_tools
[`DOCSPACE_DISABLED_TOOLS`]: #docspace_disabled_tools
[`DOCSPACE_AUTHORIZATION`]: #docspace_authorization
[`DOCSPACE_API_KEY`]: #docspace_api_key
[`DOCSPACE_AUTH_TOKEN`]: #docspace_auth_token
[`DOCSPACE_USERNAME`]: #docspace_username
[`DOCSPACE_PASSWORD`]: #docspace_password
[`DOCSPACE_OAUTH_BASE_URL`]: #docspace_oauth_base_url
[`DOCSPACE_OAUTH_CLIENT_ID`]: #docspace_oauth_client_id
[`DOCSPACE_OAUTH_CLIENT_SECRET`]: #docspace_oauth_client_secret
[`DOCSPACE_OAUTH_AUTH_TOKEN_ALGORITHM`]: #docspace_oauth_auth_token_algorithm
[`DOCSPACE_OAUTH_AUTH_TOKEN_SECRET_KEY`]: #docspace_oauth_auth_token_secret_key
[`DOCSPACE_OAUTH_STATE_TOKEN_ALGORITHM`]: #docspace_oauth_state_token_algorithm
[`DOCSPACE_OAUTH_STATE_TOKEN_SECRET_KEY`]: #docspace_oauth_state_token_secret_key
[`DOCSPACE_REQUEST_QUERY`]: #docspace_request_query
