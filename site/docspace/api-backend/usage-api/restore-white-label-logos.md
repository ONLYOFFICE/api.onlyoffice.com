# restoreWhiteLabelLogos

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper restoreWhiteLabelLogos(IsDark, IsDefault)

`PUT /api/2.0/settings/whitelabel/logos/restore`

Restore the white label logos

Drops every logo uploaded for the current portal and brings back the built-in images, so the portal looks unbranded again on the login page, in the left menu, in the editors and in letters. Requires a DocSpace administrator. Unlike the two save operations it does not need a plan that includes branding, so a portal whose subscription no longer covers it can still be reset. The call is destructive: the stored image files are deleted and cannot be recovered from the portal, only re-uploaded with `POST api/2.0/settings/whitelabel/logos/save`. It is idempotent and answers `true` both when logos were removed and when there was nothing to remove. All slots are reset together; there is no way to restore a single one. For this portal the picture kept for the older mail templates is reset along with the logos, while the logo text is left as it is and has its own `PUT api/2.0/settings/whitelabel/logotext/restore`. Pass `isDefault=true` to reset the installation-wide default branding instead, which only a server installation allows. Confirm the result with `GET api/2.0/settings/whitelabel/logos/isdefault`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **IsDark** | query | **Boolean** | Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only. Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image. | [optional] [example: `true`] |
| **IsDefault** | query | **Boolean** | Whether the installation-wide default branding is addressed instead of this portal own. Writing the default branding is only allowed on a self-hosted installation; elsewhere it is refused with 403. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the portal shows the built-in logos again | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
