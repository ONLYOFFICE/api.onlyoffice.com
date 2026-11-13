# updateIpRestrictionsSettings

> IpRestrictionsWrapper updateIpRestrictionsSettings(IpRestrictionsDto)

`PUT /api/2.0/settings/iprestrictions/settings`

Update IP restriction settings

Stores the enforcement flag of the IP restrictions of the current portal, together with the whole address list. It works exactly like `PUT api/2.0/settings/iprestrictions`. So to change only the flag, resend the addresses in force. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and you can repeat it with the same body. It deletes every stored entry that the body does not repeat. The new list applies to new requests immediately. An omitted `enable` is on for a list with addresses and off for an empty one. The call returns 400 if the body has no `ipRestrictions` or `enable` is `true` with an empty list. It also returns 400 if an entry is not a single IPv4 or IPv6 address. Ranges and CIDR blocks also return 400. The portal owner and the installation's own networks are never blocked. So a DocSpace admin who leaves out their own address locks themselves out. The answer echoes the request, so it has no entry IDs, and an omitted `enable` stays empty. To read the stored list, use `GET api/2.0/settings/iprestrictions`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IpRestrictionsDto** | body | [**IpRestrictionsDto**](../../models/ip-restrictions-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored enforcement flag and addresses echoed back exactly as sent, without the IDs of the stored entries | [**IpRestrictionsWrapper**](../../models/ip-restrictions-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `ipRestrictions`, an entry is not a single IPv4 or IPv6 address, or `enable` is `true` with an empty list | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IpRestrictionsWrapper**](../../models/ip-restrictions-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
