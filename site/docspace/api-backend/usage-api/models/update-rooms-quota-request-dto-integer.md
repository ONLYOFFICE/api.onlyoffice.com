# UpdateRoomsQuotaRequestDtoInteger
The rooms whose storage limit is to be changed, and the limit to give them.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomIds** | [**List**](duplicate-request-dto-file-ids.md) | The rooms to change, named by the identifiers that `GET api/2.0/files/rooms` reports. Only whole numbers are processed, so identifiers of rooms kept in a connected third-party account are skipped without an error. | [optional] [example: `[1, 2, 3]`] [nullable] |
| **quota** | **Long** (int64) | The storage each of the listed rooms may take, in bytes. It has to stay inside the portal own limit, and the per-room quota feature has to be on, otherwise nothing is changed. | [optional] [example: `10737418240`] |
