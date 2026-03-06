# Clean up a room by archiving drafts and old versions

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to keep a project room organized by moving drafts and old versions into an "Archive" folder. This makes it easier for the team to find final documents.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Decide what should be archived

Before sending a request, decide:

- **Room name** you want to clean up
- **Which folder(s)** should be cleaned up (optional)
- **What should be considered a draft or an old version**, for example:
  - files in a "Drafts" folder;
  - files with names containing "draft", "old", or "v1";
  - older versions of the same document
- **Where to store archived files**, for example:
  - an "Archive" folder in the room root; or
  - an "Archive" folder inside a specific project folder

This makes the cleanup predictable and prevents moving the wrong files.

### 2. Create an Archive folder

Create a dedicated folder for archived files.

**Example request:** In the "Website Redesign" room, create a folder named "Archive".

What you should expect:
- The "Archive" folder is created inside the room.
- The client confirms the folder location.

If you prefer a scoped archive inside an existing folder, specify it:

**Example request:** In the "Website Redesign" room, create an "Archive" folder inside the "Deliverables" folder.

### 3. Move drafts and old versions to the Archive folder

Request the cleanup action with clear criteria.

**Example request:** Move all files from the "Drafts" folder in the "Website Redesign" room to the "Archive" folder.

What you should expect:
- Files are moved to the archive location.
- The response confirms which files were moved.

If you use naming conventions, you can request a name-based cleanup:

**Example request:** In the "Website Redesign" room, move files with "draft" or "v1" in the file name to the "Archive" folder.

:::note
If your request uses naming conventions (for example, "draft", "v1", "final"), make sure your project files follow the same convention to avoid unexpected results.
:::

### 4. Verify the main folders and the Archive folder

Request folder contents to confirm that:
- the main folders contain only the current files;
- archived items were moved to the correct location.

**Example request:** Show the contents of the "Archive" folder in the "Website Redesign" room.

What you should expect in the response:
- A list of archived files (and optional links, depending on the client UI)

You can also verify a main folder:

**Example request:** Show the contents of the "Deliverables" folder in the "Website Redesign" room.

### 5. Confirm the final result

Request a short summary to confirm the cleanup was completed.

**Example request:** Summarize what was archived and confirm the room is organized.

What you should expect:
- Number of files moved (or a list of moved files)
- Archive folder location
- A short confirmation that the cleanup is complete

## Result

- An "Archive" folder is created in the room (or inside a specified folder).
- Drafts and old versions are moved out of the main working folders.
- Final documents remain easy to find.
- The user receives confirmation and can continue working in a clean project structure.
