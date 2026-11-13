# getRoomsSkills

> AiSkillsWrapper getRoomsSkills(roomIds)

`GET /api/2.0/files/rooms/skills`

Get the skills of Instructions rooms

Returns the skills of several Instructions rooms. Any signed-in user can call it. The call is read-only. It returns only the Instructions rooms that the caller can read. It leaves out unknown IDs and other kinds of rooms without an error. Each room appears once, even if its ID repeats. A room without skills has an empty `skills` list. The call returns 400 if `roomIds` is empty or has more than 20 items. It returns 403 if AI features are turned off on the portal. To get the skills of one room or of an AI project, use `GET api/2.0/files/rooms/{id}/skills`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **roomIds** | query | **Set** (int32) | IDs of the Instructions rooms, one `roomIds` query item per room; 1 to 20 items. | [optional] [example: `[17001,17002]`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The readable Instructions rooms among the requested ones, with their skills | [**AiSkillsWrapper**](../../models/ai-skills-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `roomIds` is empty or longer than 20 items | - | - |
| **403** | The AI features are turned off on the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AiSkillsWrapper**](../../models/ai-skills-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
