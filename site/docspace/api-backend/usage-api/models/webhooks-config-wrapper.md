# WebhooksConfigWrapper
The successful API response containing the WebhooksConfigDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**WebhooksConfigDto**](webhooks-config-dto.md) | The WebhooksConfigDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | How many items this response carries: the length of the page for a list, 1 for a single object | [optional] |
| **total** | **Long** (int64) | How many items the whole list holds across all pages, for working out how many pages to request. Sent only by the operations that page their results, and left out of every other response | [optional] |
| **links** | [**List**](get-portal-prices-200-response-links-item.md) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |
