# hasTagLinks

> BooleanWrapper hasTagLinks(tagName2, tagName)

`GET /api/2.0/files/tags/{tagName}/haslinks`

Check room tag usage

Reports whether any room still carries the named tag, which is the check to run before the tag is deleted from the catalog. Only a portal administrator may call it, and every other account is refused. The name is matched exactly against the catalog, and a name that is not in it is answered with 404. That also tells the two ways a tag stops being used apart: taking the tag off the last room that carried it leaves the tag in the catalog and turns the answer to false, while deleting that last room removes the tag itself, after which the call answers 404. A true answer means at least one room, active or archived, still references the tag, so deleting it with `DELETE api/2.0/files/tags` would strip it from those rooms. The handler reads the tag name from the query string, so the value has to be sent twice: in the path segment and as the `tagName` query parameter.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **tagName2** | path | **String** | The tag being checked. Send the same value as the `tagName` query parameter, which is the one the handler reads. | [required] |
| **tagName** | query | **String** | The tag to check, spelled exactly as it is stored in the catalog. This query value is the one the handler reads, so the path segment of the same name has to repeat it. | [optional] [example: `Important`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True when at least one room still carries the tag | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **404** | No tag with this name exists in the catalog | - | - |
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
