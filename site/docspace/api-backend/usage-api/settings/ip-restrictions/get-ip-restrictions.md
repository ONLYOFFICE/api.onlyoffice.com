# getIpRestrictions

> IpRestrictionArrayWrapper getIpRestrictions()

`GET /api/2.0/settings/iprestrictions`

Get IP restrictions

Returns the IP restriction list of the current portal, the addresses allowed to reach it. Each entry has its `id` and the `forAdmin` flag. An entry with `forAdmin` admits only DocSpace admins. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only and honours `If-None-Match`. The list has no defined order. On a portal without restrictions, the list is empty, and an empty list blocks nobody. The portal owner and the installation's own networks are never blocked. If it holds the `ETag` of an earlier answer, unchanged addresses return 304 with an empty body. The `ETag` covers only the addresses, so a change of `forAdmin` alone also returns 304. To check whether the restrictions are enforced, use `GET api/2.0/settings/iprestrictions/settings`. To replace the whole list, use `PUT api/2.0/settings/iprestrictions`. It takes addresses, not the IDs returned here. You cannot add or delete a single entry.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The IP addresses allowed to reach the portal, each with its ID and administrators-only flag; an empty list when the portal has no restrictions | [**IpRestrictionArrayWrapper**](../../models/ip-restriction-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The addresses have not changed since the `ETag` sent back in `If-None-Match`, which ignores the administrators-only flags; the body is empty | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IpRestrictionArrayWrapper**](../../models/ip-restriction-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
