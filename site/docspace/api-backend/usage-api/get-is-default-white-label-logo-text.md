# getIsDefaultWhiteLabelLogoText

Referenced types are defined in the [full reference](../api.md).

> IsDefaultWhiteLabelLogosWrapper getIsDefaultWhiteLabelLogoText(IsDark, IsDefault)

`GET /api/2.0/settings/whitelabel/logotext/isdefault`

Check the default logo text

Reports whether the current portal still uses the built-in wordmark or one that was stored for it, which is what an interface needs to decide whether a Restore action applies to the text. Requires a DocSpace administrator. The call is read-only and idempotent. The answer has the same shape as one entry of `GET api/2.0/settings/whitelabel/logos/isdefault`, with `name` fixed to `logotext` and `default` set to `true` while no text has been stored and to `false` once one has. Because `GET api/2.0/settings/whitelabel/logotext` falls back to `ONLYOFFICE` when nothing is stored, this operation is the only way to tell a portal that deliberately kept the built-in wordmark from one that saved the very same text. Pass `isDefault=true` to inspect the installation-wide default branding instead of this portal's. The flag turns back to `true` after `PUT api/2.0/settings/whitelabel/logotext/restore`, and to `false` after `POST api/2.0/settings/whitelabel/logotext/save`. Saving the built-in wordmark itself counts as clearing the setting, so the flag stays `true` in that case as well.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IsDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **IsDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A single `logotext` entry telling whether the portal still uses the built-in wordmark | [**IsDefaultWhiteLabelLogosWrapper**](../api.md#model-isdefaultwhitelabellogoswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IsDefaultWhiteLabelLogosWrapper**](../api.md#model-isdefaultwhitelabellogoswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
