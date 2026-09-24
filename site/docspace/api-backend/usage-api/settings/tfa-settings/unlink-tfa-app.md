# unlinkTfaApp

> StringWrapper unlinkTfaApp(TfaRequestsDto)

`PUT /api/2.0/settings/tfaappnewapp`

Unlink the TFA application

Detaches the authenticator application from an account, so that the account has to link a new one before it can sign in again. `id` has to name an existing account: an empty or unknown value is refused. Passing the caller's own ID resets their own credential and returns the activation link they should follow next; passing another member's ID is allowed for the portal owner only, and every other caller, a DocSpace administrator included, is refused. The account has to have an application linked and the authenticator method has to be enabled on the portal, otherwise the call answers 405. The call is destructive: the account's backup codes are dropped together with the credential and all of its sessions are signed out. For another member the portal also emails them that their TFA was reset, and the answer is then an empty string. The portal-wide policy is not touched, so TFA stays required and the account sets up an application again through `GET api/2.0/settings/tfaapp/confirm`; lift the requirement for everyone with `PUT api/2.0/settings/tfaapp`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaRequestsDto** | body | [**TfaRequestsDto**](../../models/tfa-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The activation link when the caller reset their own application, or an empty string when another member's was reset | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not the portal owner, or the account cannot be resolved from `id` | - | - |
| **405** | The authenticator method is not enabled on this portal, or the account has no application linked | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
