# aiEditorToolsList 200 response.tools item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Tool name, as it is passed back to the call endpoint. | [required] [example: `docspace_search_files`] |
| **description** | **String** | What the tool does, empty when the server declares nothing. | [required] |
| **inputSchema** | **Map** | JSON Schema of the tool arguments. | [required] |
| **requireApproval** | **Boolean** | Whether the editor has to ask the user before running the tool. Read-only operations arrive with this off. | [required] [example: `true`] |
