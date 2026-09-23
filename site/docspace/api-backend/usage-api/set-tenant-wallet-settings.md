# setTenantWalletSettings

Referenced types are defined in the [full reference](../api.md).

> TenantWalletSettingsResponseWrapper setTenantWalletSettings(TenantWalletSettingsWrapper)

`POST /api/2.0/portal/payment/topupsettings`

Set the auto top-up settings

Switches the portal's automatic wallet top-up on or off and sets its thresholds: while it is on, the payment method on file is charged whenever the wallet balance falls below `minBalance`, enough to bring it up to `upToBalance`, in `currency`. The portal needs a billing customer whose wallet balance exists - a portal that has never had one answers 404, so top the wallet up once with `POST api/2.0/portal/payment/deposit` first - and only the payer may change the settings. The body replaces the stored settings as a whole and an omitted body resets them to the defaults; `minBalance` is accepted between 5 and 1000 and `upToBalance` between 6 and 5000, while `lowBalanceThreshold` and `lowBalanceNotified` are ignored on the way in and kept as the portal had them. The call is mutating and idempotent, it charges nothing by itself, it is written to the portal audit trail, and switching the top-up on also re-arms the low-balance warning. The settings as they were stored come back in the answer.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantWalletSettingsWrapper** | body | [**TenantWalletSettingsWrapper**](../api.md#model-tenantwalletsettingswrapper) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The automatic top-up settings as they were stored | [**TenantWalletSettingsResponseWrapper**](../api.md#model-tenantwalletsettingsresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not the payer of this portal, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its wallet has no balance yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWalletSettingsResponseWrapper**](../api.md#model-tenantwalletsettingsresponsewrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
