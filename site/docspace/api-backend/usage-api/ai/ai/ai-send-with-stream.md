# aiSendWithStream

> AiChatEvent aiSendWithStream(AiSendStreamBody)

`POST /api/2.0/ai/ai/send-with-stream`

Send with stream

Runs one chat round and streams it back as newline-delimited `ChatEvent` objects. Omitting `threadId` opens a new thread, which requires that `entityId`, when sent, names an AI project the caller can chat in, and that a profile resolves; the user message and the reply are persisted either way, and a new thread also gets a generated title. `contextEntityId` is the folder or room the caller is in: it is the location the prompt describes and the folder a generated file is saved into (My documents when there is none); inside a project it is omitted and the project's folder context takes its place. The model is settled in a fixed order - the project's model inside a project overrides everything, then the explicit `profileId`, then the one stored on the thread, then the `Chat` assignment - and the effective profile is checked before the stream opens, so an unknown one fails with 400 rather than as an error buried in a 200. A tool call pauses the round and ends the stream; resume it with `POST api/2.0/ai/ai/approve-tool-call` or `POST api/2.0/ai/ai/deny-tool-call`. The skills of the Instructions rooms in `actionArgs.contextRooms` are read again for the round, so the list only has to name the rooms; when `entityId` names an AI project, the project's own linked rooms replace `actionArgs.contextRooms` and `actionArgs.knowledgeRooms`, and its model replaces `profileId`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiSendStreamBody** | body | [**AiSendStreamBody**](../../models/ai-send-stream-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. | [**AiChatEvent**](../../models/ai-chat-event.md) | - |
| **400** | The prompt is empty, more attachments were sent than the limit allows, or no AI profile could be resolved for the requested action. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **402** | The portal has no paid AI quota left, so the profile bound to this action cannot be dispatched. `error` carries the portal's explanation in the caller's language. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The `entityId` names a room the caller cannot open, or no live profile is bound to it. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **409** | `entityId` names an AI project whose model is gone or cannot chat (`code: projectModelUnavailable`). | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiChatEvent**](../../models/ai-chat-event.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/x-ndjson, application/json
