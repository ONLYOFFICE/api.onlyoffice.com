# PageableModificationResponse
One page of results ordered by modification time, together with the cursor that asks for the next page.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **data** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **limit** | **Integer** (int32) | The page size that was applied to this request, between 1 and 50. | [optional] [example: `50`] |
| **last\_modified\_on** | **Date** (date-time) | The cursor to send back as last_modified_on to ask for the next page. It is null when the page is empty. | [optional] [example: `2024-04-04T12:00:00Z`] |
