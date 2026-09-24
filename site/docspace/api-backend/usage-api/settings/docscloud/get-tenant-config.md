# getTenantConfig

> DocsCloudConfigWrapper getTenantConfig(refresh)

`GET /api/2.0/settings/docscloud/tenant/config`

Get the Docs Connect tenant configuration

Returns the configuration of the Docs Connect tenant of the current portal: its name, the security secret and header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter rules. The portal must have an activated Docs Connect tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a Docs Connect purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings, on an installation where the Docs Connect service is configured. The call is read-only, idempotent and cached for an hour, so pass `refresh=true` to read the current state from Docs Connect; the same values are changed by `PUT api/2.0/settings/docscloud/tenant/config`, which drops the cached copy itself, so no refresh is needed after an update. In the result, `security.secret` is a credential, so the response should be treated as sensitive; `server.fileSizeLimit` is in bytes and an update cannot raise it above 209715200 (200 MB); and an empty or absent `ipFilter.rules` means no address restriction is configured. The license and server version, the address of the assigned server, the per-user quota and the usage counters are not part of it: they live in `.../tenant/info`, `.../tenant`, `.../tenant/quota` and `.../tenant/usage`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the configuration from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to an hour old. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The configuration of the Docs Connect tenant of the portal, with its security, server, WOPI and IP filter settings | [**DocsCloudConfigWrapper**](../../models/docs-cloud-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no activated Docs Connect tenant, so there is no configuration to return | - | - |
| **403** | The caller is not allowed to edit the portal settings | - | - |
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
