# UpdateRoomsRoomIdsRequestDtoInteger
The rooms that are to go back to the default storage limit of the portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomIds** | [**List**](duplicate-request-dto-file-ids.md) | The rooms to reset, named by the identifiers that `GET api/2.0/files/rooms` reports. Only whole numbers are processed, so identifiers of rooms kept in a connected third-party account are skipped without an error. | [optional] [example: `[1, 2, 3]`] [nullable] |
