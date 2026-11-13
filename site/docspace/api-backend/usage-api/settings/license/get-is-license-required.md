# getIsLicenseRequired

> BooleanWrapper getIsLicenseRequired()

`GET /api/2.0/settings/license/required`

Check if a license is required

Returns whether this installation still needs a license file. The setup wizard asks this before it offers to upload a license. Anyone can call it without signing in. The call is read-only. It returns `true` only for an Enterprise installation whose license file is not on disk yet. It returns `false` on a SaaS or open-source installation, which needs no license. It also returns `false` if the portal lets anyone in without an account, or hides the pricing section. The same applies to an installation set up from cloud image metadata. So `false` does not mean that the portal has a license. The call does not describe the active license or check it with the editing service. The answer becomes `false` only after a staged file is activated, not after the upload. To activate it, use `POST api/2.0/settings/license/accept`. The call works while the portal is unpaid.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when this Enterprise installation still needs a license file, `false` when one is already active or the build needs none | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
