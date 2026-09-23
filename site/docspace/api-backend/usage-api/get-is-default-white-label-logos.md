# getIsDefaultWhiteLabelLogos

Referenced types are defined in the [full reference](../api.md).

> IsDefaultWhiteLabelLogosArrayWrapper getIsDefaultWhiteLabelLogos(IsDark, IsDefault)

`GET /api/2.0/settings/whitelabel/logos/isdefault`

Check the default white label logos

Reports, slot by slot, whether the current portal still shows the built-in image or a logo that was uploaded for it, which is what an interface needs to decide where a Restore action makes sense. Requires a DocSpace administrator; the URLs themselves are public and come from `GET api/2.0/settings/whitelabel/logos`, which needs no authentication. The call is read-only and idempotent. Every logo slot is returned, including the notification logo that the public list leaves out, so the result has one entry more than that list. An entry gives the stable slot name in `name` and `default` set to `true` while the slot has never been written, and to `false` once an image has been stored for it, whether for the light or for the dark theme. A slot goes back to `true` after `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to inspect the installation-wide default branding instead of this portal's. The logo text is reported separately by `GET api/2.0/settings/whitelabel/logotext/isdefault`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IsDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **IsDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One entry per logo slot, telling whether the slot still holds the built-in image | [**IsDefaultWhiteLabelLogosArrayWrapper**](../api.md#model-isdefaultwhitelabellogosarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IsDefaultWhiteLabelLogosArrayWrapper**](../api.md#model-isdefaultwhitelabellogosarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
