# getTenantQuota

Referenced types are defined in the [full reference](../api.md).

> DocsCloudQuotaWrapper getTenantQuota(refresh)

`GET /api/2.0/settings/docscloud/tenant/quota`

Get the Docs Connect tenant quota

Returns the Docs Connect user quota of the current portal: the users who currently count as Docs Connect editors and the users who count as viewers, each with the identifier Docs Connect knows them by and the date their quota entry expires. The portal must have an activated Docs Connect tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a Docs Connect purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings, on an installation where the Docs Connect service is configured. The call is read-only, idempotent and cached for a minute, so pass `refresh=true` to read the current state from Docs Connect. In the result, `users` holds the editor entries and `usersView` the viewer entries, both unordered; `userId` is the DocSpace user ID for a portal member and an identifier of Docs Connect's own for anyone else; `expire` is the date and time the entry expires, as a UTC string; and empty lists mean no user has been counted yet. It lists the users themselves, not the counters: the license limits with the per-role totals are in `GET api/2.0/settings/docscloud/tenant/info`, a single active-user total is in `.../tenant/usage`, and the same lists as a downloadable xlsx file are produced by `POST api/2.0/settings/docscloud/tenant/quota/report`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the user quota from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to a minute old. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The editor and viewer users of the Docs Connect tenant of the portal, with the expiration date of each entry | [**DocsCloudQuotaWrapper**](../api.md#model-docscloudquotawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no activated Docs Connect tenant, so there is no user quota to return | - | - |
| **403** | The caller is not allowed to edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudQuotaWrapper**](../api.md#model-docscloudquotawrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
