# linkProjectSources

> linkProjectSources(id, LinkAiProjectSourcesRequest)

`POST /api/2.0/files/rooms/{id}/sources`

Link sources to an AI project

Links Instructions and Knowledge rooms to an AI project as its sources. Every project member then gets read access to these rooms. A member with a higher role in a room keeps that role. Requires the right to manage the project. Other callers get 403, including members with read access only. Each listed room must be an Instructions or Knowledge room that the caller also manages. If any room fails this check, the call returns 400 and links nothing. The call changes data and skips rooms that are already linked. So you can repeat it with the same body. It returns 400 if `roomIds` is empty or too long. It also returns 400 if the project would hold more than 20 rooms of one kind. If the ID is not an AI project, the call returns 404. AI features turned off on the portal also return 403. To see the linked rooms, use `GET api/2.0/files/rooms/{id}/sources`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | ID of the project. | [required] [example: `1`] |
| **LinkAiProjectSourcesRequest** | body | [**LinkAiProjectSourcesRequest**](../../models/link-ai-project-sources-request.md) | The rooms to link. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **204** | The rooms are linked | - | - |
| **400** | `roomIds` is empty or longer than 40 items, a room is not an active Instructions or Knowledge room the caller manages, or the project would hold more than 20 rooms of one kind | - | - |
| **403** | The caller may not edit the project, or the AI features are turned off on the portal | - | - |
| **404** | No AI project has this id | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
