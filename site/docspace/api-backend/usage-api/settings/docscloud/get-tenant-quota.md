# getTenantQuota

> DocsCloudQuotaWrapper getTenantQuota(refresh)

`GET /api/2.0/settings/docscloud/tenant/quota`

Get the Docs Connect tenant quota

Returns the Docs Connect user quota of the current portal. It lists the users who count as Docs Connect editors and as viewers, and when each entry expires. The portal needs a Docs Connect tenant from `POST api/2.0/settings/docscloud/trial` or a Docs Connect purchase. Without one, the call returns 400, and `GET api/2.0/settings/docscloud/tenant` returns an empty result. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only, and the portal caches the answer for a minute. To read the current state from Docs Connect, pass `refresh=true`. The `users` list holds the editors, and `usersView` holds the viewers, in no particular order. For a portal member, `userId` is the DocSpace user ID. For anyone else, it is an ID of Docs Connect. The `expire` value is a UTC date and time as a string. Empty lists mean that no user is counted yet. For the license limits and the totals by role, use `GET api/2.0/settings/docscloud/tenant/info`. For one total of active users, use `GET api/2.0/settings/docscloud/tenant/usage`. To get the same lists as an xlsx file, use `POST api/2.0/settings/docscloud/tenant/quota/report`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the user quota from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to a minute old. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The editor and viewer users of the Docs Connect tenant of the portal, with the expiration date of each entry | [**DocsCloudQuotaWrapper**](../../models/docs-cloud-quota-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no activated Docs Connect tenant, so there is no user quota to return | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudQuotaWrapper**](../../models/docs-cloud-quota-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
