# Create a task tracker spreadsheet from meeting notes

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to convert meeting notes into a structured task tracker spreadsheet saved to DocSpace. This is useful when you want action items in a clear format without rewriting notes manually.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Prepare the meeting notes and the tracker format

Before sending a request, decide:

- **Room name** where the notes file is stored (or where you want to upload it)
- **Folder name** to store notes and results (optional)
- **Notes source**, for example:
  - an existing file in DocSpace; or
  - a file you attach in your request
- **Tracker columns**, for example:
  - Task
  - Owner
  - Due date
  - Status
  - Notes (optional)
- **Output file name**, for example "Task tracker - 2026-02-17.xlsx"

This ensures the spreadsheet matches the way your team tracks work.

### 2. Provide the meeting notes

If the notes are already stored in DocSpace, reference the file.

**Example request:** In the "Website Redesign" room, use the file "Meeting notes - 2026-02-17.docx" from the "Brief" folder.

What you should expect:
- The file is located in DocSpace.
- The content is used as the input for task extraction.

If you want to upload notes instead, include that in the request:

**Example request:** Upload the attached meeting notes to the "Brief" folder in the "Website Redesign" room.

### 3. Extract action items

Request a structured list of action items based on the notes.

**Example request:** Extract action items from the meeting notes and identify the owner and due date for each item.

What you should expect:
- A structured list of tasks is produced from the notes.
- If owners or due dates are not explicit, they may be left blank.

:::note
If some items do not include an owner or due date, you can request a draft suggestion, but you should review it before sharing.
:::

### 4. Generate the task tracker spreadsheet

Request a spreadsheet with one row per action item and the selected columns.

**Example request:** Create an Excel file named "Task tracker - 2026-02-17.xlsx" with columns "Task", "Owner", "Due date", and "Status". Use one row per action item.

What you should expect:
- A new spreadsheet is generated from the extracted tasks.
- The table is ready to be edited and updated by the team.

If you want default values for status, specify it:

**Example request:** Set the initial status to "To do" for all tasks.

### 5. Save the spreadsheet to DocSpace and provide a link

Request that the tracker is saved to a specific folder and provide a link.

**Example request:** Save the spreadsheet to the "Deliverables" folder in the "Website Redesign" room and provide a link to the file.

What you should expect in the response:
- Spreadsheet file name
- Save location (room and folder)
- (Optional) a direct link to open the spreadsheet in DocSpace
- A short confirmation that the tracker is ready

## Result

- Meeting notes are converted into structured action items.
- A task tracker spreadsheet is generated in `.xlsx` format.
- The spreadsheet is saved to DocSpace and can be shared with the team.
