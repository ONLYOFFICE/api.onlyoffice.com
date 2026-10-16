# ErrorApiResponse
The error body returned with every failed request.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **status** | **Integer** (int32) | The response status flag. Always 1 on an error, as opposed to 0 on success. | [optional] |
| **statusCode** | **Integer** (int32) | The HTTP status code of the response, repeated in the body. | [optional] |
| **error** | [**ErrorApiResponse_error**](error-api-response-error.md) |  | [optional] |
