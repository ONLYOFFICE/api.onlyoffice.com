# refreshLicense

> BooleanWrapper refreshLicense()

`GET /api/2.0/settings/license/refresh`

Refresh the license

Re-reads the license file of this Enterprise installation and applies its quota and tariff to the portal. So a replaced file or a renewed license takes effect without a restart. If a file was staged by `POST api/2.0/settings/license`, the call activates it. For the first activation, use `POST api/2.0/settings/license/accept` instead. Any signed-in user can call it. Despite the `GET`, the call changes data. You can repeat it, and each call applies the same license again. The call returns `true` when it applied the license. It returns `false` and changes nothing on a SaaS or open-source installation, which has no license path. The call returns 402 if the file is missing, cannot be read, or has no customer id or signature. It also returns 402 if the editing service does not confirm the license or reports another one. If the license starts later, the call returns 400. The call works while the portal is unpaid.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the license file was re-read and the portal quota and tariff rewritten from it, `false` on an installation that has no license path configured | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The license file does not start until a later date | - | - |
| **402** | No license file is on disk, the file cannot be read as a license or carries no customer id or signature, or the editing service does not confirm it | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
