# getLastLoginEvents

> LoginEventArrayWrapper getLastLoginEvents()

`GET /api/2.0/security/audit/login/last`

Get recent login events

Returns the twenty most recent login events of the whole portal - successful sign-ins, sign-outs and failed attempts alike - as the short summary a settings page shows before anyone asks for the full history. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the login history and audit trail section must be enabled for the portal, otherwise the call is answered with 402. The operation is read-only and takes no parameters: the number of events is fixed at twenty, nothing can be filtered, and events are ordered newest first. `date` is given in the portal time zone, `actionText` is the readable sentence describing the event with every substituted value shortened to fifty characters here, and `country` and `city` are resolved from the IP address and stay empty when it cannot be located. An empty list means the portal has recorded no login events yet. Use `GET api/2.0/security/audit/login/filter` to filter by user, action or period and to page through the whole history.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The twenty most recent login events of the portal, newest first | [**LoginEventArrayWrapper**](../../models/login-event-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The login history and audit trail section is not enabled for this portal | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**LoginEventArrayWrapper**](../../models/login-event-array-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
