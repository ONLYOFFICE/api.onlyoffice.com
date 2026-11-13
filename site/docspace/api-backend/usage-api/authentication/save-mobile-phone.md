# saveMobilePhone

> AuthenticationTokenWrapper saveMobilePhone(MobileRequestDto)

`POST /api/2.0/authentication/setphone`

Set a mobile phone

Saves the phone number of a user and sends an SMS code to it. Use it when `POST api/2.0/authentication` returns `sms` with a phone activation link in `confirmUrl`. Sign the request with the confirmation token from that link. An anonymous call or an invalid or expired link returns 401. An authentication token alone returns 403. The call changes data. It saves the number as not activated. The number becomes activated when `POST api/2.0/authentication/{code}` accepts a code sent to it. If a code sent to this number is still valid, the call sends no new SMS. You can repeat it to change a number that is not activated yet. The answer has no token. To send another code, use `POST api/2.0/authentication/sendsms`. The call cannot change an activated number. If SMS codes are on for the user but the portal cannot send them, the call returns 405. It still saves the number but sends no SMS.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MobileRequestDto** | body | [**MobileRequestDto**](../models/mobile-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The masked phone number the code was sent to and the moment that code expires - no authentication token yet | [**AuthenticationTokenWrapper**](../models/authentication-token-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The request carries no confirmation token from a phone activation link, or the link is invalid or expired | - | - |
| **403** | The request is signed with an authentication token instead of the phone activation link | - | - |
| **405** | SMS two-factor is switched on for the user but the portal cannot send SMS codes, for example because its plan does not include them; the number is stored and no code is sent | - | - |
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
