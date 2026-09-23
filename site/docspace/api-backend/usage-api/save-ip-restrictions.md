# saveIpRestrictions

Referenced types are defined in the [full reference](../api.md).

> IpRestrictionsWrapper saveIpRestrictions(IpRestrictionsDto)

`PUT /api/2.0/settings/iprestrictions`

Save IP restrictions

Replaces the whole IP restriction list of the current portal with the addresses from the request and stores the enforcement flag in the same call. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. Every entry must be a single IPv4 or IPv6 address: `from-to` ranges and CIDR blocks are matched by the portal but cannot be stored here and are rejected as an invalid request, as is `enable: true` with an empty list. An omitted `enable` follows the list - on when addresses are sent, off when the list is empty. The replacement is written in one transaction, applies to new requests without a restart and is recorded in the audit trail; entries not repeated in the body are deleted, and sending the same body twice leaves the portal as it is. Enforcement spares the portal owner and the installation's own networks only, so a list without the caller's own address locks the remaining administrators out. The answer echoes the request rather than the stored rows - no entry IDs, and `enable` exactly as sent, empty when it was omitted - so read the result with `GET api/2.0/settings/iprestrictions`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IpRestrictionsDto** | body | [**IpRestrictionsDto**](../api.md#model-iprestrictionsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The saved addresses and enforcement flag echoed back exactly as sent, without the IDs of the stored entries | [**IpRestrictionsWrapper**](../api.md#model-iprestrictionswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IpRestrictionsWrapper**](../api.md#model-iprestrictionswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
