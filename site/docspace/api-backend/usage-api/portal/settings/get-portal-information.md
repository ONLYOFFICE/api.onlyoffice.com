# getPortalInformation

> TenantWrapper getPortalInformation()

`GET /api/2.0/portal`

Get portal information

Returns the portal the request was addressed to - the tenant behind the current domain - with its name, alias, owner, language, time zone, industry, trusted-domain rules, version and creation date. Nothing has to be called first, the call is read-only and idempotent, and it keeps answering while the portal's payment has lapsed. What comes back depends on the caller's rights: a caller with the portal-settings right gets the whole record, while every other user gets an object in which only `tenantId` is filled and no error is raised - so check `tenantAlias` for null before reading the rest. `status` says whether the portal is active, suspended or pending removal, and `creationDateTime`, `statusChangeDate`, `lastModified` and `versionChanged` are UTC. `region` names the data-center region a hosted portal is served from and stays empty on a server installation and when the portal cache is off, while `hostedRegion` is the region written on the record itself. The settings of the same portal are read with `GET api/2.0/settings`, its tariff with `GET api/2.0/portal/tariff` and its quota with `GET api/2.0/portal/quota`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal record, or an object in which only `tenantId` is filled when the caller has no portal-settings right | [**TenantWrapper**](../../models/tenant-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWrapper**](../../models/tenant-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
