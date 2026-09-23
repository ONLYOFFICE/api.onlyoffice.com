# aiThreadsRegenerateTitle

Referenced types are defined in the [full reference](../aichat.md).

> aiThreadsRegenerateTitle_200_response aiThreadsRegenerateTitle(aiThreadsRegenerateTitle\_request)

`POST /api/2.0/ai/threads/regenerate-title`

Regenerate title

Asks the model to produce a title from the thread's first user message, stores it, and returns the new title. Both `threadId` and a resolved `profile` object are required; a thread with no user message yet has nothing to title and fails. This costs a model call, unlike `POST api/2.0/ai/threads/rename`, which just stores the string it is given. An `entityMeta` sent with the request is only read for its `entityId` hint - the source itself is resolved server-side under the caller's credentials, so a client cannot attribute the call to somebody else's room.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsRegenerateTitle\_request** | body | [**aiThreadsRegenerateTitle_request**](../aichat.md#model-aithreadsregeneratetitle-request-body) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The newly generated title, already stored on the thread. | [**aiThreadsRegenerateTitle_200_response**](../aichat.md#model-aithreadsregeneratetitle-200-response) | - |
| **400** | `threadId` is missing. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**aiThreadsRegenerateTitle_200_response**](../aichat.md#model-aithreadsregeneratetitle-200-response)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
