# aiThreadsCreate

> AiThread aiThreadsCreate(aiThreadsCreate\_request)

`POST /api/2.0/ai/threads/create`

Create a chat thread

Creates a chat thread with a title supplied by the caller and returns it. A scoped thread requires that `entityId` names a room the caller can open, and a model has to resolve for the scope - an explicit `profileId`, or the room's `Chat` assignment - otherwise there is nothing to run the thread against and the call answers 404. In an agent room the agent's own assignment overrides any `profileId` sent with the request, so a thread there always starts on the agent's model. Use `POST api/2.0/ai/threads/open-or-create` instead when the title should be generated from the first user message.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsCreate\_request** | body | [**aiThreadsCreate_request**](../../models/ai-threads-create-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created thread. | [**AiThread**](../../models/ai-thread.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The `entityId` names a room the caller cannot open, or no live AI profile is bound to it, so there is no model to run the thread against. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiThread**](../../models/ai-thread.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
