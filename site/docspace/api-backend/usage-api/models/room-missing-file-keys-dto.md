# RoomMissingFileKeysDto
One user who cannot open some encrypted files of a private room yet.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userId** | **UUID** (uuid) | The user the keys are missing for. | [required] [example: `9924256B-447C-4F19-9dbd-8ad8c39e8ff5`] |
| **fileIds** | **List** (int32) | The encrypted files that hold no key for this user, anywhere in the room. Never empty: a user who has every key is not listed at all. | [required] [example: `[1234, 1235]`] [nullable] |
