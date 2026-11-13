# getWebItemSecurityInfo

> BooleanWrapper getWebItemSecurityInfo(id)

`GET /api/2.0/settings/security/{id}`

Check module availability

Returns whether the calling user can open the portal module with the GUID `id`. The answer is a single boolean. Any signed-in user can call it. The call is read-only, and the answer depends on the caller. The value `true` means the module is registered and visible, and the caller may read it. The value `false` covers all other cases: an unknown module, a hidden module, or a caller outside the allow-list. So `false` does not tell these cases apart, and an unknown `id` is not an error. A value that is not a GUID does not match the route. To read the allow-list, use `GET api/2.0/settings/security`. To list the modules the caller can open, use `GET api/2.0/settings/security/modules`. To change access, use `PUT api/2.0/settings/security`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The identifier of the object the operation acts on, as the listing operation of that kind of object reports it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of another shape does not match the route at all and is answered as not found. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the module is registered, visible and readable by the calling user - false covers a module that is not registered here as well as one the caller may not open | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
