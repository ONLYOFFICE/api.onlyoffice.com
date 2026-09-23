# saveWhiteLabelSettings

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper saveWhiteLabelSettings(IsDark, IsDefault, WhiteLabelRequestsDto)

`POST /api/2.0/settings/whitelabel/logos/save`

Save the white label logos

Replaces the branding images of the current portal with the ones sent in the request, so that the logos on the login page, in the left menu, in the editors and in letters come from this portal. Every entry of `logo` names a logo slot in its `key` - the numeric type published by `GET api/2.0/settings/whitelabel/logos` - and carries the light-theme and the dark-theme image in `light` and `dark`. An image is either a `data:image/png;base64,...` payload (`png`, `jpg` and `svg` are accepted) or the name of a file already uploaded to the temporary store; a slot left out of the request keeps its image. The dark image is stored only for the slots that have a dark variant, that is `1`, `2`, `6`, `7` and `8`, and is ignored for the favicon and the editor logos; saving slot `2` also rebuilds the notification logo `8` from it. Requires a DocSpace administrator and a plan that includes branding, which `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment required. It answers `true` and is undone by `PUT api/2.0/settings/whitelabel/logos/restore`. With `isDefault=true` it writes the installation-wide default branding instead, which only a server installation allows. Uploaded files go to `POST api/2.0/settings/whitelabel/logos/savefromfiles`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IsDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **IsDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |
| **WhiteLabelRequestsDto** | body | [**WhiteLabelRequestsDto**](../api.md#model-whitelabelrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the submitted logos have been stored for the portal | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: application/json
- **Accept**: application/json
