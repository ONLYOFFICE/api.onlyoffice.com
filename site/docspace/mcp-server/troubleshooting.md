---
sidebar_label: Troubleshooting
sidebar_position: 10
---

# Troubleshooting

This document describes common configuration issues when working with the
DocSpace MCP server.

## Parsing Errors

If an error occurs during global configuration parsing, the DocSpace MCP server will automatically fall back to using the stdio transport and defer the
configuration error until tool execution:

0. Encounter an error while parsing global configuration.
1. Start successfully using stdio transport.
2. Respond normally to MCP protocol requests.
3. Return the original configuration parsing error when any tool is called.

This fallback behavior is implemented to ensure compatibility with the Docker
MCP Registry, which requires servers to start successfully even with
configuration issues.

## Unable to create DocSpace room with connected MCP client

This error may arise due to the a wrong connection. To fix this:

- Check your DocSpace MCP server-client connection. If you're using API authentication, check the validity of your API key, and retry connection.
- Reach out to support if issue persists.
