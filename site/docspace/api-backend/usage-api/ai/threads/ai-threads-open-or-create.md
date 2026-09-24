# aiThreadsOpenOrCreate

> AiOpenOrCreateResult aiThreadsOpenOrCreate(aiThreadsOpenOrCreate\_request)

`POST /api/2.0/ai/threads/open-or-create`

Open or create

Opens a chat thread and returns it with its history, or creates one whose title is generated from the first message supplied in the request. That first message is not persisted: follow up with `POST api/2.0/ai/threads/append-user-message` to store it, or start the round directly with `POST api/2.0/ai/ai/send-with-stream`. Unlike `create` this takes a whole resolved `profile` object rather than an ID, and a request without one answers 404 because no model could be bound. A supplied `entityId` has to be a room the caller can open; anything that is not an agent room folds to the global scope instead of being rejected.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsOpenOrCreate\_request** | body | [**aiThreadsOpenOrCreate_request**](../../models/ai-threads-open-or-create-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The thread that was opened or created, with its prior messages. A created one carries the generated title. | [**AiOpenOrCreateResult**](../../models/ai-open-or-create-result.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The `entityId` names a room the caller cannot open, or no live AI profile is bound to it. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiOpenOrCreateResult**](../../models/ai-open-or-create-result.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
