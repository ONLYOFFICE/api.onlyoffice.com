# changeExternalSharingSettings

> ExternalSharingSettingsWrapper changeExternalSharingSettings(ExternalSharingSettingsRequestDto)

`PUT /api/2.0/files/settings/externalsharingsettings`

Configure external sharing

Writes the portal's whole external-sharing policy in one request and returns the set that is now in force. Only the portal owner and a DocSpace administrator may call it; everyone else is refused, including an unauthenticated caller. Every field of the request is applied, so send the complete set rather than the field being changed - an omitted boolean is read as false. The portal keeps the set consistent: with `externalShare` false the default link type is forced to users of this portal only and sharing on social networks is turned off, and the three restriction fields only matter while external sharing is off. `blockExistingLinksOnRestrict` decides what happens to links that already exist, so it is the field that changes access to data already shared. The new set is pushed to the connected clients of the portal as well, and is published field by field by `GET api/2.0/files/settings`. Sending the same set again is safe.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ExternalSharingSettingsRequestDto** | body | [**ExternalSharingSettingsRequestDto**](../../models/external-sharing-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The external sharing policy that is now in force | [**ExternalSharingSettingsWrapper**](../../models/external-sharing-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
