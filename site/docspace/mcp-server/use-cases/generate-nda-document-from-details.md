# Generate an NDA document from provided details

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to generate an NDA document from provided details and save it to a DocSpace folder. This is useful when you want to quickly create a consistent document without writing it manually.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Prepare the NDA details

Before sending a request, collect the information you want to include in the document:

- **Disclosing party** (company name)
- **Receiving party** (company name)
- **Effective date**
- **Term** (for example, 12 months)
- **Purpose** (optional, short description of why information is shared)
- **Output file name**, for example "NDA - Aurora Design - 2026-02-17.docx"
- **Destination**, for example a "Legal" folder in a project room

This ensures the generated document matches your real use case.

### 2. Request document generation

Send a request that includes the details and the desired output file name.

**Example request:** Create an NDA document between "Aurora Design Ltd." and "Northwind Studio" with an effective date of 2026-02-17 and a 12-month term. Save it as "NDA - Aurora Design - 2026-02-17.docx".

What you should expect:
- The NDA text is generated using the provided details.
- The document is created as a `.docx` file.

If you want to include an optional purpose clause, specify it:

**Example request:** Create an NDA between "Aurora Design Ltd." and "Northwind Studio" for sharing design materials. Effective date: 2026-02-17. Term: 12 months. Save it as "NDA - Aurora Design - 2026-02-17.docx".

### 3. Save the document to a room folder in DocSpace

Specify where the document should be stored in DocSpace.

**Example request:** Save the document to the "Legal" folder in the "Website Redesign" room and provide a link to the file.

What you should expect in the response:
- Document file name
- Save location (room and folder)
- (Optional) a direct link to open the document in DocSpace
- A short confirmation that the document is ready

### 4. Verify the result

Request confirmation that the document is stored correctly.

**Example request:** Confirm the document is saved in the "Legal" folder of the "Website Redesign" room.

What you should expect:
- A short confirmation of the final location
- (Optional) a link to the document

## Result

- An NDA document is generated from the provided details.
- The document is saved to the selected folder in DocSpace.
- The user receives a link and can review or share the document.
