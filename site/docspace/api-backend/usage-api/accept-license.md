# acceptLicense

Referenced types are defined in the [full reference](../api.md).

> StringWrapper acceptLicense()

`POST /api/2.0/settings/license/accept`

Activate a license

Activates the license staged by `POST api/2.0/settings/license` on this self-hosted Enterprise installation: it records that the license was accepted, promotes the staged file to the active one and rewrites the portal-wide quota and tariff from it. Upload a file first: with nothing staged and no license on disk there is nothing to activate. The caller only has to be signed in, and the activation is recorded in the audit trail. Repeating the call is safe: the acceptance stamp is written only once and the same license is simply applied again. Read the outcome from the body rather than the status code - an empty string means the license is now active, and any other string is a message explaining why it is not: no license key was found, the key is not correct, the installed edition does not match the license type, or the license is expired or too small for the current user count. The acceptance stamp survives a failed activation, so a corrected file needs nothing extra. An installation with no license path configured answers that its pricing plan does not support the option and changes nothing. The operation stays reachable while the portal is unpaid.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | An empty string when the license is now active, or a localized sentence explaining why it was not activated | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
