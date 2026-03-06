# Generate a project presentation from documents in a folder

This example demonstrates how to use the ONLYOFFICE DocSpace MCP Server from an MCP-compatible client to generate a project presentation based on documents stored in a DocSpace folder. This is useful when you want to quickly turn project materials into a shareable slide deck for a meeting or status update.

## Before you start

Please make sure your MCP client is configured to use the DocSpace MCP Server so it can access your DocSpace portal and perform actions on your behalf.
You need to follow the [Connecting clients](../connecting-clients/connecting-clients.md) guide to add the DocSpace MCP Server to your client configuration and provide the required credentials.

If you are not sure which server option to use, start from the [DocSpace MCP Server overview](../mcp-server.md) and choose one of the installation modes:
- use the public [Remote Server](../installation/remote-server.md) if your client supports remote MCP servers;
- run the [Local Server](../installation/local-server.md) if your client requires a locally hosted MCP server.

## Workflow steps

### 1. Choose the source folder and define the presentation format

Before sending a request, decide:

- **Room name** where the project materials are stored
- **Folder name** that contains the source documents (for example, "Brief" or "Deliverables")
- **Number of slides** (optional), for example 8-12
- **Presentation purpose**, for example:
  - project kickoff;
  - weekly update;
  - stakeholder review
- **Output file name**, for example "Project presentation.pptx"

This helps generate a presentation with the right length and structure.

### 2. Locate the folder with source documents

Send a request that specifies the room and the folder.

**Example request:** In the "Website Redesign" room, use the documents from the "Brief" folder as the source for a project presentation.

What you should expect:
- The target folder is located.
- Documents inside the folder are identified as the input for the presentation.

If multiple folders match the same name, you may be asked to select the correct one.

### 3. Generate the slide structure

Request a clear structure so the presentation is consistent and easy to present.

**Example request:** Create a 10-slide project presentation with the following structure: Title, Agenda, Project overview, Goals, Scope, Timeline, Deliverables, Risks, Next steps, Summary.

What you should expect:
- A slide outline with titles and key bullet points.
- Content based on the folder documents.

If you want a shorter presentation, specify it:

**Example request:** Create an 8-slide presentation focusing on project overview, goals, timeline, deliverables, and next steps.

### 4. Create the presentation file

Request the presentation to be generated as a `.pptx` file.

**Example request:** Generate the presentation as "Project presentation.pptx".

What you should expect:
- A `.pptx` file is created based on the slide outline and extracted content.

:::note
If the source folder contains scanned files or documents with mostly images, the available text for slide content may be limited.
:::

### 5. Save the presentation to DocSpace and confirm the result

Request that the file is saved to a specific folder and provide a link.

**Example request:** Save "Project presentation.pptx" to the "Deliverables" folder in the "Website Redesign" room and provide a link to the file.

What you should expect in the response:
- Presentation file name
- Save location (room and folder)
- (Optional) a direct link to open the file in DocSpace
- A short confirmation that the presentation is ready

## Result

- Documents from the selected folder are used as the input.
- A structured project presentation is generated in presentation format.
- The presentation is saved to DocSpace and can be shared with the team or stakeholders.
