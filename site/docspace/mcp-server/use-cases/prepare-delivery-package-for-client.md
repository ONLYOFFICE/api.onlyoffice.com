# Prepare a delivery package for a client

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to collect final project files into a single "Delivery" folder and provide a shareable link to that folder.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Decide what should be included in the delivery package

Before sending a request, prepare the following details:

- **Room name** where the project files are stored
- **Which files should be delivered**, for example:
  - specific file names;
  - files from a specific folder (for example, "Deliverables");
  - files marked as final (if you use a naming convention such as "Final")
- **Delivery folder name**, for example:
  - "Delivery"
  - "Delivery - February 2026"
  - "Delivery - Final"

This makes the request clear and helps ensure the delivery package contains the correct files.

### 2. Create a delivery folder

Create a dedicated folder for delivery files inside the project room.

**Example request:** In the "Website Redesign" room, create a folder named "Delivery".

What you should expect:
- The "Delivery" folder is created inside the room.
- The client confirms the folder location.

If you prefer to keep multiple delivery versions, include a dated folder name:

**Example request:** In the "Website Redesign" room, create a folder named "Delivery - 2026-02-17".

### 3. Collect the final files into the delivery folder

Move (or copy) the selected files into the delivery folder.

**Example request:** In the "Website Redesign" room, move all files from the "Deliverables" folder into the "Delivery" folder.

What you should expect:
- The requested files are collected into the "Delivery" folder.
- The response confirms which files were moved (or copied).

If you want to collect only specific files, list them explicitly:

**Example request:** Move "Project Brief.pdf" and "Final Design.pptx" into the "Delivery" folder in the "Website Redesign" room.

:::note
If you want to keep the original folder structure unchanged, specify that the files should be copied instead of moved.
:::

### 4. Verify the contents of the delivery folder

Request the folder contents to confirm that the delivery package is complete.

**Example request:** Show the contents of the "Delivery" folder in the "Website Redesign" room.

What you should expect in the response:
- A list of files in the delivery folder
- File names and basic details (depending on the client UI)

### 5. Provide a link to the delivery folder

Request a link that can be used to open the delivery folder in DocSpace.

**Example request:** Provide a link to the "Delivery" folder in the "Website Redesign" room.

What you should expect:
- A direct link to the delivery folder
- A short confirmation that the delivery package is ready

## Result

- A dedicated "Delivery" folder is created in the project room.
- Final files are collected into a single location.
- The delivery package is verified.
- The user receives a link to the delivery folder for sharing or review.
