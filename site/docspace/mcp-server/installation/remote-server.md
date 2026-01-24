---
sidebar_position: -2
---

# Remote Server

This instruction describes how to connect to the DocSpace MCP server running on
a remote machine.

## Public Instance

AI platforms can connect to the public DocSpace MCP Server instance hosted by ONLYOFFICE. This eliminates the need to run your own server infrastructure while providing access to DocSpace functionality through your AI assistant.

### Available Endpoints

The public instance is available at two endpoints, depending on your client's transport capabilities:

| Endpoint | Transport | Recommendation |
|----------|-----------|----------------|
| `https://mcp.onlyoffice.com/mcp` | Streamable HTTP | **Preferred** - Use this endpoint whenever your client supports it. Streamable HTTP offers better performance and reliability. |
| `https://mcp.onlyoffice.com/sse` | Server-Sent Events (SSE) | **Legacy** - Use this endpoint only if your client does not support the modern Streamable HTTP transport. |

### Authentication Methods

The public instance supports multiple authentication methods to meet different security requirements and client capabilities: OAuth, API key, Personal Access Token (PAT), username/password pair, or raw `Authorization` header.

:::note
Use OAuth authentication whenever possible. OAuth provides the strongest security model by allowing users to authorize specific permissions without sharing their credentials directly.
:::

### Tool Configuration

The public instance provides access to all available DocSpace tools by default. Tool selection can be customized using the following options:

- **MCP Client Interface**:  (Preferred) Most MCP clients provide a built-in interface for enabling or disabling specific tools. Use this method when your client supports it.

- **Query Parameters or Custom Headers**: For clients without a tool configuration interface, you can customize tool availability by passing parameters in the connection URL or via custom HTTP headers.

## Examples

The following examples demonstrate different authentication methods for
connecting to the public DocSpace MCP Server instance. Choose the method that best fits your security requirements and client capabilities.

### OAuth with Public App

Connect using the public OAuth application provided by ONLYOFFICE. This is the simplest and most secure method, requiring no custom credentials or additional configuration.

This is the recommended method. It provides secure, scoped access to your DocSpace account without the necessity to create or manage OAuth applications.

**Connection URL:**

```http
https://mcp.onlyoffice.com/mcp
```

For step-by-step instructions tailored to specific AI clients, see the [Connecting clients](/docspace/mcp-server/connecting-clients/) section.

### OAuth with Custom App

Connect using custom OAuth client ID and client secret. This method gives you full control over the OAuth configuration, including custom redirect URIs, specific scopes, and branding.

You can choose this method if you need to customize the OAuth flow or comply with organizational security policies that require self-managed OAuth applications.

**Connection URL:**

```http
https://mcp.onlyoffice.com/mcp
```

**Required credentials:**

```
OAuth Client ID: 68cf0a49...
OAuth Client Secret: vEHLGi5...
```

**Prerequisites:** Before connecting, create an OAuth 2.0 application in your DocSpace instance:

1. Sign in to DocSpace as an administrator
2. Navigate to Settings -> Developer Tools -> OAuth 2.0
3. Create a new application and note the Client ID and Client Secret

**Detailed example for [Claude Desktop](https://claude.com/download):**

1. Open Claude Desktop.
2. Navigate to Settings.
3. Navigate to Connectors.
4. Click "Add custom connector".
5. Enter a name for the connector (e.g., "ONLYOFFICE DocSpace MCP").
6. Enter the connection URL (e.g., https://mcp.onlyoffice.com/mcp).
7. Click "Advanced settings".
8. In the "OAuth Client ID" field, enter the Client ID from your DocSpace OAuth application.
9. In the "OAuth Client Secret" field, enter the Client Secret from your DocSpace OAuth application.
10. Click "Add".
11. Click "Connect" next to the newly added connector.
12. Complete the OAuth authentication process:
    - Sign in to your DocSpace account by entering your email and password and clicking "Sign In".
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.

### API Key with Headers

Connect using an API key and base URL configured via custom headers.

You can choose this method when integrating with platforms that support custom HTTP headers but don't have built-in OAuth support.

**Connection URL:**

```http
https://mcp.onlyoffice.com/mcp
```

**Required headers:**

```http
X-Mcp-Base-Url: https://your-instance.onlyoffice.com/
X-Mcp-Api-Key: sk-a499e...
```

**Prerequisites:** Generate an API key in your DocSpace instance:

1. Sign in to DocSpace
2. Navigate to Settings -> Developer Tools -> API keys
3. Generate a new API key and copy it immediately (it won't be shown again)

**Detailed example for [OpenAI](https://platform.openai.com/):**

1. Open OpenAI in your web browser.
2. Create a new prompt or open an existing one.
3. In the "Tools" section, click "Add" and select "MCP Server".
4. Click "+ Server".
5. Enter the server URL (e.g., https://mcp.onlyoffice.com/mcp).
6. Enter a name for the server (e.g., "ONLYOFFICE_DocSpace_MCP").
7. Select "Custom headers" in the "Authentication" dropdown.
8. Add the first header:
   - **Header name:** `X-Mcp-Base-Url`
   - **Header value:** `https://your-instance.onlyoffice.com/` (replace with your actual DocSpace URL)
9. Add the second header:
   - **Header name:** `X-Mcp-Api-Key`
   - **Header value:** Your API key (e.g., `sk-a499e...`)
10. Click "Connect".
11. Click "Add".

### API Key with Authorization Header

Connect using API key in `Authorization` header and base URL in query parameter.

You can choose this method when working with clients that support Bearer token authentication but don't allow custom headers.

**Connection URL:**

```http
https://mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com
```

**Required header:**

```http
Authorization: Bearer sk-a499e...
```

**Prerequisites:** Generate an API key in your DocSpace instance:

1. Sign in to DocSpace
2. Navigate to Settings -> Developer Tools -> API keys
3. Generate a new API key and copy it immediately (it won't be shown again)

**Detailed example for [Le Chat](https://chat.mistral.ai):**

1. Open Le Chat  in your web browser.
2. Navigate to Intelligence.
3. Navigate to Connectors.
4. Click "Add Connector".
5. Navigate to Custom MCP Connector.
6. Enter a name for the connector (e.g., "ONLYOFFICE_DocSpace_MCP").
7. Enter the server URL with your DocSpace instance as a query parameter:
   `https://mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com`
   (replace the base_url value with your actual DocSpace URL).
8. Select "API Token Authentification" in the "Authentication Methods" section.
9. In the "Header value" field, enter your personal API key generated in DocSpace settings -> Developer Tools -> API keys.
10. Click "Connect".

### Username and Password in URL

Connect using URL-encoded credentials and base URL in query parameter. The username and password are encoded according to URI standards to handle special characters.

You can choose this method for quick setup, testing, or when using clients with limited authentication options.

:::note
Because credentials are visible in the URL, they may be logged in browser history, server logs, or network monitoring tools. For production use, prefer OAuth or API key authentication.
:::

**Connection URL format:**

```http
https://{encoded_username}:{encoded_password}@mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com/
```

**URL encoding:**

- The `@` symbol in email addresses must be encoded as `%40` (e.g. `username%40example.com`)
- Special characters in passwords must be URL-encoded (e.g., `!` becomes `%21`, `#` becomes `%23`)
- You can use an online URL encoder if your password contains special characters

**Detailed example for [Claude Web](https://claude.ai):**

1. Open Claude Web in your web browser.
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