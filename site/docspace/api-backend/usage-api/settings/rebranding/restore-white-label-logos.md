# restoreWhiteLabelLogos

> BooleanWrapper restoreWhiteLabelLogos(isDark, isDefault)

`PUT /api/2.0/settings/whitelabel/logos/restore`

Restore the white label logos

Deletes all logo images of the current portal and brings back the built-in ones. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. Unlike the save calls, it works without a plan that includes customization. The call deletes the stored image files, so it cannot be undone. To get the images back, upload them again with `POST api/2.0/settings/whitelabel/logos/save`. You can repeat the call, and it returns `true` each time. It resets all slots together, not one by one. For a portal, it also resets the logo of older letter templates. It does not change the logo text. To reset the text, use `PUT api/2.0/settings/whitelabel/logotext/restore`. With `isDefault=true`, the call resets the installation-wide default logos instead. Only a self-hosted installation without limited space access allows this. Elsewhere the call returns 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **isDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **isDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the portal shows the built-in logos again | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow default branding to be edited | - | - |
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
