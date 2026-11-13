# getTenantInfo

> DocsCloudTenantInfoWrapper getTenantInfo(refresh)

`GET /api/2.0/settings/docscloud/tenant/info`

Get the Docs Connect tenant information

Returns the Docs Connect license of the current portal, its server, and the user limits of the license. It also returns the editor and viewer usage of the current period. The portal needs a Docs Connect tenant from `POST api/2.0/settings/docscloud/trial` or a Docs Connect purchase. Without one, the call returns 400, and `GET api/2.0/settings/docscloud/tenant` returns an empty result. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The portal caches the answer for a minute. So after a subscription change, pass `refresh=true` to read the current state from Docs Connect. If the portal has a paid Docs Connect or Docs Connect Dev Pack subscription, `license.trial` is `false`. This holds even when the license itself is a trial. The dates in the result are in UTC. For one total of active users without the split by role, use `GET api/2.0/settings/docscloud/tenant/usage`. To read the configuration, the users counted, or the server address, use `GET api/2.0/settings/docscloud/tenant/config`, `GET api/2.0/settings/docscloud/tenant/quota`, or `GET api/2.0/settings/docscloud/tenant`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the license, server and usage information from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to a minute old. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Docs Connect license and server information of the portal, with the user limits of the license and the usage statistics for the current period | [**DocsCloudTenantInfoWrapper**](../../models/docs-cloud-tenant-info-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no activated Docs Connect tenant, so there is no license information to return | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudTenantInfoWrapper**](../../models/docs-cloud-tenant-info-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
