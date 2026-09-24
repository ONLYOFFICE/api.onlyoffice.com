# EditHistoryChangesWrapper
One single change inside a saved revision of a file.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **user** | [**EditHistoryAuthor**](edit-history-author.md) | The account that made this change, as the editing service reported it; an account it could not name is reported as a guest. | [optional] |
| **created** | [**ApiDateTime**](api-date-time.md) | When this change was made, written with the offset of the portal's time zone rather than as plain UTC. | [optional] |
| **documentSha256** | **String** | The SHA-256 hash of the document as it stood after this change, where the editing service recorded one, so that a client can check a stored copy against the change it claims to hold. Empty when the change record carries no hash. | [optional] [example: `9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08`] [nullable] |
