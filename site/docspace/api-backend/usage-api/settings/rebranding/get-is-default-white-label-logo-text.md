# getIsDefaultWhiteLabelLogoText

> IsDefaultWhiteLabelLogosWrapper getIsDefaultWhiteLabelLogoText(isDark, isDefault)

`GET /api/2.0/settings/whitelabel/logotext/isdefault`

Check the default logo text

Returns whether the current portal has no logo text of its own. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The answer has `name` set to `logotext`. Its `default` is `true` while the portal has no stored text. Saving `ONLYOFFICE` itself clears the setting, so `default` stays `true`. After `POST api/2.0/settings/whitelabel/logotext/save` with another text, `default` becomes `false`. After `PUT api/2.0/settings/whitelabel/logotext/restore`, it becomes `true` again. With `isDefault=true`, the call checks the installation-wide default text instead. To check the logos, use `GET api/2.0/settings/whitelabel/logos/isdefault`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **isDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **isDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A single `logotext` entry telling whether the portal still uses the built-in wordmark | [**IsDefaultWhiteLabelLogosWrapper**](../../models/is-default-white-label-logos-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IsDefaultWhiteLabelLogosWrapper**](../../models/is-default-white-label-logos-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
