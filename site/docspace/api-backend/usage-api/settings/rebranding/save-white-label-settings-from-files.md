# saveWhiteLabelSettingsFromFiles

> BooleanWrapper saveWhiteLabelSettingsFromFiles(IsDark, IsDefault)

`POST /api/2.0/settings/whitelabel/logos/savefromfiles`

Save the logos from files

Replaces the branding images of the current portal with the files sent as `multipart/form-data`, which is the way to upload image files directly instead of embedding them as base64 in `POST api/2.0/settings/whitelabel/logos/save`. The form field names are not used: each file is routed by its own name, which has to start with the numeric logo slot published by `GET api/2.0/settings/whitelabel/logos` and end with the image extension, as in `2.png`; a name that also contains `dark`, as in `2.dark.png`, is stored as the dark-theme image of that slot. Slots that get no file keep the image they have, and a dark file is ignored for the favicon and the editor logos, which have no dark variant. A request that carries no file at all is rejected. Requires a DocSpace administrator and a plan that includes branding, which `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment required. It answers `true`, overwrites in place and is undone by `PUT api/2.0/settings/whitelabel/logos/restore`. With `isDefault=true` it writes the installation-wide default branding, which only a server installation allows.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IsDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **IsDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the uploaded files have been stored as the portal logos | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow default branding to be edited | - | - |
| **409** | The request carried no file to store as a logo | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
