# restoreWhiteLabelLogoText

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper restoreWhiteLabelLogoText(IsDark, IsDefault)

`PUT /api/2.0/settings/whitelabel/logotext/restore`

Restore the white label logo text

Clears the wordmark stored for the current portal, so the built-in `ONLYOFFICE` is printed again next to or instead of the logo images. Requires a DocSpace administrator. Unlike `POST api/2.0/settings/whitelabel/logotext/save` it does not need a plan that includes branding, so a portal whose subscription no longer covers branding can still be reset. The call is destructive for the stored text, which is not kept anywhere and has to be typed again to come back, and it is idempotent: `true` comes back both when a text was cleared and when there was none. Logo images are left untouched and have their own `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to reset the installation-wide default wordmark instead of this portal's, which only a server installation allows. After the call `GET api/2.0/settings/whitelabel/logotext` reports `ONLYOFFICE` and `GET api/2.0/settings/whitelabel/logotext/isdefault` reports `default` as `true`. The wordmark is the only setting this operation touches, so the company details and the help links of the installation are left as they are.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IsDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **IsDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the portal prints the built-in wordmark again | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow default branding to be edited | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
