# ChangeOwnerRequestDto
The rooms and files to hand over, together with the account that takes them.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **folderIds** | [**List**](batch-request-dto-file-ids.md) | The rooms to hand over, identified as `GET api/2.0/files/rooms` returns them - a number for a room stored on the portal and a string for one that lives on a connected third-party account. Only rooms belong here; a folder inside a room is refused. | [optional] [example: `[1, 2, 3]`] [nullable] |
| **fileIds** | [**List**](batch-request-dto-file-ids.md) | The files to hand over, identified as a listing operation returns them - a number for a file stored on the portal and a string for one on a connected third-party account. Only a file kept in the portal's common section is accepted. | [optional] [example: `[7, 8]`] [nullable] |
| **userId** | **UUID** (uuid) | The account that becomes the owner of every listed entry. It has to be an active member allowed to manage rooms, so a deactivated account, a guest or a plain member is rejected, and for a private room the account must have set up its encryption keys beforehand. | [required] [example: `9924256a-739c-462b-af15-e652a3b1b6eb`] |
