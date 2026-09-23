# getWebItemSecurityInfo

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper getWebItemSecurityInfo(id)

`GET /api/2.0/settings/security/{id}`

Check module availability

Answers whether the module with the given identifier is available to the calling user right now, as a single boolean. `id` is the module GUID and travels in the path; a value that is not a GUID does not match the route at all. Any signed-in member may call this; anonymous callers are not admitted. The operation is read-only and its answer is specific to the caller: `true` means a module with that identifier is registered in this portal, is visible, and the caller is allowed to read it, while `false` covers every other case - the module is not registered here, it is hidden for this portal, or the caller is outside the users and groups allowed to open it. A `false` therefore does not tell those apart, and an unknown identifier is reported as unavailable instead of failing. Read the allow-list behind the decision with `GET api/2.0/settings/security`, list the modules the caller can actually open with `GET api/2.0/settings/security/modules`, and change access with `PUT api/2.0/settings/security`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The identifier of the object the operation acts on, as the listing operation of that kind of object reports it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of another shape does not match the route at all and is answered as not found. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the module is registered, visible and readable by the calling user - false covers a module that is not registered here as well as one the caller may not open | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
