# FormResultsDto
One completed copy of a form, with the values that were entered into it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **createOn** | **Date** (date-time) | When the portal recorded this copy, in UTC: the moment the filled copy was completed and its data indexed, not the moment the form itself was made. | [optional] [example: `2025-01-01T00:00:00`] |
| **formsData** | [**List**](forms-item-data.md) | The values that were entered into this copy, one entry per field, preceded by an entry keyed `FormNumber` that carries the number of the copy and is what the submissions are ordered by. Fields holding a picture or a signature are left out of the record, so a field missing here was not necessarily left blank. | [optional] [example: `[{key=field1, value=Answer}]`] [nullable] |
