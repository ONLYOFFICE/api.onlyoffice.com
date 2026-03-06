# Analyze an Excel file and generate an executive summary report

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to analyze an Excel file stored in DocSpace and generate a short executive summary report. This is useful when you need key insights from a spreadsheet without reviewing the entire file manually.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Choose the Excel file and define the goal

Before sending a request, decide:

- **Room name** where the spreadsheet is stored
- **Folder name** (optional) if you want to narrow the search
- **Excel file name**, for example "Q4 Budget.xlsx" or "Sales Report.xlsx"
- **What you want to learn**, for example:
  - key totals and breakdowns;
  - month-over-month change;
  - unusual spikes or drops;
  - missing values or possible data issues

This helps the summary focus on what matters for your task.

### 2. Locate the spreadsheet in DocSpace

Send a request that clearly specifies the room and the file.

**Example request:** In the "Finance" room, find the file named "Q4 Budget.xlsx".

What you should expect:
- The room is located.
- The file is found in DocSpace.
- If multiple files match the name, you may be asked to select the correct one.

If you want to narrow the search to a folder, include it:

**Example request:** In the "Finance" room, find "Q4 Budget.xlsx" in the "Reports" folder.

### 3. Request spreadsheet analysis

Ask for a structured analysis that matches your goal.

**Example request:** Analyze the spreadsheet and summarize the key totals, largest categories, and the main changes compared to previous months.

What you should expect:
- A short summary of the main numbers.
- A list of the most important contributors (for example, top categories or highest costs).
- Notable changes or trends.

If you want the analysis to include data quality checks, specify it:

**Example request:** Analyze the spreadsheet and highlight missing values, outliers, and possible data issues.

### 4. Generate an executive summary report document

Request a report in a document format that can be shared with others.

**Example request:** Create a one-page executive summary report with sections "Overview", "Key insights", and "Risks", and save it as "Q4 Budget Summary.docx".

What you should expect:
- A clean, readable report based on the spreadsheet analysis.
- A clear structure suitable for sharing.

If you need a shorter output, specify the size:

**Example request:** Create an executive summary report in no more than 10 bullet points and save it as "Q4 Budget Summary.docx".

### 5. Save the report to DocSpace and confirm the result

Request that the report is saved to a specific folder and provide a link.

**Example request:** Save the report to the "Reports" folder in the "Finance" room and provide a link to the file.

What you should expect in the response:
- Report file name
- Save location (room and folder)
- (Optional) a direct link to open the report in DocSpace
- A short confirmation that the report is ready

## Result

- The Excel file is located in DocSpace.
- Key insights and data issues are identified from the spreadsheet.
- A structured executive summary report is generated as a document.
- The report is saved to DocSpace and can be shared with the team.
