# getPortalInformation

> TenantWrapper getPortalInformation()

`GET /api/2.0/portal`

Get portal information

Returns the record of the current portal, with its name, alias, owner, language, time zone, status, and dates. Any signed-in user can call it, including a guest. A caller with the EditPortalSettings permission, which the portal owner and DocSpace admins have, gets the full record. Other callers get an object with only `tenantId` filled. So check `tenantAlias` for null first. The call is read-only and also works while the portal is unpaid. To read the portal settings, use `GET api/2.0/settings`. To read the tariff and the quota, use `GET api/2.0/portal/tariff` and `GET api/2.0/portal/quota`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal record, or an object in which only `tenantId` is filled when the caller has no portal-settings right | [**TenantWrapper**](../../models/tenant-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWrapper**](../../models/tenant-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
