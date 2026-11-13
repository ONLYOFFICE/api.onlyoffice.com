# getProjectSources

> AiProjectSourcesWrapper getProjectSources(id)

`GET /api/2.0/files/rooms/{id}/sources`

Get the AI project sources

Returns the Instructions and Knowledge rooms linked to an AI project as its sources. Requires read access to the project. Other callers get 403. The call is read-only and returns the two kinds of rooms in separate lists. Both lists are empty when nothing is linked. If the ID is not an AI project, the call returns 404. It also returns 403 if AI features are turned off on the portal. To link rooms, use `POST api/2.0/files/rooms/{id}/sources`. To unlink them, use `DELETE api/2.0/files/rooms/{id}/sources`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Instructions and Knowledge rooms linked to the project | [**AiProjectSourcesWrapper**](../../models/ai-project-sources-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read the project, or the AI features are turned off on the portal | - | - |
| **404** | No AI project has this id | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AiProjectSourcesWrapper**](../../models/ai-project-sources-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
