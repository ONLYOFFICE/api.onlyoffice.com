---
title: About the DocSpace MCP server
---

[Model Context Protocol] (MCP) is a standardized protocol for managing context between large language models (LLMs) and external systems. 
The DocSpace MCP Server connects AI tools directly to ONLYOFFICE DocSpace. This gives AI agents, assistants, and chatbots the ability to manage rooms, collaborate on files, handle permissions, and automate document workflows - all through natural language interactions.

## Features

- **Control what AI can access** - The DocSpace MCP server offers access to [tools with fine-grained enable/disable capabilities](../reference/tools.md) that enables only the DocSpace operations you need, from full workspace management to read-only file access, ensuring security and privacy when needed.
- **Flexible integration** - Offers different methods to [integrate with any MCP-compatible AI client](clients.md) without changing your infrastructure.
- **Secure by default** - Choose your preferred [authentication method](auth.md), from OAuth for enterprise security to API keys for quick testing.
- **Customize per conversation** - Different AI assistants can have different permissions and access levels in the same DocSpace instance.
- **Deploy anywhere** - The numerous [distribution formats](../distribution/docker-hub.md) available allows you to run in Docker, your existing Node.js environment, or as a standalone service - whatever fits your stack best.

## Use Cases

- **Project Management**: Set up different rooms and manage membership to these rooms based on access levels. Track who can access what files, and archive rooms once they are completed
- **Bulk document Operations**: Create folders, upload documents, copy or move items in batches, rename or delete content, and check file or folder details.
- **Compliance and audits**: Control document access with precision, especially for legal and finance teams with strict data regulations, by controlling access to confidential files and conducting audits to determine who accessed certain files and when. 
- **Remote team collaboration**: Work with distributed teams by inviting or removing users, adjusting security settings, and reviewing current access rights for rooms and shared spaces.
- **Content discovery**: Retrieve "My documents" or "Rooms" folders, get folder contents, download files as text, and monitor ongoing file operations.
- **People Directory**: List all people in the portal to streamline invitations and access management.

## Getting started with the MCP server

Before accessing the DocSpace MCP server, ensure you have the following:

- A DocSpace instance. Access one by [signing up to DocSpace](https://www.onlyoffice.com/docspace-registration?utm_source=api&utm_medium=article&utm_campaign=mcpserver)
- Your choice MCP client

Follow these steps to [connect and perform your first DocSpace MCP server-client interaction](quickstart.md). 

