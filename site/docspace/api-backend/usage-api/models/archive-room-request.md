# ArchiveRoomRequest
The body of a room archiving request.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **deleteAfter** | **Boolean** | Whether the record of the finished job may be dropped without being read. With it off the record waits for the first poll, which is what lets the caller learn how the move ended; it has no effect on the room itself. | [optional] [example: `false`] |
