# aiThreadsList

Referenced types are defined in the [full reference](../aichat.md).

> List aiThreadsList(entityId, count, cursor, query)

`GET /api/2.0/ai/threads/list`

List chat threads

Lists the threads of a scope, most recently edited first, and searches their titles case-insensitively when `query` is given. Every parameter is optional: omitting `entityId` lists the global scope, and omitting `count` lets the engine apply its own page size. Pagination is by cursor, and the cursor is a JSON object passed as a string in the query - `{id: <last thread id>, lastEditDate: <its date>}` - taken from the last entry of the previous page. A cursor that is not valid JSON, or that lacks an `id`, is ignored rather than rejected, and the read silently starts from the first page again.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |
| **count** | query | **Integer** | The maximum number of items to return in one page. | [optional] [example: `20`] |
| **cursor** | query | **String** | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | [optional] [example: `{"id":"11111111-1111-1111-1111-111111111111","lastEditDate":1767225600000}`] |
| **query** | query | **String** | The full-text query the thread list is filtered by. | [optional] [example: `contract`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The threads of the scope, most recently edited first. | [**List**](../aichat.md#model-aithread) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**List**](../aichat.md#model-aithread)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
