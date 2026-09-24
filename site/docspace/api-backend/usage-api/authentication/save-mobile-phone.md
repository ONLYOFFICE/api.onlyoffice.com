# saveMobilePhone

> AuthenticationTokenWrapper saveMobilePhone(MobileRequestsDto)

`POST /api/2.0/authentication/setphone`

Set a mobile phone

Stores the mobile phone number of a user who is going through phone activation and sends the first SMS authentication code to it. It is reachable only with the phone-activation confirmation link that `POST api/2.0/authentication` returns in `confirmUrl` when SMS two-factor is required and the user has no activated number yet: that link authorizes the call in place of an authentication token, and no token is issued here. The operation is mutating and not idempotent - it saves the number as not activated, writes an audit event and sends a message - and an already activated number is not replaced this way, the stored number has to be erased first. The answer carries `sms`, the masked number and `expires`, the moment the code stops being accepted. Submit that code to `POST api/2.0/authentication/{code}`, which signs the user in and marks the number activated, or ask for another one with `POST api/2.0/authentication/sendsms`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MobileRequestsDto** | body | [**MobileRequestsDto**](../models/mobile-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The masked phone number the code was sent to and the moment that code expires - no authentication token yet | [**AuthenticationTokenWrapper**](../models/authentication-token-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuthenticationTokenWrapper**](../models/authentication-token-wrapper.md)

## Authorization

[Basic](authentication.md#basic), [OAuth2](authentication.md#oauth2) (scopes: read, write), [ApiKeyBearer](authentication.md#apikeybearer), [asc_auth_key](authentication.md#asc_auth_key), [Bearer](authentication.md#bearer), [OpenId](authentication.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
