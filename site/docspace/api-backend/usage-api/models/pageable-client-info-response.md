# PageableClientInfoResponse
One page of consent-facing client info together with the next-page cursor.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **data** | [**List**](client-info-response.md) | The items on this page, at most as many as the requested limit. An empty array means there is nothing further to read. | [optional] |
| **limit** | **Integer** (int32) | The page size that was applied to this request, between 1 and 50. | [optional] [example: `50`] |
| **last\_client\_id** | **String** | The cursor to send back as last_client_id to ask for the next page, together with last_created_on. It is null when the page is empty. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **last\_created\_on** | **Date** (date-time) | The cursor to send back as last_created_on to ask for the next page, together with last_client_id. It is null when the page is empty. | [optional] [example: `2024-04-04T12:00:00Z`] |
