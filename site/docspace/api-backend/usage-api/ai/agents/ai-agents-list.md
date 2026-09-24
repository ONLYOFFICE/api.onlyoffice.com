# aiAgentsList

> AiFolderContentIntegerWrapper aiAgentsList(subjectId, subjectOwnerId, excludeSubject, tags, withoutTags, quotaFilter, filterValue, sortBy, sortOrder, startIndex, count)

`GET /api/2.0/ai/agents`

List agents

Lists the portal's AI agent rooms. The query is forwarded unchanged to the DocSpace AI service, so it takes the same paging, sorting and filtering parameters as an ordinary room listing, and the answer is that service's folder-content payload rather than a shape of this API's own. Array and object query values are dropped rather than guessed at, so send flat strings. The profile bound to each agent is not included here - read one agent with `GET api/2.0/ai/agents/{id}` for that.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **subjectId** | query | **String** | Show only the agent rooms this user takes part in. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **subjectOwnerId** | query | **String** | Show only the agent rooms owned by this user. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **excludeSubject** | query | **Boolean** | Invert the user filter: leave out what `subjectId` selects instead of keeping it. | [optional] [example: `false`] |
| **tags** | query | **String** | Show only the agent rooms carrying these tags, comma-separated. | [optional] [example: `ai,assistant`] |
| **withoutTags** | query | **Boolean** | Show only the agent rooms that carry no tags at all. | [optional] [example: `false`] |
| **quotaFilter** | query | **Integer** | Filter by quota kind: 0 for all, 1 for the default quota, 2 for a custom one. | [optional] [example: `0`] |
| **filterValue** | query | **String** | Show only the agent rooms whose title matches this text. | [optional] [example: `assistant`] |
| **sortBy** | query | **String** | Field to sort by, for example `DateAndTime`. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **String** | Sort direction, `ascending` or `descending`. | [optional] [example: `descending`] |
| **startIndex** | query | **Integer** | Index of the first entry to return; 0 starts at the beginning. | [optional] [example: `0`] |
| **count** | query | **Integer** | How many entries to return. The internal service applies its own default. | [optional] [example: `25`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The agent rooms, in the DocSpace AI service's folder-content envelope. | [**AiFolderContentIntegerWrapper**](../../models/ai-folder-content-integer-wrapper.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiFolderContentIntegerWrapper**](../../models/ai-folder-content-integer-wrapper.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
