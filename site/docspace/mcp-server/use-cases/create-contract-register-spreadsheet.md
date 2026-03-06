# Create a contract register spreadsheet from documents in a folder

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to create a contract register spreadsheet from multiple contract files stored in a DocSpace folder. This is useful when you have many contracts and want a single Excel table for tracking.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Choose the source folder and define the table fields

Before sending a request, decide:

- **Room name** where the contracts are stored
- **Folder name** that contains the contract files (for example, "Contracts")
- **Which fields should be extracted** into the table, for example:
  - Company (counterparty)
  - Contract title or type
  - Start date
  - End date (or term)
  - Amount and currency (if applicable)
  - Status (active / expired / draft), if it can be determined
- **Output file name**, for example "Contract register.xlsx"
- **Where to save the spreadsheet**, for example the same folder as the contracts

This ensures the register contains the exact columns you need.

### 2. Locate the contract folder in DocSpace

Send a request that specifies the room and folder where the contracts are stored.

**Example request:** In the "Legal" room, use all documents from the "Contracts" folder to create a contract register spreadsheet.

What you should expect:
- The target folder is located.
- All files in the folder are identified as input documents.
- If multiple folders match the same name, you may be asked to select the correct one.

### 3. Extract key fields from each contract

Request data extraction using the fields you defined.

**Example request:** For each contract in the folder, extract: Company, contract type, start date, end date, and amount.

What you should expect:
- Each document is processed.
- A structured set of values is produced for each contract.

:::note
If a contract is a scanned file or contains mostly images, the available text for extraction may be limited.
:::

### 4. Generate the Excel spreadsheet

Request a new spreadsheet with a row for each contract and a column for each field.

**Example request:** Create an Excel file named "Contract register.xlsx" with one row per contract and the extracted fields as columns.

What you should expect:
- A table is created in spreadsheet format.
- Each row references a contract file.

If you want the table to include links to the source files, specify it:

**Example request:** Include a link to the source contract file in each row.

### 5. Save the spreadsheet to DocSpace and confirm the result

Request that the spreadsheet is saved to the required folder and provide a link.

**Example request:** Save "Contract register.xlsx" to the "Contracts" folder in the "Legal" room and provide a link to the file.

What you should expect in the response:
- Spreadsheet file name
- Save location (room and folder)
- (Optional) a direct link to open the spreadsheet in DocSpace
- A short confirmation that the register is ready

## Result

- All contract documents in the selected folder are processed.
- Key contract details are extracted into structured fields.
- A contract register spreadsheet is generated and saved to DocSpace.
- The user gets a single Excel table for tracking contracts and their key details.
