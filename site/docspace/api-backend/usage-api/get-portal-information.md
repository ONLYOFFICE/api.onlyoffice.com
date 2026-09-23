# getPortalInformation

Referenced types are defined in the [full reference](../api.md).

> TenantWrapper getPortalInformation()

`GET /api/2.0/portal`

Get portal information

Returns the portal the request was addressed to - the tenant behind the current domain - with its name, alias, owner, language, time zone, industry, trusted-domain rules, version and creation date. Nothing has to be called first, the call is read-only and idempotent, and it keeps answering while the portal's payment has lapsed. What comes back depends on the caller's rights: a caller with the portal-settings right gets the whole record, while every other user gets an object in which only `tenantId` is filled and no error is raised - so check `tenantAlias` for null before reading the rest. `status` says whether the portal is active, suspended or pending removal, and `creationDateTime`, `statusChangeDate`, `lastModified` and `versionChanged` are UTC. `region` names the data-center region a hosted portal is served from and stays empty on a server installation and when the portal cache is off, while `hostedRegion` is the region written on the record itself. The settings of the same portal are read with `GET api/2.0/settings`, its tariff with `GET api/2.0/portal/tariff` and its quota with `GET api/2.0/portal/quota`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal record, or an object in which only `tenantId` is filled when the caller has no portal-settings right | [**TenantWrapper**](../api.md#model-tenantwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWrapper**](../api.md#model-tenantwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
