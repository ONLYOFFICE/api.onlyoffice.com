# InfoConfigDto
The facts the editor information panel shows about the open document.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **favorite** | **Boolean** | Whether the caller has this document among their favorites. It is empty when favorites do not apply - for an anonymous caller, for a guest, and for an encrypted document. | [optional] [example: `false`] [nullable] |
| **folder** | **String** | The place of the document as a readable path, its folders joined from the root downwards. It is empty in the embedded layout, which shows no such panel. | [optional] [example: `My documents \\ Reports`] [nullable] |
| **owner** | **String** | The display name of the owner of the document. It is empty for an anonymous session. | [optional] [example: `John Doe`] [nullable] |
| **sharingSettings** | [**List**](ace-short-wrapper.md) | Who the document is shared with, as the information panel lists it. An empty list means it is shared with nobody beyond its owner. | [optional] [example: `[]`] [nullable] |
| **type** | [**EditorType**](editor-type.md) | The layout the information panel is rendered for. | [optional] [enum: `0`, `1`, `2`] |
| **uploaded** | **String** | When the document was created on the portal, already formatted for reading in the culture of the caller rather than as a machine timestamp. | [optional] [example: `01/01/2026 12:00 PM`] [nullable] |
