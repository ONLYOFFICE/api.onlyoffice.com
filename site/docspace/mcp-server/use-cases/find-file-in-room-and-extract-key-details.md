# Find a file in a room and extract key details

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to locate a file in a room and extract specific details from its content. This is useful when you know what information you need, but do not want to open and review multiple documents manually.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Specify what you are looking for

Before sending a request, decide:

- **Room name** where the file should be located
- **File name or keyword**, for example "Contract" or "Proposal"
- **Which file to prefer** if several files match, for example:
  - the most recent file;
  - a file from a specific folder, such as "Legal"
- **What details to extract**, for example:
  - payment terms;
  - deadlines;
  - responsibilities;
  - key deliverables

This makes the search predictable and ensures the output matches your goal.

### 2. Request a file search

Send a request that specifies the room and the file name (or keyword).

**Example request:** In the "Website Redesign" room, find the latest file named "Contract".

What you should expect:
- The room is located.
- Matching files are found.
- If several files match, you may be asked to select the correct one.

If you want to limit the search to a folder, specify it:

**Example request:** In the "Website Redesign" room, find the latest file named "Contract" in the "Legal" folder.

### 3. Request the required details from the file

After the file is identified, request the exact information you need.

**Example request:** Extract payment terms and deadlines from the file and summarize them in bullet points.

What you should expect:
- The requested details are extracted from the document content.
- The output is returned in the requested format.

If you want the output to be short and easy to reuse, specify a structure:

**Example request:** Extract payment terms and deadlines and format the result as two sections: "Payment" and "Deadlines".

:::note
If the document is a scanned file or contains mostly images, the available text for extraction may be limited.
:::

### 4. Verify the source file

Request confirmation of which file was used, so you can verify the result.

**Example request:** Confirm which file was used and provide a link to it.

What you should expect in the response:
- File name
- Location (room and folder)
- (Optional) a direct link to open the file in DocSpace
- The extracted details (if the client returns them in the same response)

## Result

- The requested file is located in the specified room (and folder, if provided).
- Key details are extracted from the document content.
- The user receives a structured output and can open the source file for verification.
