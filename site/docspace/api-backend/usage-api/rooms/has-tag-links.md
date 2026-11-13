# hasTagLinks

> BooleanWrapper hasTagLinks(tagName2, tagName)

`GET /api/2.0/files/tags/{tagName}/haslinks`

Check room tag usage

Returns whether any room still has the named tag. Run it before you delete the tag from the catalog. Requires a DocSpace admin. Other callers get 403. The call is read-only. It returns `true` if at least one active or archived room has the tag. Then `DELETE api/2.0/files/tags` would remove the tag from those rooms. After you remove the tag from its last room, the call returns `false`. If the last room with the tag is deleted, the portal deletes the tag too. Then the call returns 404. Send the name in the path and also as the `tagName` query parameter. The call reads only the query value. On MySQL, the name match ignores case. If no tag has this name, or the query has no `tagName`, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **tagName2** | path | **String** | The tag being checked. Send the same value as the `tagName` query parameter, which is the one the handler reads. | [required] |
| **tagName** | query | **String** | The tag to check, spelled exactly as it is stored in the catalog. This query value is the one the handler reads, so the path segment of the same name has to repeat it. | [optional] [example: `Important`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True when at least one room still carries the tag | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Only a portal administrator can check tag usage | - | - |
| **404** | No tag with this name exists in the catalog, or the `tagName` query parameter is missing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
