# HistoryDto
One record of the activity log of a file or a folder.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The identifier of the record, which tells two records of the same action apart and stays stable as long as the portal keeps the log. | [required] [example: `123`] |
| **action** | [**HistoryAction**](history-action.md) | What happened - the kind of event the record stands for, such as a file being uploaded, renamed, moved or shared - with the key a client can key its own wording off. | [required] |
| **initiator** | [**EmployeeDto**](employee-dto.md) | Who caused the event. For an event caused by a visitor following an external link only the name they gave is filled in, the account fields staying empty. | [required] |
| **date** | [**ApiDateTime**](api-date-time.md) | When the event happened, written with the offset of the portal's time zone. | [required] |
| **data** | [**HistoryData**](history-data.md) | The history data. Absent for actions that carry no payload of their own - changing a room's logo, icon colour or cover, whose interpreter returns no data (see `RoomLogoChangedInterpreter`). It used to be declared required, which put it in the OpenAPI document's required list while the null-dropping serializer left it out of the response, so a generated client threw on any history page holding one of those entries. | [optional] |
| **related** | [**List**](history-dto.md) | The records folded into this one because they belong to the same action, the separate files of one upload for instance. It is empty when the record stands alone, and the records inside it carry no further nesting. | [optional] [example: `[{id=124, action=0}]`] [nullable] |
