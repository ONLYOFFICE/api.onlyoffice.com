# setTenantWalletSettings

> TenantWalletSettingsWrapper setTenantWalletSettings(TenantWalletSettingsRequestDto)

`POST /api/2.0/portal/payment/topupsettings`

Set the auto top-up settings

Turns the automatic top-up of the portal wallet on or off and sets its thresholds. While it is on, the portal charges the payment method when the balance falls below `minBalance`. The charge brings the balance up to `upToBalance` in `currency`. If the portal has no billing customer or no wallet balance, the call returns 404. To create the balance, top up the wallet once with `POST api/2.0/portal/payment/deposit`. The payer is the portal user whose email is the email of the billing customer. Only the payer can call it. Other callers get 403. The call also returns 403 if the installation has no billing service. The body replaces all stored settings, and an omitted body resets them to the defaults. The call returns 400 if `minBalance` or `upToBalance` is missing or out of range. It also returns 400 if `upToBalance` is not greater than `minBalance`. The call accepts `lowBalanceThreshold`, `lowBalanceNotified`, and `lastModified` but ignores them. The call changes data but charges nothing. You can repeat it with the same body. Turning the top-up on also resets the low-balance warning. The call returns the settings as the portal saved them.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantWalletSettingsRequestDto** | body | [**TenantWalletSettingsRequestDto**](../../models/tenant-wallet-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The automatic top-up settings as they were stored | [**TenantWalletSettingsWrapper**](../../models/tenant-wallet-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `settings` is sent with `minBalance` outside 5-1000 or `upToBalance` outside 6-5000, including when either of them is left out, or with `upToBalance` not greater than `minBalance` | - | - |
| **403** | The caller is not the payer of this portal, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its wallet has no balance yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWalletSettingsWrapper**](../../models/tenant-wallet-settings-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
