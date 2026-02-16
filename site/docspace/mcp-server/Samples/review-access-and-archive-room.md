# Review room access and archive the workspace

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to review who has access to a room, update permissions, and archive the room when the project is completed.

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
- **What to remove or change**, for example:
  - remove all external users;
  - remove users with a specific role (for example, Viewers);
  - change roles for selected users (for example, Editor → Viewer);
- **Whether the room should be archived** after cleanup

This makes the request unambiguous and helps avoid accidental permission changes.

### 2. Request the current access list

In your MCP client, request a list of all users who currently have access to the room.

**Example request:** Show who has access to the "Website Redesign" room and list their roles.

What you should expect:
- The client returns a readable list of participants and access levels.
- If multiple rooms match the same name, the client asks you to choose the correct one.

### 3. Apply permission changes

After reviewing the list, send a request to update access permissions.

**Example request:** Remove all external users from the "Website Redesign" room.

What you should expect:
- The client updates the room access configuration.
- The client confirms which users were removed or which roles were changed.

If you want to keep users but reduce access, specify the target role:

**Example request:** Change all Viewers in the "Website Redesign" room to "No access".

If you want to update only specific users, specify them explicitly:

**Example request:** Remove Mark from the "Website Redesign" room and keep Anna as Editor.

### 4. Verify the updated access list

Request the updated access list to confirm the changes were applied correctly.

**Example request:** Show the updated access list for the "Website Redesign" room.

What you should expect:
- The list reflects the new set of participants and roles.

### 5. Archive the room

When the room is no longer needed for active collaboration, archive it.

**Example request:** Archive the "Website Redesign" room.

What you should expect:
- The room becomes inactive and is no longer used for day-to-day work.
- The room remains available for reference, depending on your portal policies.

If you want to keep the room active, skip this step.

### 6. Confirm the final result

Request a short summary of what was changed.

**Example request:** Summarize what was changed: removed users, updated roles, and room status.

What you should expect in the response:
- The final list of permission changes (who was removed or updated)
- The final room status (archived or active)
- (Optional) a link to the room

---

## Result

- The room access list is reviewed.
- Unnecessary users are removed or roles are updated.
- The room is archived (if requested).
- A final summary confirms the applied changes.
