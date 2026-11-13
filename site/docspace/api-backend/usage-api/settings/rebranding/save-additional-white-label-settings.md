# saveAdditionalWhiteLabelSettings

> BooleanWrapper saveAdditionalWhiteLabelSettings(AdditionalWhiteLabelSettingsRequestDto)

`POST /api/2.0/settings/rebranding/additional`

Save the additional white label settings

Changes which help and community resources the interface shows. The `settings` object replaces the whole set, so send every flag. The call stores a missing flag as `false`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. Only a self-hosted installation without limited space access allows the call. Elsewhere, including a SaaS portal, it returns 403. If the plan has no customization or the installation hides branding, the call returns 402. The flags apply to the whole installation and reach all its portals. They control only whether entries show, not their addresses. The call changes data and returns `true`. You can repeat it with the same body. To undo the call, use `DELETE api/2.0/settings/rebranding/additional`. If `settings` is missing, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AdditionalWhiteLabelSettingsRequestDto** | body | [**AdditionalWhiteLabelSettingsRequestDto**](../../models/additional-white-label-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the resource flags have been stored for the installation | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request carries no settings object | - | - |
| **402** | The portal's pricing plan has no customization option, or the branding section is switched off in the installation | - | - |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow branding to be edited | - | - |
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
