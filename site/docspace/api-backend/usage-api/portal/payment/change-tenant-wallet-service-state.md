# changeTenantWalletServiceState

> TenantWalletServiceSettingsWrapper changeTenantWalletServiceState(ChangeWalletServiceStateRequestDto)

`POST /api/2.0/portal/payment/servicestate`

Switch a wallet service

Turns one wallet service on or off for the portal. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. AI tools must be on before you turn on AI search. If it is not, the call returns 403. Turning off AI tools also turns off AI search. If AI is turned off for the portal, turning on an AI service returns 403. The call changes data, and you can repeat it with the same body. The call returns all wallet services that are on after the change. If `service` is not a wallet service, the call returns 400. Turning a service on does not buy it. To buy units, use `PUT api/2.0/portal/payment/updatewallet`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ChangeWalletServiceStateRequestDto** | body | [**ChangeWalletServiceStateRequestDto**](../../models/change-wallet-service-state-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The whole set of wallet services switched on for the portal after the change | [**TenantWalletServiceSettingsWrapper**](../../models/tenant-wallet-service-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, including a `service` name that is not a wallet service | - | - |
| **403** | The caller has no portal-settings right or is not a DocSpace administrator, the portal has no billing service configured, AI tools or AI search was switched on while AI is disabled for the portal, or AI search was switched on while AI tools is off | - | - |
| **404** | This portal has no billing customer yet | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
