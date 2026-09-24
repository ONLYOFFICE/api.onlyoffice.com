# getWhiteLabelLogos

> WhiteLabelItemArrayWrapper getWhiteLabelLogos(IsDark, IsDefault)

`GET /api/2.0/settings/whitelabel/logos`

Get the white label logos

Lists the branding logo slots of the current portal together with the image URLs to render, which is what a login page, an editor or a mail template needs before any user is known. No authentication is required, and the portal is resolved from the address the request is made to. The call is read-only and idempotent. Each item carries the slot as a number in `type`, its stable name in `name`, the size the image is fitted to in `size` (`width` and `height` in pixels), and the URLs in `path`. When `isDark` is passed, only the matching theme is filled in, `light` for `false` and `dark` for `true`; when it is omitted both are filled in and `dark` comes back empty for the slots that have no separate dark image. The notification slot is not part of this list, as it is derived from the login-page logo and used only in letters. Pass `isDefault=true` to read the installation-wide default logos instead of this portal's. To learn which slots are still untouched use `GET api/2.0/settings/whitelabel/logos/isdefault`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IsDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **IsDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

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

[cookieAuth](../settings.md#cookieauth), [bearerAuth](../settings.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
