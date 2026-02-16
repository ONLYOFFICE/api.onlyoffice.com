# Create a project room with structure and team access

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to create a ready-to-use project workspace: a room, a predefined folder structure, and team access permissions.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](/docspace/mcp-server/connecting-clients/) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](/docspace/mcp-server/) and choose one of the installation modes:
- use the public [Remote Server](/docspace/mcp-server/installation/remote-server/) if your client supports remote MCP servers;
- run the [Local Server](/docspace/mcp-server/installation/local-server/) if your client requires a locally hosted MCP server.

## Script execution steps

### 1. Decide what you want to set up

Before you send the request to your MCP client, prepare these inputs:

- **Room name** (project name)
- **Room type** (optional, if you know which one you need)
- **Folder structure** (a short list is enough)
- **Team members and roles** (who should edit, who should only view)

This helps avoid follow-up questions and makes the setup faster.

### 2. Send a request to create the room

In your MCP client, send a request that includes at least the room name.

**Example request:** Create a project room called "Website Redesign".

What you should expect:
- A new room is created in DocSpace.
- The client confirms the room name and returns basic room information (and often a link, depending on the client UI).

If you are not sure which room type to use, you can request a default type:

> Create a room called "Website Redesign" using the default project room type.

### 3. Create the folder structure inside the room

Add folders to organize project documents from the start.

**Example request:** Inside "Website Redesign", create folders: "Brief", "Design", "Legal", and "Deliverables".

What you should expect:
- Each folder is created inside the room.
- The client confirms the final folder structure.

### 4. Invite people and assign roles

Invite team members and define access permissions.

**Example request:** Invite Anna as Editor and Mark as Viewer.

What you should expect:
- Users are added to the room.
- Access roles are applied as requested.

If a name is ambiguous (for example, several users share the same name), уточните the user identity:

> Invite Anna Smith (anna.smith@example.com) as Editor.

### 5. Verify the outcome

Request a short summary to confirm everything is set correctly.

**Example request:** Show a summary of what was created: room, folders, and invited users with roles.

What you should expect in the response:
- Room name (and optionally room type)
- Folder list
- Invited users and assigned roles
- (Optional) a link to open the room in DocSpace

---

## Result

- A new project room is created in DocSpace.
- The folder structure is ready.
- The team has correct access permissions.
- The workspace is ready for collaboration.
