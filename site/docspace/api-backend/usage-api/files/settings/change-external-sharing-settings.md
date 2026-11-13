# changeExternalSharingSettings

> ExternalSharingSettingsWrapper changeExternalSharingSettings(ExternalSharingSettingsRequestDto)

`PUT /api/2.0/files/settings/externalsharingsettings`

Configure external sharing

Changes the whole external sharing policy of the portal. It returns the policy that is now in force. Requires a DocSpace admin. Other callers get 403. The call changes data, and you can repeat it with the same body. The call writes every field, so an omitted field becomes false. Send the whole policy, not only the changed field. If `externalShare` is false, the portal sets `defaultShareLinkInternal` to true. It also turns off sharing on social networks. The `blockExistingLinksOnRestrict` field decides if existing links keep working while external sharing is off.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ExternalSharingSettingsRequestDto** | body | [**ExternalSharingSettingsRequestDto**](../../models/external-sharing-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The external sharing policy that is now in force | [**ExternalSharingSettingsWrapper**](../../models/external-sharing-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ExternalSharingSettingsWrapper**](../../models/external-sharing-settings-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
