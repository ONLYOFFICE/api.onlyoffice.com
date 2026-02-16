# Review room access and archive the workspace

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to review who has access to a room, update access permissions, and archive the room when the project is completed.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](/docspace/mcp-server/connecting-clients/) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](/docspace/mcp-server/) and choose one of the installation modes:
- use the public [Remote Server](/docspace/mcp-server/installation/remote-server/) if your client supports remote MCP servers;
- run the [Local Server](/docspace/mcp-server/installation/local-server/) if your client requires a locally hosted MCP server.

## Script execution steps

### 1. Decide what you want to review and change

Before sending a request, clarify:

- **Room name** you want to review
- **What should change**, for example:
  - remove selected users;
  - remove all users with a specific role (for example, Viewer);
  - change roles for selected users (for example, Editor → Viewer);
- **Whether the room should be archived** after the access update

This makes the request clear and helps avoid unintended permission changes.

### 2. Request the current access list

Request a list of all users who currently have access to the room and their roles.

**Example request:** Show who has access to the "Website Redesign" room and list their roles.

What you should expect:
- A readable list of participants and access levels.
- If multiple rooms match the same name, you are asked to select the correct one.

### 3. Apply access changes

After reviewing the list, send a request to update access permissions.

**Example request:** Remove Mark from the "Website Redesign" room and keep Anna as Editor.

What you should expect:
- The access configuration is updated.
- The response confirms which users were removed or which roles were changed.

If you want to remove access for a role across the room, describe it directly:

**Example request:** Remove all users with the Viewer role from the "Website Redesign" room.

If you want to change roles rather than remove access:

**Example request:** Change Mark's role to Viewer in the "Website Redesign" room.

### 4. Verify the updated access list

Request the access list again to confirm the changes were applied correctly.

**Example request:** Show the updated access list for the "Website Redesign" room.

What you should expect:
- The updated list reflects the new set of participants and roles.

### 5. Archive the room

When the room is no longer needed for active collaboration, archive it.

**Example request:** Archive the "Website Redesign" room.

What you should expect:
- The room becomes inactive.
- The room remains available for reference, depending on your portal settings.

If you want to keep the room active, skip this step.

### 6. Confirm the final result

Request a short summary to confirm the final state.

**Example request:** Provide a summary of the changes: removed users, updated roles, and the room status.

What you should expect in the response:
- A list of applied permission changes (removed users and role updates)
- The room status (archived or active)
- (Optional) a link to the room

## Result

- The room access list is reviewed.
- Access permissions are updated as requested.
- The room is archived (if requested).
- A final summary confirms the applied changes.
