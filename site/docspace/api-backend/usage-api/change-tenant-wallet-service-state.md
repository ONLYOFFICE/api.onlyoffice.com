# changeTenantWalletServiceState

Referenced types are defined in the [full reference](../api.md).

> TenantWalletServiceSettingsWrapper changeTenantWalletServiceState(ChangeWalletServiceStateRequestDto)

`POST /api/2.0/portal/payment/servicestate`

Switch a wallet service

Switches one wallet service on or off for the portal: `service` names it and `enabled` says which way. The portal needs a billing customer, and the caller needs both the permission to edit the portal settings and DocSpace administrator rights. Order matters between the two AI services - AI tools has to be on before AI search may be switched on, and switching AI tools off switches AI search off with it - so a request that breaks that order is refused with 403. The call is mutating and idempotent: switching on a service that is already on changes nothing. It is written to the portal audit trail, and switching AI tools notifies the portal clients so the AI features appear or disappear for them without a reload. The whole updated set of switched-on services comes back. Switching a service on does not buy it - its units are still bought with `PUT api/2.0/portal/payment/updatewallet`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ChangeWalletServiceStateRequestDto** | body | [**ChangeWalletServiceStateRequestDto**](../api.md#model-changewalletservicestaterequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The whole set of wallet services switched on for the portal after the change | [**TenantWalletServiceSettingsWrapper**](../api.md#model-tenantwalletservicesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit the portal settings or is not a DocSpace administrator, the portal has no billing service configured, or AI search was switched on while AI tools is off | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWalletServiceSettingsWrapper**](../api.md#model-tenantwalletservicesettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
