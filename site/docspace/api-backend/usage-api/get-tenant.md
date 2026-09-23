# getTenant

Referenced types are defined in the [full reference](../api.md).

> DocsCloudTenantWrapper getTenant(refresh)

`GET /api/2.0/settings/docscloud/tenant`

Get the Docs Connect tenant

Returns the Docs Connect tenant of the current portal: the Docs Connect server assigned to the portal, with its address, the date the tenant subscription ends and the payment the tenant was created for. A tenant exists only after a Docs Connect subscription has been granted, by `POST api/2.0/settings/docscloud/trial` or by a Docs Connect purchase, and only on an installation where the Docs Connect service is configured. The caller must be a portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it is served from a cache that keeps the tenant for an hour and the absence of a tenant for a minute, so pass `refresh=true` right after a subscription change to read the current state from Docs Connect instead. In the result, `address` is the absolute URL of the assigned server, `isActive` tells whether `endDate` is still in the future, and the dates are in UTC. An empty result means the portal has no Docs Connect tenant yet, which is the normal state before a subscription and not an error, so this is the operation to call to find out whether Docs Connect is activated at all. The license and server details, the editing settings, the user quota and the usage statistics are not part of it: they live in `GET api/2.0/settings/docscloud/tenant/info`, `.../tenant/config`, `.../tenant/quota` and `.../tenant/usage`, each of which fails with 400 while the portal has no activated tenant.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the tenant from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to an hour old, or up to a minute old while the portal has no tenant. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Docs Connect tenant of the portal, or an empty result if no Docs Connect tenant is assigned to it | [**DocsCloudTenantWrapper**](../api.md#model-docscloudtenantwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudTenantWrapper**](../api.md#model-docscloudtenantwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
