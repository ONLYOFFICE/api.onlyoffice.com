---
sidebar_label: Glossary
title: Glossary
---

Terms used across the DocSpace MCP Server documentation, grouped by category.


## MCP Concepts

### Model Context Protocol (MCP)
An open, standardized protocol that lets large language models (LLMs) communicate
with external systems in a structured way. MCP defines how an AI agent discovers
what actions are available, calls them, and receives results — without custom
integration code for every tool. Think of it as a common language between AI and
the outside world.

→ See the [official MCP introduction](https://modelcontextprotocol.io/introduction)

### MCP Server
A process that exposes capabilities (tools, resources, prompts) to an MCP client
over a defined transport. For example, the DocSpace MCP Server specifically exposes DocSpace operations like creating rooms, uploading, or deleting files so that AI agents can perform these operations through natural language.

### MCP Client
Applications like Claude Desktop, Cursor, and Windsurf that connect to an MCP server and uses its tools on behalf of an LLM. The client is responsible for passing tool calls from the LLM to the server and returning the
results.

### MCP Host
The application or environment that runs the MCP client. For example, Claude
Desktop is both the host and the client. In more complex setups, the host might
be a custom application that embeds an MCP client library.

### Transport
The communication mechanism used between an MCP client and server. The DocSpace
MCP Server supports three transports: `stdio`, `sse` and `streamable-http`. 

### Tool
A callable function used in MCP terminology and exposed by an MCP server. When a user prompts the LLM to perform an action, like create a room or fetch a file, it
invokes a tool by name with a set of parameters. The DocSpace MCP Server exposes
[tools organized into toolsets](tools.md#regular-tools) such as `files`, `rooms`, and `people`.

### Toolset
A named group of related tools. Toolsets let you enable or disable a whole
category of functionality at once. For example, enabling the `files` toolset
gives access to all file-related tools without listing each one individually.

### Meta Tools
A DocSpace MCP Server-specific feature. When enabled, meta tools allow an MCP
client to dynamically discover and select toolsets at session time, rather than
having them fixed at server startup. Useful when different clients or users need
different subsets of tools.

## DocSpace Concepts

### Portal
What DocSpace calls a workspace instance. Your portal has a unique URL (e.g.
`https://your-instance.onlyoffice.com`) and contains all your rooms, files, and
users. The `DOCSPACE_BASE_URL` environment variable points to your portal.

### Room
A room is a shared space where users work together on files. Rooms have types (e.g. collaboration room, public room), configurable access levels, and their own membership lists. Rooms are distinct from folders as they sit at the top level of the DocSpace hierarchy.

### API Key
A credential generated in DocSpace Developer Tools. API keys are used to
authenticate programmatic access to the DocSpace API. In the context of the MCP
Server, the API key is passed via `DOCSPACE_API_KEY` and all requests run under
the permissions of the key owner.

## Authentication & Protocol Terms

### Basic Authentication
A simple HTTP authentication scheme where a username and password are sent with
each request (Base64-encoded in the `Authorization` header). Supported by the
DocSpace MCP Server via `DOCSPACE_USERNAME` and `DOCSPACE_PASSWORD`, but
generally less secure than API keys or tokens for automated use.

### OAuth 2.0
An authorization framework that lets a user grant a third-party application
access to their account without sharing their password. The DocSpace MCP Server
supports OAuth 2.0 for HTTP transports, enabling a browser-based login flow
instead of static credentials.

### Dynamic Client Registration
An OAuth 2.0 extension (RFC 7591) that allows an MCP client to register itself
with an authorization server at runtime, without needing a pre-configured client
ID and secret. The DocSpace MCP Server supports this so that MCP clients can
onboard to OAuth automatically.

### SSE (Server-Sent Events)
A web standard for servers to push a stream of events to a client over a single
HTTP connection. Used as an MCP transport (`sse`). It is one-directional
(server → client), which is why it has been superseded by Streamable HTTP for
MCP use.

### Streamable HTTP
The modern MCP transport introduced in the MCP 2025-03-26 specification. Unlike
SSE, it supports full bidirectional communication over HTTP and is the preferred
transport for connecting to the remote DocSpace MCP Server at
`https://mcp.onlyoffice.com/mcp`.