# saveMobilePhone

Referenced types are defined in the [full reference](../api.md).

> AuthenticationTokenWrapper saveMobilePhone(MobileRequestsDto)

`POST /api/2.0/authentication/setphone`

Set a mobile phone

Stores the mobile phone number of a user who is going through phone activation and sends the first SMS authentication code to it. It is reachable only with the phone-activation confirmation link that `POST api/2.0/authentication` returns in `confirmUrl` when SMS two-factor is required and the user has no activated number yet: that link authorizes the call in place of an authentication token, and no token is issued here. The operation is mutating and not idempotent - it saves the number as not activated, writes an audit event and sends a message - and an already activated number is not replaced this way, the stored number has to be erased first. The answer carries `sms`, the masked number and `expires`, the moment the code stops being accepted. Submit that code to `POST api/2.0/authentication/{code}`, which signs the user in and marks the number activated, or ask for another one with `POST api/2.0/authentication/sendsms`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MobileRequestsDto** | body | [**MobileRequestsDto**](../api.md#model-mobilerequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The masked phone number the code was sent to and the moment that code expires - no authentication token yet | [**AuthenticationTokenWrapper**](../api.md#model-authenticationtokenwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuthenticationTokenWrapper**](../api.md#model-authenticationtokenwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
