# getIsDefaultWhiteLabelLogos

> IsDefaultWhiteLabelLogosArrayWrapper getIsDefaultWhiteLabelLogos(isDark, isDefault)

`GET /api/2.0/settings/whitelabel/logos/isdefault`

Check the default white label logos

Returns whether each logo slot of the current portal has no image of its own and shows the installation default. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The list includes the notification slot 8. So it has one entry more than `GET api/2.0/settings/whitelabel/logos`. Each entry has the slot name in `name`. Its `default` is `true` until the portal stores an image for the slot in either theme. Slot 8 always has the same `default` as the login-page slot 2. With `isDefault=true`, the call checks the installation-wide default logos instead. To get the logo URLs, use `GET api/2.0/settings/whitelabel/logos`. To check the logo text, use `GET api/2.0/settings/whitelabel/logotext/isdefault`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **isDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **isDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One entry per logo slot, telling whether the slot still holds the built-in image | [**IsDefaultWhiteLabelLogosArrayWrapper**](../../models/is-default-white-label-logos-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IsDefaultWhiteLabelLogosArrayWrapper**](../../models/is-default-white-label-logos-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
