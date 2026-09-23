# aiVectorizationStartTask

Referenced types are defined in the [full reference](../aichat.md).

> aiVectorizationStartTask_200_response aiVectorizationStartTask(aiVectorizationStartTask\_request)

`POST /api/2.0/ai/vectorization/tasks`

Start a vectorization task

Queues the indexing of the portal files named in the body so their contents can be retrieved during a chat round. The body is proxied unchanged to the DocSpace AI service, which validates it and owns the job. Indexing is asynchronous and fire-and-forget: the answer acknowledges the request without carrying a job handle, so there is nothing to poll and progress is not reported here. The embedding provider used is the one in `GET api/2.0/ai/config/vectorization`, and changing that setting does not re-index anything already indexed - queue it again for that.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiVectorizationStartTask\_request** | body | [**aiVectorizationStartTask_request**](../aichat.md#model-aivectorizationstarttask-request-body) | The files to index, proxied unchanged to the DocSpace AI service, which owns and validates the shape. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the indexing was queued. It carries no job handle, so there is nothing to poll. | [**aiVectorizationStartTask_200_response**](../aichat.md#model-aivectorizationstarttask-200-response) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**aiVectorizationStartTask_200_response**](../aichat.md#model-aivectorizationstarttask-200-response)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIWebSearchApi
