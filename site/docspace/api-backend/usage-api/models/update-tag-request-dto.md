# UpdateTagRequestDto
The parameters for renaming a custom room tag in the portal catalog.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **oldName** | **String** | The name of the tag to rename, matched against the catalog exactly as it is stored rather than searched for. Read the stored spelling from `GET api/2.0/files/tags`. | [required] [example: `Confidential`] [minLength: 0] [maxLength: 255] [nullable] |
| **newName** | **String** | The name to store instead. It has to be free: names are unique across the portal, so a name another tag already carries is refused, and merging two tags this way is not possible. | [required] [example: `Restricted`] [minLength: 0] [maxLength: 255] [nullable] |
