# changeDefaultAccessRights

> FileShareResponseArrayWrapper changeDefaultAccessRights(DefaultAccessRightsRequestDto)

`PUT /api/2.0/files/settings/dafaultaccessrights`

Change the default access rights

Changes the access rights that the sharing dialog offers the calling account by default. The body is an array of access rights, not an object. Any signed-in user can call it. The call changes data, and you can repeat it with the same body. The portal keeps `FillForms`, `CustomFilter`, and `Review` from the array. Then it adds `ReadWrite` or `Comment`, the first one the array has. If the array has neither, it adds `Read`. So the response can be shorter than the request and have another order. An empty array clears the setting, and the call then returns `Read` alone. If a value is not an access right, the call returns 400. Existing shares do not change.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DefaultAccessRightsRequestDto** | body | **List** | The access rights the sharing dialog should offer by default. The array is the whole request body rather than a field of an object, and the portal stores a normalised subset of it instead of the array as sent, so read the answer to learn what was kept. An empty array clears the setting, after which the portal reports read access alone. A value outside the published list is rejected as an invalid request. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The normalised set of default access rights stored for the caller | [**FileShareResponseArrayWrapper**](../../models/file-share-response-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or holds a number outside the published list of access rights | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareResponseArrayWrapper**](../../models/file-share-response-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
