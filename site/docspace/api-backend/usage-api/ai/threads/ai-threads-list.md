# aiThreadsList

> List aiThreadsList(entityId, count, cursor, query)

`GET /api/2.0/ai/threads/list`

List chat threads

Lists the threads of the caller, most recently edited first, and searches their titles case-insensitively when `query` is given. Threads are one list per user: `entityId` is accepted and ignored, so naming a room lists the same threads as naming none. Every parameter is optional, and omitting `count` lets the service apply its own page size. Pagination is by cursor, and the cursor is a JSON object passed as a string in the query - `{id: <last thread id>, lastEditDate: <its date>}` - taken from the last entry of the previous page. A cursor that is not valid JSON, or that lacks an `id`, is ignored rather than rejected, and the read silently starts from the first page again.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace folder the request names. For a chat it is the AI project the chat runs in, and is omitted outside a project; the settings operations accept it for the room the client is in, which has to be one the caller can open, but their data is kept per user and portal, not per room. | [optional] [example: `1234`] |
| **count** | query | **Integer** | The maximum number of items to return in one page. | [optional] [example: `20`] |
| **cursor** | query | **String** | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | [optional] [example: `{"id":"11111111-1111-1111-1111-111111111111","lastEditDate":1767225600000}`] |
| **query** | query | **String** | The full-text query the thread list is filtered by. | [optional] [example: `contract`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The caller's threads, most recently edited first. | [**List**](../../models/ai-thread.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**List**](../../models/ai-thread.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
