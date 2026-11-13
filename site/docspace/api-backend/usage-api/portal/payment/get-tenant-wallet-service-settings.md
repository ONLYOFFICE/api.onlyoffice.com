# getTenantWalletServiceSettings

> TenantWalletServiceSettingsWrapper getTenantWalletServiceSettings()

`GET /api/2.0/portal/payment/servicessettings`

Get the wallet service settings

Returns the wallet services that an admin turned on for the portal by hand. The services that the plan pays for are not listed. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The portal does not need a billing customer. The call is read-only. If no service was turned on, `enabledServices` is empty. To read the services that run on the portal, use `GET api/2.0/portal/payment/activeservices`. To change one entry, use `POST api/2.0/portal/payment/servicestate`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet services switched on by hand for this portal | [**TenantWalletServiceSettingsWrapper**](../../models/tenant-wallet-service-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWalletServiceSettingsWrapper**](../../models/tenant-wallet-service-settings-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
