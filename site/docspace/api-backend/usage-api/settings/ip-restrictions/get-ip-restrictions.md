# getIpRestrictions

> IPRestrictionArrayWrapper getIpRestrictions()

`GET /api/2.0/settings/iprestrictions`

Get IP restrictions

Returns the IP restriction list of the current portal - the addresses allowed to reach it, each with its `id` and the `forAdmin` flag that narrows the entry to DocSpace administrators. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. The call is read-only and honours `If-None-Match`: send back the `ETag` of an earlier answer and an unchanged list comes back as an empty not-modified response rather than a body. The list has no defined order and is empty on a portal where nobody has configured restrictions - and an empty list blocks nobody, whatever the enforcement flag says. Whether the restrictions are enforced at all is not part of this answer: read that flag with `GET api/2.0/settings/iprestrictions/settings`. The entries listed here apply to every user of the portal except its owner. Replace the whole list with `PUT api/2.0/settings/iprestrictions`; single entries cannot be added or deleted, and that update takes plain addresses rather than the IDs returned here.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The IP addresses allowed to reach the portal, each with its ID and administrators-only flag; an empty list when the portal has no restrictions | [**IPRestrictionArrayWrapper**](../../models/ip-restriction-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IPRestrictionArrayWrapper**](../../models/ip-restriction-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
