# saveWhiteLabelSettings

> BooleanWrapper saveWhiteLabelSettings(isDark, isDefault, WhiteLabelRequestDto)

`POST /api/2.0/settings/whitelabel/logos/save`

Save the white label logos

Replaces logo images of the current portal. The portal shows them on the login page, in the menu, in editors, and in letters. Each `logo` entry names a slot by its `type` number from `GET api/2.0/settings/whitelabel/logos`. A slot left out of the request keeps its image. Only slots 1, 2, 6, 7, and 8 have a dark image. For other slots, the call ignores `dark`. Saving slot 2 also rebuilds the notification logo, slot 8, from the light image. The call reads only `logo` from the body. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the plan has no customization or the installation hides branding, the call returns 402. To check this first, use `GET api/2.0/settings/enablewhitelabel`. The call changes data and returns `true`. You can repeat it with base64 images. The call deletes a used temporary file, so a repeat must send that image again. To undo the call, use `PUT api/2.0/settings/whitelabel/logos/restore`. With `isDefault=true`, the call changes the installation-wide default logos instead. Only a self-hosted installation without limited space access allows this. Elsewhere the call returns 403. The call also returns 400 if `logoText` is too long, although it does not store the text. To upload image files, use `POST api/2.0/settings/whitelabel/logos/savefromfiles`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **isDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **isDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |
| **WhiteLabelRequestDto** | body | [**WhiteLabelRequestDto**](../../models/white-label-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the submitted logos have been stored for the portal | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The `logoText` is longer than 40 characters, although this method does not store it | - | - |
| **402** | The portal's pricing plan has no customization option, or the branding section is switched off in the installation | - | - |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow default branding to be edited | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
