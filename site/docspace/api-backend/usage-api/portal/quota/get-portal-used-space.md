# getPortalUsedSpace

> DoubleWrapper getPortalUsedSpace()

`GET /api/2.0/portal/usedspace`

Get the portal used space

Returns how much space the content of this portal occupies, in gigabytes rounded to two decimals, so a client can show the storage bar next to the allowance. The caller needs the portal-settings right and is refused without it; the call is read-only and idempotent. The number is added up from the storage counters the portal keeps per owner, which means content that belongs to no account - system data - is not part of it, and it is a plain number, not an object. The counters are maintained as files are written and removed, so the value is current but may lag a large operation that is still running. The allowance to compare it with is `maxTotalSize` from `GET api/2.0/portal/quota`, in bytes rather than gigabytes, and the smallest quota that would still fit the portal is suggested by `GET api/2.0/portal/quota/right`. This operation says nothing about which room or user the space belongs to - the per-user figures come from the People API.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The space the portal content occupies, in gigabytes rounded to two decimals | [**DoubleWrapper**](../../models/double-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DoubleWrapper**](../../models/double-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
