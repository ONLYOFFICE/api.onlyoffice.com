# setWebItemSecurity

> SecurityArrayWrapper setWebItemSecurity(WebItemSecurityRequestDto)

`PUT /api/2.0/settings/security`

Set module access

Replaces the access rule of one portal module. The rule says whether the module may be opened, and for which users and groups. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 on an open portal, where everyone is admitted. The call changes data, and you can repeat it with the same body. It deletes the stored subjects instead of adding to them. So send the full list of subjects every time. If `subjects` is left out, `enabled` applies to everyone. An empty `subjects` array gives access to everyone, whatever `enabled` says. The call returns 400 if the body cannot be read, has no `id`, or `id` is not a GUID. It returns the resulting rule as a list with one entry, in the shape of `GET api/2.0/settings/security`. To switch several modules in one call, use `PUT api/2.0/settings/security/access`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WebItemSecurityRequestDto** | body | [**WebItemSecurityRequestDto**](../../models/web-item-security-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The resulting access configuration of the module, as a single-entry list | [**SecurityArrayWrapper**](../../models/security-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `id`, or the `id` is not a GUID | - | - |
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
