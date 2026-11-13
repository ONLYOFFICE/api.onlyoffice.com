# getRoomSkills

> AiSkillsWrapper getRoomSkills(id)

`GET /api/2.0/files/rooms/{id}/skills`

Get the skills of an AI room

Returns the skills of an Instructions room, or of the Instructions rooms linked to an AI project. Requires read access to the room or the project. Other callers get 403. The call is read-only. For a project, it lists the linked Instructions rooms but no Knowledge rooms. It sorts the rooms by title, then by ID. It sorts the skills of a room by file name, then by `id`. The call lists a room without skills with an empty `skills` list. A project without linked Instructions rooms gives an empty `rooms` list. An unknown ID or another kind of room, such as a Knowledge room, returns 404. It also returns 403 if AI features are turned off on the portal. To get the skills of several Instructions rooms, use `GET api/2.0/files/rooms/skills`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Instructions rooms with their skills | [**AiSkillsWrapper**](../../models/ai-skills-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read the room, or the AI features are turned off on the portal | - | - |
| **404** | No active Instructions room or AI project has this id | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AiSkillsWrapper**](../../models/ai-skills-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
