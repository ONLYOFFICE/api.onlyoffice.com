# updateTenantConfig

> DocsCloudConfigWrapper updateTenantConfig(DocsCloudConfigRequestDto)

`PUT /api/2.0/settings/docscloud/tenant/config`

Update the Docs Connect tenant configuration

Replaces the configuration of the Docs Connect tenant of the current portal. It returns the configuration as Docs Connect stored it. The portal needs a Docs Connect tenant from `POST api/2.0/settings/docscloud/trial` or a Docs Connect purchase. Without one, the call returns 400, and `GET api/2.0/settings/docscloud/tenant` returns an empty result. First read the current values with `GET api/2.0/settings/docscloud/tenant/config`. Then send back whole sections: `security`, `server`, `wopi`, and `ipFilter`. Sections you leave out do not reach Docs Connect. In a section you send, an unset field becomes `0`, `false`, or empty. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and you can repeat it with the same body. The next read returns the new values without `refresh=true`. The call changes only these settings, never the subscription, the user quota, or the license. It returns 400 if the body cannot be read, a text is too long, or `server.fileSizeLimit` is out of range. In that case, nothing reaches Docs Connect.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DocsCloudConfigRequestDto** | body | [**DocsCloudConfigRequestDto**](../../models/docs-cloud-config-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The configuration of the Docs Connect tenant as Docs Connect stored it after the update | [**DocsCloudConfigWrapper**](../../models/docs-cloud-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, a text field is longer than 255 characters, the file size limit is outside 0-209715200 bytes, or the portal has no activated Docs Connect tenant | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
