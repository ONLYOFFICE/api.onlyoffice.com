# uploadLicense

> StringWrapper uploadLicense(Files)

`POST /api/2.0/settings/license`

Upload a license

Takes the license file of this self-hosted Enterprise installation as `multipart/form-data` and stages it for activation; only the first entry of `Files` is read and the rest are ignored. The file is validated but not put in force here - follow with `POST api/2.0/settings/license/accept` to activate it, and until then the portal keeps the license it already had. The caller must be a DocSpace administrator, or hold a wizard or administrator confirmation link while the setup wizard is still unfinished; after the wizard is complete such a link alone is refused. An earlier staged file is overwritten, so the upload can be repeated safely. The answer is a localized sentence, not a structured result: `Uploaded successfully` on its own, or the same words plus the date since when support and updates are not covered, because a file already past its due date is still accepted. A request carrying no file, and a license whose start date has not arrived yet, are rejected as invalid; a file that cannot be read as a license, carries no customer id or signature, or was issued for the other edition fails the call. Whether the editing service accepts it is only checked at activation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Files** | form | **List** (binary) | The license file, sent as `multipart/form-data`. Only the first entry is read and the rest are ignored, and a request carrying none is refused with 400. A file that cannot be read as a license, that carries no customer id or signature, or that was issued for the other edition fails the call; one whose start date has not arrived yet is refused, while one already past its due date is still accepted. Staging only stores the file - `POST api/2.0/settings/license/accept` puts it in force - and a file staged earlier is overwritten. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized confirmation that the file was staged, carrying the date support and updates ended when the license is already overdue | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request carried no license file, or the license does not start until a later date | - | - |
| **403** | The caller is not a DocSpace administrator, or a confirmation link was used after the setup wizard had already been completed | - | - |
| **405** | The installation has no license path configured, so it cannot be given a license file | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
