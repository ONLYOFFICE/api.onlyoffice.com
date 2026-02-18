# Create a review folder and assign reviewers

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to organize a lightweight review process: create a dedicated "Review" folder, collect selected files into it, and grant reviewers the appropriate access role.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Decide what needs to be reviewed

Before sending a request, prepare:

- **Room name** where the project files are stored
- **Which files should be reviewed**, for example:
  - specific file names;
  - files from a specific folder (for example, "Deliverables")
- **Who should review the files** and what role they should have (usually Viewer)

This helps ensure the review folder contains the correct files and the correct reviewers.

### 2. Create a Review folder

Create a dedicated folder for the review process.

**Example request:** In the "Website Redesign" room, create a folder named "Review".

What you should expect:
- The "Review" folder is created inside the room.
- The client confirms the folder location.

If you want to keep multiple review rounds, use a versioned name:

**Example request:** In the "Website Redesign" room, create a folder named "Review - Round 1".

### 3. Collect the files for review

Move (or copy) the selected files into the review folder.

**Example request:** In the "Website Redesign" room, move the files from the "Deliverables" folder into the "Review" folder.

What you should expect:
- The requested files are collected into the "Review" folder.
- The response confirms which files were moved (or copied).

If you want to keep the originals unchanged, specify copying:

**Example request:** Copy the selected deliverables into the "Review" folder in the "Website Redesign" room.

### 4. Invite reviewers and assign roles

Invite reviewers and assign a role appropriate for review (usually Viewer).

**Example request:** Invite the Legal team as Viewers to the "Website Redesign" room.

What you should expect:
- Reviewers get access to open files in DocSpace.
- Reviewers cannot modify content if they are assigned the Viewer role.

If you want reviewers to focus only on the review materials, invite them to the room as Viewers and share a direct link to the "Review" folder:

**Example request:** Invite the Legal team as Viewers to the "Website Redesign" room, then provide a link to the "Review" folder.

### 5. Verify the review folder and provide a link

Request the folder contents and a link so reviewers can open it directly.

**Example request:** Show the contents of the "Review" folder and provide a link to it.

What you should expect in the response:
- A list of files collected for review
- (Optional) a link to open the folder in DocSpace

## Result

- A dedicated "Review" folder is created in the project room.
- Selected files are collected into a single location for review.
- Reviewers receive the appropriate access role.
- The user receives a link to the review folder for sharing.
