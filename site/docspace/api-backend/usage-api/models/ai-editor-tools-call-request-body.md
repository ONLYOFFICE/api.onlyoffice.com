# aiEditorToolsCall request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Name of the tool to run, as listed by the tools endpoint. A name that is unknown or excluded from the editor is rejected with 400. | [required] [example: `docspace_get_folder`] |
| **arguments** | **Map** | Arguments for the tool, shaped by that tool's own input schema. Treated as empty when it is not an object. | [optional] [example: `{"folderId":"1234"}`] |
| **entityId** | **String** | Room the call is scoped to. Left out for a portal-wide call. | [optional] [example: `1234`] |
