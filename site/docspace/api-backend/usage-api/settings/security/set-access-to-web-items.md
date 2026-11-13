# setAccessToWebItems

> SecurityArrayWrapper setAccessToWebItems(WebItemsSecurityRequestDto)

`PUT /api/2.0/settings/security/access`

Set access to modules in bulk

Turns several portal modules on or off in one call. Each `items` entry has a module GUID in `key` and the enabled flag in `value`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 on an open portal, where everyone is admitted. The call changes data, and you can repeat it with the same body. If a module is listed twice, the call applies only its first entry. The body has no list of users and groups. Turning a product module on restores its last list of users and groups. In all other cases, the call allows or denies the module for everyone. To change that list, use `PUT api/2.0/settings/security`. If the body cannot be read or a `key` is not a GUID, the call returns 400. It returns the resulting rules of the listed modules in the shape of `GET api/2.0/settings/security`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WebItemsSecurityRequestDto** | body | [**WebItemsSecurityRequestDto**](../../models/web-items-security-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The resulting access configuration of every module listed in the request | [**SecurityArrayWrapper**](../../models/security-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or a `key` in `items` is not a GUID | - | - |
| **403** | Per-module access cannot be configured on an open portal, or the caller lacks the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SecurityArrayWrapper**](../../models/security-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
