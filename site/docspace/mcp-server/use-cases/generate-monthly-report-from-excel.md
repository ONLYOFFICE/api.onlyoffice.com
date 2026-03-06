# Generate a monthly report document from an Excel file

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to analyze a monthly metrics spreadsheet and generate a short report document saved to DocSpace.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Choose the spreadsheet and the report format

Before sending a request, decide:

- **Room name** where the spreadsheet is stored
- **Excel file name**, for example "February Metrics.xlsx"
- **Report length**, for example:
  - one page;
  - up to 10 bullet points;
  - a short report with sections
- **Output file name**, for example "Monthly report - 2026-02.docx"
- **Where to save the report**, for example the same folder as the spreadsheet

This helps generate a report that is easy to share and easy to store.

### 2. Locate the spreadsheet in DocSpace

Send a request that specifies the room and the file name.

**Example request:** In the "Reports" room, find the file named "February Metrics.xlsx".

What you should expect:
- The file is located in DocSpace.
- If multiple files match the same name, you may be asked to select the correct one.

### 3. Generate the monthly report document

Request a short monthly report based on the spreadsheet content.

**Example request:** Analyze the spreadsheet and create a one-page monthly report with sections "Overview", "Key metrics", and "Highlights". Save it as "Monthly report - 2026-02.docx".

What you should expect:
- Key metrics and trends are summarized in a readable format.
- The report uses a clear structure suitable for sharing.

If you prefer a shorter output, specify it:

**Example request:** Create a monthly report in 10 bullet points and save it as "Monthly report - 2026-02.docx".

### 4. Save the report to DocSpace and provide a link

Request that the report is saved to the required location and provide a link.

**Example request:** Save the report in the same folder as "February Metrics.xlsx" and provide a link to the document.

What you should expect in the response:
- Report file name
- Save location (room and folder)
- (Optional) a direct link to open the report in DocSpace
- A short confirmation that the report is ready

## Result

- The monthly metrics spreadsheet is analyzed.
- A short monthly report document is generated.
- The report is saved to DocSpace and can be shared with stakeholders.
