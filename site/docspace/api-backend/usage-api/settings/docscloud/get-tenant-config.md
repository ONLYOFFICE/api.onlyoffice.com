# getTenantConfig

> DocsCloudConfigWrapper getTenantConfig(refresh)

`GET /api/2.0/settings/docscloud/tenant/config`

Get the Docs Connect tenant configuration

Returns the configuration of the Docs Connect tenant of the current portal. It includes the tenant name, the security secret and header, the server file size limit, and anonymous access. It also includes the WOPI switch and the IP filter rules. The portal needs a Docs Connect tenant from `POST api/2.0/settings/docscloud/trial` or a Docs Connect purchase. Without one, the call returns 400, and `GET api/2.0/settings/docscloud/tenant` returns an empty result. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The portal caches the answer for an hour. To read the current state from Docs Connect, pass `refresh=true`. An update with `PUT api/2.0/settings/docscloud/tenant/config` clears the cached copy, so the next read needs no refresh. The `security.secret` field is a credential, so treat the response as sensitive. An empty or missing `ipFilter.rules` means that no address is restricted. To read the license, the server address, the users counted, or the usage, use `GET api/2.0/settings/docscloud/tenant/info`, `GET api/2.0/settings/docscloud/tenant`, `GET api/2.0/settings/docscloud/tenant/quota`, or `GET api/2.0/settings/docscloud/tenant/usage`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the configuration from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to an hour old. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The configuration of the Docs Connect tenant of the portal, with its security, server, WOPI and IP filter settings | [**DocsCloudConfigWrapper**](../../models/docs-cloud-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no activated Docs Connect tenant, so there is no configuration to return | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudConfigWrapper**](../../models/docs-cloud-config-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
