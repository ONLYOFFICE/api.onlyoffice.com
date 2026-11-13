# uploadLicense

> StringWrapper uploadLicense(files)

`POST /api/2.0/settings/license`

Upload a license

Uploads a license file for this Enterprise installation as `multipart/form-data` and stages it. The call reads only the first entry of `Files` and ignores the rest. It checks the file but does not activate it. To activate it, use `POST api/2.0/settings/license/accept`. Until then, the portal keeps its current license. Requires a DocSpace admin, or a wizard or admin link token before the setup wizard is complete. Other callers get 403, including such a token after the wizard is complete. The call changes data. A new upload replaces the staged file, so you can repeat it. The call returns a localized text that you can show to the user. For a license past its due date, the text adds the date when support and updates ended. The call still accepts such a license. The call returns 400 if the request has no file or the license starts later. It returns 415 on a SaaS or open-source installation, which takes no license file. The editing service checks the license only at activation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **files** | form | **List** (binary) | The license file, sent as `multipart/form-data`. Only the first entry is read and the rest are ignored, and a request carrying none is refused with 400. A file that cannot be read as a license, that carries no customer id or signature, or that was issued for the other edition fails the call; one whose start date has not arrived yet is refused, while one already past its due date is still accepted. Staging only stores the file - `POST api/2.0/settings/license/accept` puts it in force - and a file staged earlier is overwritten. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized confirmation that the file was staged, carrying the date support and updates ended when the license is already overdue | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request carried no license file, or the license does not start until a later date | - | - |
| **403** | The caller is not a DocSpace administrator, or a confirmation link was used after the setup wizard had already been completed | - | - |
| **415** | The installation has no license path configured, so it cannot be given a license file | - | - |
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
