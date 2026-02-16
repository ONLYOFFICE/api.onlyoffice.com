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

Before you send the request to your MCP client, prepare the following details:

- **Room name** (project name)
- **Room type** (optional)
- **Folder structure** (a short list is enough)
- **Team members and roles** (who can edit and who can view)

This makes the request clear and reduces the need for follow-up questions.

### 2. Send a request to create the room

In your MCP client, send a request that includes at least the room name.

**Example request:** Create a project room called "Website Redesign".

What you should expect:
- A new room is created in DocSpace.
- The client confirms the room name and returns basic room information (the exact output depends on the client UI).

If you want to specify the room type, include it in the request.

**Example request:** Create a "Website Redesign" room using a Collaboration room type.

### 3. Create the folder structure inside the room

Add folders to organize project documents from the start.

**Example request:** Inside "Website Redesign", create folders "Brief", "Design", "Legal", and "Deliverables".

What you should expect:
- Each folder is created inside the room.
- The client confirms the created folder structure.

### 4. Invite people and assign roles

Invite team members and assign access roles.

**Example request:** Invite Anna as Editor and Mark as Viewer.

What you should expect:
- Users are added to the room.
- The specified roles are applied.

If multiple users match the same name, provide additional details in your request (for example, the full name) so the correct user can be selected.

**Example request:** Invite Anna Smith as Editor and Mark Johnson as Viewer.

### 5. Verify the outcome

Request a short summary to confirm everything is set correctly.

**Example request:** Show a summary of the created room, folders, and invited users with their roles.

What you should expect in the response:
- Room name (and room type, if specified)
- Folder list
- Invited users and assigned roles
- (Optional) a link to open the room in DocSpace

## Result

- A new project room is created in DocSpace.
- The folder structure is ready.
- Team members have the correct access permissions.
- The workspace is ready for collaboration.
