---
description: Summarize the current chat and save the summary text to DocSpace.
tags: ["DocSpace", "MCP Server", "AI"]
---

# Summarize chat and save to DocSpace

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to generate a summary from the text messages in the current chat and save that summary as a text file in a specific DocSpace room folder.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../getting-started/clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../getting-started/index.md) and choose one of the installation modes:

- use the public [Remote Server](../getting-started/installation.md#access-via-the-remote-docspace-mcp-server) if your client supports remote MCP servers;
- run the [Local Server](../getting-started/installation.md#access-via-a-local-docspace-mcp-server) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Define the destination and output format

Before sending a request, decide:

- **Room name** where the summary should be stored
- **Folder name** inside the room (for example, "Legal" or "Contracts")
- **Summary format** you want to receive (bullet points, short paragraph, or sections)
- **Output file name** for the summary text

This makes the request clear and reduces the need for follow-up questions.

### 2. Generate a summary from the current chat content

Ask the client to summarize the current conversation text in a clear structure.

**Example request:** Summarize this chat in bullet points grouped by "Decisions", "Open questions", and "Next steps".

What you should expect:

- A structured summary generated from the current chat content.
- Clear sections that are easy to share with a team.

If you need a shorter output, specify it:

**Example request:** Summarize this chat in 5 bullet points focused only on action items.

### 3. Save the summary text to DocSpace

Send a request to save the generated summary as a text file in the target room folder.

**Example request:** Save this summary as "meeting-summary-YYYY-MM-DD.md" in the "Legal" folder of the "Website Redesign" room.

What you should expect:

- The target room and folder are resolved.
- A text file with the summary is created in DocSpace.
- The save result is confirmed (file name and destination folder).

### 4. Verify the outcome

Request a short confirmation that the summary file is stored correctly.

**Example request:** Confirm the summary file is stored in the "Legal" folder of the "Website Redesign" room, and provide the file link.

What you should expect in the response:

- Room and folder name where the file is stored
- File name
- (Optional) a direct link to open the file in DocSpace

## Result

- A structured summary of the current chat is generated in the requested format.
- The summary text is saved to the correct room folder in DocSpace.
- The user receives confirmation and can continue the workflow (share, review, or store the output).
