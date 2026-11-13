# FileKeysWrittenDto
The outcome of issuing file keys.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **skippedUserIds** | **List** (uuid) | The recipients whose key was not stored, because they can no longer read the file. Empty when every key was stored. | [required] [example: `[9924256B-447C-4F19-9dbd-8ad8c39e8ff5]`] [nullable] |
