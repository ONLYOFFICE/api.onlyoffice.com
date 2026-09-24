# updateIpRestrictionsSettings

> IpRestrictionsWrapper updateIpRestrictionsSettings(IpRestrictionsDto)

`PUT /api/2.0/settings/iprestrictions/settings`

Update IP restriction settings

Stores the enforcement flag of the IP restrictions of the current portal together with the whole address list, replacing the addresses saved before; this operation and `PUT api/2.0/settings/iprestrictions` are two routes to the same handler and behave identically. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. Every entry must be a single IPv4 or IPv6 address: `from-to` ranges and CIDR blocks are matched by the portal but cannot be stored here and are rejected as an invalid request, as is `enable: true` with an empty list. An omitted `enable` follows the list - on when addresses are sent, off when the list is empty - so the flag cannot be moved without resending the addresses that stay in force. The new state applies to new requests without a restart, is recorded in the audit trail, and sending the same body twice changes nothing further. Enforcement spares the portal owner and the installation's own networks only, so a list without the caller's own address locks the remaining administrators out. The answer echoes the request, so read the stored entries and their IDs with `GET api/2.0/settings/iprestrictions`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IpRestrictionsDto** | body | [**IpRestrictionsDto**](../../models/ip-restrictions-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored enforcement flag and addresses echoed back exactly as sent, without the IDs of the stored entries | [**IpRestrictionsWrapper**](../../models/ip-restrictions-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IpRestrictionsWrapper**](../../models/ip-restrictions-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
