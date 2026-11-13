# saveWhiteLabelSettingsFromFiles

> BooleanWrapper saveWhiteLabelSettingsFromFiles(isDark, isDefault)

`POST /api/2.0/settings/whitelabel/logos/savefromfiles`

Save the logos from files

Replaces logo images of the current portal with files from a `multipart/form-data` request. The call ignores form field names and reads each file name instead. A file name starts with the slot `type` number from `GET api/2.0/settings/whitelabel/logos`. It ends with the image extension, as in `2.png`. A name that contains `dark`, as in `2.dark.png`, sets the dark image of the slot. Only slots 1, 2, 6, 7, and 8 have a dark image. For other slots, the call skips dark files. Slots without a file keep their image. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. A request without files also returns 403. If the plan has no customization or the installation hides branding, the call returns 402. The call changes data and returns `true`. You can repeat it with the same files. To undo the call, use `PUT api/2.0/settings/whitelabel/logos/restore`. With `isDefault=true`, the call changes the installation-wide default logos instead. Only a self-hosted installation without limited space access allows this. Elsewhere the call returns 403. To send images as base64, use `POST api/2.0/settings/whitelabel/logos/save`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **isDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **isDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the uploaded files have been stored as the portal logos | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal's pricing plan has no customization option, or the branding section is switched off in the installation | - | - |
| **403** | The caller is not a DocSpace administrator, the request is not a form or carries no file, or the installation does not allow default branding to be edited | - | - |
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
