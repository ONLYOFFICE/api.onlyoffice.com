# CopyAsJsonElement
The parameters of a file copy that may change the format on the way.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **destTitle** | **String** | The title of the copy, extension included. That extension decides the format: the same one as the source copies the content as it is, a different one has it converted first. | [required] [example: `Document Copy.docx`] [nullable] |
| **destFolderId** | [**CopyAsJsonElement_destFolderId**](copy-as-json-element-dest-folder-id.md) |  | [required] |
| **enableExternalExt** | **Boolean** | Whether the extension of the new title may be one the portal does not edit itself. | [optional] [example: `false`] |
| **password** | **String** | The password that opens the source document, for a file that is protected by one. | [optional] [example: `password123`] [nullable] |
| **toForm** | **Boolean** | Whether the copy is to become a PDF form rather than a plain document, which the conversion supports for the text formats it can read. | [optional] [example: `false`] |
