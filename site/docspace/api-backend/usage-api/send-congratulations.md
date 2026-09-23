# sendCongratulations

Referenced types are defined in the [full reference](../api.md).

> sendCongratulations(Userid, Key)

`POST /api/2.0/portal/sendcongratulations`

Send congratulations

Sends the welcome letter that follows the registration of a new portal to the account named by `userid` and switches on the second authentication factor the installation is configured to require after registration; on a hosted portal in custom mode the registration data is mailed to the sales address as well. Open to unauthenticated callers: in place of a token it needs `key`, the confirmation key of the sign-in link the portal issued for that account, and that key is accepted for one hour after it was created - a wrong, foreign or expired key answers 403 and sends nothing. Both parameters go in the query string. The call is meant to be made once, right after registration; it is not idempotent, and every call within that hour sends the letters again. When the installation asks for SMS or an authenticator app after registration, this call is what enables that method for the whole portal, unless the new account is an internal test address. Nothing is returned in the body and there is no operation that reports afterwards whether the letters were delivered.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Userid** | query | **UUID** (uuid) | The account the welcome letter is addressed to, by portal user ID. The key in `key` has to have been issued for this same account, so the pair is what authorises the call. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **Key** | query | **String** | The confirmation key from the sign-in link the portal issued for that account, which stands in for a token here. It is accepted for one hour after it was created; a wrong, foreign or expired key answers 403 and sends nothing. | [required] [example: `birthday`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The welcome letters were sent and the configured second factor was switched on for the portal | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The confirmation key does not match the user or is older than one hour | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[cookieAuth](../api.md#cookieauth), [bearerAuth](../api.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
