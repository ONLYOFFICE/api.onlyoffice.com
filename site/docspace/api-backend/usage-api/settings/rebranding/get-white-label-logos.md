# getWhiteLabelLogos

> WhiteLabelItemArrayWrapper getWhiteLabelLogos(isDark, isDefault)

`GET /api/2.0/settings/whitelabel/logos`

Get the white label logos

Returns the logo slots of the current portal with the image URLs to show. Anyone can call it without signing in. The call takes the portal from the request address. The call is read-only. Each item has the slot number in `type`, its name, its image size, and the URLs in `path`. If `isDark` is `true`, the call fills only `dark`. If `isDark` is `false`, it fills only `light`. Without `isDark`, the call fills both URLs. Then `dark` is empty for a slot without a separate dark image. The list leaves out the notification slot 8, which only letters use. With `isDefault=true`, the call returns the installation-wide default logos instead. To learn which slots have no image of the portal's own, use `GET api/2.0/settings/whitelabel/logos/isdefault`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **isDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **isDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The logo slots of the portal, each with its target size and the URLs of the light and dark images | [**WhiteLabelItemArrayWrapper**](../../models/white-label-item-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WhiteLabelItemArrayWrapper**](../../models/white-label-item-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
