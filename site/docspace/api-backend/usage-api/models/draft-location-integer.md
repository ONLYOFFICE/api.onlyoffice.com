# DraftLocationInteger
Where the caller's own filling draft of a form is kept.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **folderId** | **Integer** (int32) | The folder holding the draft: the sub-folder that the room for filling keeps for drafts of this particular form. | [optional] [example: `10`] |
| **folderTitle** | **String** | The title of that folder, which the portal takes from the form itself when the form is released for filling. | [optional] [example: `Application`] [nullable] |
| **fileId** | **Integer** (int32) | The draft itself - the copy the caller fills in, not the original form, and the identifier to pass to the file operations while filling. | [optional] [example: `123`] |
| **fileTitle** | **String** | The title of the draft, which the portal builds from the name of the person filling it and the name of the form. Null when the draft the record points at no longer exists. | [optional] [example: `John Doe - Application.pdf`] [nullable] |
