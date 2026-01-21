---
sidebar_position: -2
---

# Remote Server

This instruction describes how to connect to the DocSpace MCP server running on
a remote machine.

## Public Instance

The public instance is available at https://mcp.onlyoffice.com/mcp for clients
that support modern Streamable HTTP transport and at
https://mcp.onlyoffice.com/sse for clients that support only the legacy SSE
transport. Prefer to use the Streamable HTTP transport whenever possible.

The public instance supports authentication using OAuth, API key, Personal
Access Token (PAT), username/password pair, or raw `Authorization` header.
Prefer to use OAuth authentication whenever possible.

The public instance provides access to all available tools by default. Tool
selection can be customized using query parameters or custom headers. However,
prefer to use the MCP client interface for tool configuration when supported.

## Examples

The following examples demonstrate different authentication methods for
connecting to the public instance.

### OAuth with Public App

Connect using the public OAuth application without custom credentials.

```http
https://mcp.onlyoffice.com/mcp
```

This is the preferred method. The detailed examples for different clients are provided in the [Connecting clients](../connecting-clients/) section.

### OAuth with Custom App

Connect using custom OAuth client ID and client secret.

```http
https://mcp.onlyoffice.com/mcp
```

```
OAuth Client ID: 68cf0a49...
OAuth Client Secret: vEHLGi5...
```

See the detailed example for [Claude Desktop](https://claude.com/download)

1. Open Claude Desktop;
2. Navigate to Settings;
3. Navigate to Connectors;
4. Click "Add custom connector";
5. Enter a name (e.g., "ONLYOFFICE DocSpace MCP");
6. Enter a URL (e.g., https://mcp.onlyoffice.com/mcp);
7. Click "Advanced settings";
8. In the "OAuth Client ID" and "OAuth Client Secret" fields, enter your app ID and secret created in DocSpace settings -> Developer Tools -> OAuth 2.0;
9. Click "Add";
10. Click "Connect" next to the newly added connector;
11. Complete the OAuth authentication process:
    - Sign in to your DocSpace account by entering your email and password and clicking "Sign In".
    - If you have more than one account associated with the entered email, choose one of them.
    - Allow the MCP Remote Server to access the specified data in your DocSpace account.

### API Key with Headers

Connect using API key and base URL configured via custom headers.

```http
https://mcp.onlyoffice.com/mcp
```

```http
X-Mcp-Base-Url: https://your-instance.onlyoffice.com/
X-Mcp-Api-Key: sk-a499e...
```

See the detailed example for [OpenAI](https://platform.openai.com/)

1. Open OpenAI;
2. Open a new prompt;
3. In the "Tools" section, click "Add" -> "MCP Server";
4. Click "+ Server";
5. Enter a server (e.g., https://mcp.onlyoffice.com/mcp);
6. Enter a name (e.g., "ONLYOFFICE_DocSpace_MCP");
7. Select "Custom headers" in Authentication;
8. Add the X-Mcp-Base-Url header with the following value: https://your-instance.onlyoffice.com/;
9. Add the X-Mcp-Api-Key header with the following value: sk-a499e... (your personal API key generated in DocSpace settings -> Developer Tools -> API keys);
10. Click "Connect";
11. Click "Add".

### API Key with Authorization Header

Connect using API key in `Authorization` header and base URL in query parameter.

```http
https://mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com
```

```http
Authorization: Bearer sk-a499e...
```

See the detailed example for [LeChat](https://chat.mistral.ai)

1. Open Le Chat;
2. Navigate to Intelligence;
3. Navigate to Connectors;
4. Click "Add Connector";
5. Navigate to Custom MCP Connector;
6. Enter a name (e.g., "ONLYOFFICE_DocSpace_MCP");
7. Enter a server (e.g., https://mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com);
8. Select "API Token Authentification" in Authentication Methods;
9. In the "Header value" field, enter your personal API key generated in DocSpace settings -> Developer Tools -> API keys;
10. Click "Connect".

### Username and Password in URL

Connect using URL-encoded credentials and base URL in query parameter.

```http
https://henry.milton%40onlyoffice.com:ditgor-p...@mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com/
```

See the detailed example for [Claude Web](https://claude.ai)

1. Open Claude Web;
2. Navigate to Settings;
3. Navigate to Connectors;
4. Click "Add custom connector";
5. Enter a name (e.g., "ONLYOFFICE DocSpace MCP");
6. Enter a URL (e.g., https://henry.milton%40onlyoffice.com:YourPassword@mcp.onlyoffice.com/mcp?base_url=https://your-instance.onlyoffice.com/);
7. Click "Add".