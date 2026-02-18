# Generate a digest from all documents in a folder

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to generate a structured digest from all documents stored in a selected folder. The digest helps you review folder content without opening each file manually.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Choose the folder you want to summarize

Before sending a request, decide:

- **Room name** where the folder is located
- **Folder name** you want to summarize (for example, "Legal", "Brief", or "Deliverables")
- **Digest format** you want to receive, for example:
  - grouped by topics;
  - grouped by document;
  - a short executive summary followed by details

If you need links in the output, include that in the request.

### 2. Request a digest for the folder

Send a request that clearly specifies the room and folder.

**Example request:** Generate a digest for all documents in the "Legal" folder of the "Website Redesign" room.

What you should expect:
- The folder is located in DocSpace.
- The client identifies the documents included in the digest.

If multiple folders match the same name, you may be asked to select the correct one.

### 3. Specify the digest structure

Ask for a structure that matches your goal.

**Example request:** Group the digest by topics and include a short summary for each document.

What you should expect:
- The output is structured and easy to scan.
- Each section is based on the document content.

If you want a shorter digest, specify a limit:

**Example request:** Provide an executive summary in 10 bullet points and list the key documents used.

### 4. Include file links (optional)

If you want the digest to reference original documents, request links.

**Example request:** Include links to each document in the digest.

What you should expect:
- Each document section includes a link to the corresponding file in DocSpace (depending on client UI and link support).

### 5. Verify which documents were used

Request a confirmation of the processed documents to ensure nothing important was missed.

**Example request:** List all documents that were included in the digest.

What you should expect in the response:
- A list of file names from the target folder
- (Optional) file links, if supported by your MCP client

:::note
If a document is a scanned file or contains mostly images, the available text for summarization may be limited.
:::

## Result

- All documents in the selected folder are processed.
- A structured digest is generated in the requested format.
- The output can include file links and a list of documents used (optional).
- The user can quickly review the folder content and decide what to read or share next.
