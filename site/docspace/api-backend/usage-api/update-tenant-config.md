# updateTenantConfig

Referenced types are defined in the [full reference](../api.md).

> DocsCloudConfigWrapper updateTenantConfig(DocsCloudConfig)

`PUT /api/2.0/settings/docscloud/tenant/config`

Update the Docs Connect tenant configuration

Replaces the configuration of the Docs Connect tenant of the current portal: its name, the security secret and header name, the file size limit and anonymous access switch of the server, the WOPI switch and the IP filter rules; it returns the configuration as Docs Connect stored it. The portal must have an activated Docs Connect tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a Docs Connect purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. Read the current values with `GET api/2.0/settings/docscloud/tenant/config` first and send back whole sections: the sections left out of the request are not sent to Docs Connect at all, while a section that is present is sent with all of its fields, so a field left unset inside it goes out as `0`, `false` or empty. The caller must be a portal administrator allowed to edit the portal settings, on an installation where the Docs Connect service is configured. The call is mutating, synchronous and idempotent, it is recorded in the portal audit trail, and it drops the cached configuration itself, so the next read returns the new values without `refresh=true`. The `tenantName`, `security.secret`, `security.header` and every `ipFilter.rules` address are capped at 255 characters and `server.fileSizeLimit` at 209715200 bytes (200 MB); a value outside those bounds is rejected with 400 before anything reaches Docs Connect. It changes these settings only, never the subscription, the user quota or the license.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DocsCloudConfig** | body | [**DocsCloudConfig**](../api.md#model-docscloudconfig) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The configuration of the Docs Connect tenant as Docs Connect stored it after the update | [**DocsCloudConfigWrapper**](../api.md#model-docscloudconfigwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A text field is longer than 255 characters, the file size limit is outside 0-209715200 bytes, or the portal has no activated Docs Connect tenant | - | - |
| **403** | The caller is not allowed to edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudConfigWrapper**](../api.md#model-docscloudconfigwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsEncryptionApi
