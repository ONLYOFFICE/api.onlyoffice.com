# getTenantInfo

Referenced types are defined in the [full reference](../api.md).

> DocsCloudTenantInfoWrapper getTenantInfo(refresh)

`GET /api/2.0/settings/docscloud/tenant/info`

Get the Docs Connect tenant information

Returns the Docs Connect license of the current portal, the Docs Connect server serving it, the user limits of that license and the editor and viewer usage counted against them for the current period. The portal must have an activated Docs Connect tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a Docs Connect purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings, on an installation where the Docs Connect service is configured. The call is read-only, idempotent and cached for a minute, so pass `refresh=true` right after a subscription change to read the current state from Docs Connect. In the result, `license.valid` is when the license expires and `license.trial` is reported as `false` once the portal holds a paid Docs Connect or Docs Connect Dev Pack subscription, even when the license itself still says trial; `usersLimit` caps the editors and the viewers allowed, `stats` counts the active, internal, external and remaining users of each of those two kinds over the last `stats.periodDay` days, and the dates are in UTC. The editing settings, the per-user quota lists and the address of the assigned server live in `.../tenant/config`, `.../tenant/quota` and `.../tenant`, while `.../tenant/usage` gives one active-user total instead of this per-role breakdown.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the license, server and usage information from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to a minute old. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Docs Connect license and server information of the portal, with the user limits of the license and the usage statistics for the current period | [**DocsCloudTenantInfoWrapper**](../api.md#model-docscloudtenantinfowrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no activated Docs Connect tenant, so there is no license information to return | - | - |
| **403** | The caller is not allowed to edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudTenantInfoWrapper**](../api.md#model-docscloudtenantinfowrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
