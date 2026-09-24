# LockFileParameters
The lock state a file is to be put into.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **lockFile** | **Boolean** | The state to reach: `true` locks the file, which blocks editing, renaming and deleting for everybody but the account that locked it and the room admins, and drops the others out of a running editing session; `false` releases the lock. | [optional] [example: `true`] |
