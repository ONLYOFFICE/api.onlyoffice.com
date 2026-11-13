# acceptLicense

> StringWrapper acceptLicense()

`POST /api/2.0/settings/license/accept`

Activate a license

Activates the license file staged by `POST api/2.0/settings/license` on this Enterprise installation. The call makes the staged file the active one and applies its quota and tariff to the portal. Without a staged file, it applies the active license file again. Any signed-in user can call it. The call changes data, and you can repeat it. Read the result from the body, not from the status code. An empty string means the license is now active. Any other string is a message that explains why the activation failed. The call returns such a message for a missing or incorrect file, or a license the editing service rejects. It also returns a message if the license starts later. The call records the acceptance of the license even if the activation fails. On a SaaS or open-source installation, the call changes nothing. It returns a message that the pricing plan does not support the option. The call works while the portal is unpaid.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | An empty string when the license is now active, or a localized sentence explaining why it was not activated | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: Not defined
- **Accept**: application/json
