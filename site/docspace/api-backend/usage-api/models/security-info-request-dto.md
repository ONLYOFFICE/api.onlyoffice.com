# SecurityInfoRequestDto
The entries whose sharing rights are being changed, and the rights to apply to them.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **folderIds** | [**List**](duplicate-request-dto-file-ids.md) | The folders and rooms whose rights are being changed, identified as a listing operation returns them - a number on the portal, a string on a connected third-party account. | [optional] [example: `[1, 2, 3]`] [nullable] |
| **fileIds** | [**List**](duplicate-request-dto-file-ids.md) | The files whose rights are being changed, identified as a listing operation returns them - a number on the portal, a string on a connected third-party account. | [optional] [example: `[7, 8]`] [nullable] |
| **share** | [**List**](file-share-params.md) | One record per account or group whose rights are being set, each naming the subject and the level it gets on all of the listed entries; a level of `None` takes the access away. An empty collection makes the call change nothing. | [optional] [example: `[{access=2, shareTo=9924256a-739c-462b-af15-e652a3b1b6eb}]`] [nullable] |
| **notify** | **Boolean** | Set to true to have every account named in `share` emailed about the access it just received; false changes the rights without telling anyone. | [optional] [example: `true`] |
| **sharingMessage** | **String** | The text put into that email, ignored while `notify` is false. Markup is stripped before sending, so only the plain text of the value survives. | [optional] [example: `You have been granted access to the file`] [minLength: 0] [maxLength: 255] [nullable] |
