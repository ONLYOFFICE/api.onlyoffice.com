# Create an onboarding workspace for a new employee

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to set up an onboarding workspace for a new employee. The workspace can include a predefined folder structure and the required access permissions for HR and the employee's manager.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Decide what the onboarding workspace should include

Before sending a request, prepare the following details:

- **Employee name** (to name the workspace)
- **Where to create the workspace**, for example:
  - a dedicated room for onboarding; or
  - a folder inside an existing HR room
- **Folder structure** you want to create (for example, "Policies", "Forms", "Training")
- **Participants and roles**, for example:
  - HR as Editor;
  - manager as Viewer or Editor;
  - employee as Viewer (or Editor, if required)

This makes the setup consistent for every onboarding process.

### 2. Create a workspace for the employee

Create a room (or a folder) that will contain all onboarding documents.

**Example request:** Create an onboarding room called "Onboarding - John Miller".

What you should expect:
- The workspace is created in DocSpace.
- The client confirms the created room and returns basic information (the exact output depends on the client UI).

If you prefer to store onboarding items inside an existing HR room, specify it:

**Example request:** In the "HR" room, create a folder named "Onboarding - John Miller".

### 3. Create the folder structure

Create the predefined folders inside the onboarding workspace.

**Example request:** In "Onboarding - John Miller", create folders "Policies", "Forms", and "Training".

What you should expect:
- Each folder is created inside the workspace.
- The client confirms the created folder structure.

### 4. Grant access to HR, the manager, and the employee

Invite the required participants and assign roles.

**Example request:** Invite HR as Editor, invite the manager as Viewer, and invite John Miller as Viewer.

What you should expect:
- Users are added to the workspace.
- The specified roles are applied.

If multiple users match the same name, provide additional details in your request (for example, the full name) so the correct user can be selected.

### 5. Verify the outcome

Request a short summary to confirm the onboarding workspace is ready.

**Example request:** Show a summary of the created onboarding workspace: folders and invited users with roles.

What you should expect in the response:
- Workspace name
- Folder list
- Invited users and assigned roles
- (Optional) a link to open the workspace in DocSpace

## Result

- An onboarding workspace is created in DocSpace.
- A predefined folder structure is added.
- HR, the manager, and the employee have the correct access permissions.
- The workspace is ready for uploading onboarding documents and tracking progress.
