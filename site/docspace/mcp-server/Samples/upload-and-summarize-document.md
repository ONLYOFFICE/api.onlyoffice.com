# Upload a document to a room folder and generate a structured summary

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to upload a document to a specific room folder and generate a structured summary based on the document content.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](/docspace/mcp-server/connecting-clients/) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](/docspace/mcp-server/) and choose one of the installation modes:
- use the public [Remote Server](/docspace/mcp-server/installation/remote-server/) if your client supports remote MCP servers;
- run the [Local Server](/docspace/mcp-server/installation/local-server/) if your client requires a locally hosted MCP server.

## Script execution steps

### 1. Prepare the destination and the expected output

Before sending a request, decide:

- **Room name** where the document should be stored
- **Folder name** inside the room (for example, "Legal" or "Contracts")
- **Document** you want to upload
- **Summary format** you want to receive (bullet points, short paragraph, sections)

This makes the request clear and helps avoid follow-up questions.

### 2. Send a request to upload the document

In your MCP client, send a request that includes the room name, folder name, and what file you are uploading.

**Example request:** Upload the attached contract to the "Legal" folder in the "Website Redesign" room.

What you should expect:
- The client locates the target room and folder.
- The document is uploaded to DocSpace.
- The client confirms the upload result (file name and destination folder).

If the folder might not exist yet, include it in the request:

**Example request:** Upload the attached contract to the "Legal" folder in the "Website Redesign" room. Create the folder if it does not exist.

### 3. Request content extraction

To summarize a document, the MCP client needs to access its textual content.

**Example request:** Extract the text content of the uploaded document.

What you should expect:
- The client reads the document content and prepares it for further processing.
- If the document contains mostly images or scanned pages, text extraction may be limited.

### 4. Generate a structured summary

Request a summary in a clear format so it is easy to reuse (for example, to share with a team).

**Example request:** Summarize the document in bullet points grouped by "Obligations", "Deadlines", and "Risks".

What you should expect:
- A structured summary based on the extracted content.
- A clear separation of key points, deadlines, and any risk-related clauses.

If you need a shorter output, specify it:

**Example request:** Summarize the document in 5 bullet points, focusing only on deadlines and responsibilities.

### 5. Verify the outcome

Request a short confirmation that the file is stored correctly and the summary is complete.

**Example request:** Confirm the document is stored in "Website Redesign" → "Legal", and provide the file link.

What you should expect in the response:
- Room and folder name where the file is stored
- File name
- (Optional) a direct link to open the file in DocSpace
- The generated summary (if requested)

---

## Result

- The document is uploaded to the correct room folder in DocSpace.
- The document content is extracted as text.
- A structured summary is generated in the requested format.
- The user receives confirmation and can continue the workflow (share, review, or store the output).
