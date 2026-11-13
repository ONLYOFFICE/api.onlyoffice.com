# aiThreadsCreate

> AiThread aiThreadsCreate(AiThreadsCreateRequest)

`POST /api/2.0/ai/threads/create`

Create a chat thread

Creates a chat thread with a title supplied by the caller and returns it. `entityId`, when sent, is the AI project the chat runs in and has to name one the caller can chat in; threads themselves are one list per user. A model has to resolve - an explicit `profileId`, the project's model, or the `Chat` assignment - otherwise there is nothing to run the thread against and the call answers 404. Use `POST api/2.0/ai/threads/open-or-create` instead when the title should be generated from the first user message.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiThreadsCreateRequest** | body | [**AiThreadsCreateRequest**](../../models/ai-threads-create-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created thread. | [**AiThread**](../../models/ai-thread.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
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
