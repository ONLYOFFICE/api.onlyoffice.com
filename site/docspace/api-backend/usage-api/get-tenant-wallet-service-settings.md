# getTenantWalletServiceSettings

Referenced types are defined in the [full reference](../api.md).

> TenantWalletServiceSettingsWrapper getTenantWalletServiceSettings()

`GET /api/2.0/portal/payment/servicessettings`

Get the wallet service settings

Returns which wallet services an administrator has switched on for this portal by hand, as opposed to the ones its plan pays for. Only a DocSpace administrator may read it, an installation without a billing service answers 403, no billing customer is needed, and the call is read-only. `enabledServices` holds the names of those services and is empty when none was switched on. This is the stored setting and not the state of the portal: a service the plan brings with it is active without appearing here, so the honest answer to what is running is `GET api/2.0/portal/payment/activeservices`. One entry is changed with `POST api/2.0/portal/payment/servicestate`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet services switched on by hand for this portal | [**TenantWalletServiceSettingsWrapper**](../api.md#model-tenantwalletservicesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWalletServiceSettingsWrapper**](../api.md#model-tenantwalletservicesettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
