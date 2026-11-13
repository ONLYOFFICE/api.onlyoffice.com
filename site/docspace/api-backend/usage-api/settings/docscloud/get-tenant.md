# getTenant

> DocsCloudTenantWrapper getTenant(refresh)

`GET /api/2.0/settings/docscloud/tenant`

Get the Docs Connect tenant

Returns the Docs Connect tenant of the current portal. It describes the Docs Connect server assigned to the portal. It also gives the subscription end date and the payment. A tenant exists only after a Docs Connect trial from `POST api/2.0/settings/docscloud/trial` or a Docs Connect purchase. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The portal caches the tenant for an hour, and the absence of a tenant for a minute. So after a subscription change, pass `refresh=true` to read the current state from Docs Connect. The `address` field is the full address of the server. The dates in the result are in UTC. An empty result means that the portal has no Docs Connect tenant yet. This is a normal state, not an error. So use this call to check if Docs Connect is active. To read the license, the configuration, the user quota, or the usage, use `GET api/2.0/settings/docscloud/tenant/info`, `GET api/2.0/settings/docscloud/tenant/config`, `GET api/2.0/settings/docscloud/tenant/quota`, or `GET api/2.0/settings/docscloud/tenant/usage`. Each of them returns 400 while the portal has no tenant.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the tenant from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to an hour old, or up to a minute old while the portal has no tenant. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Docs Connect tenant of the portal, or an empty result if no Docs Connect tenant is assigned to it | [**DocsCloudTenantWrapper**](../../models/docs-cloud-tenant-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudTenantWrapper**](../../models/docs-cloud-tenant-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
