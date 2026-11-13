# sendCongratulations

> sendCongratulations(userid, key)

`POST /api/2.0/portal/sendcongratulations`

Send congratulations

Sends the welcome email of a newly registered portal to the account in `userid`. Anyone can call it without signing in. Instead of a token, `key` must be the confirmation key of the sign-in link for that account. The key works for one hour. The call returns 403 for a wrong, foreign, or expired key, and then sends nothing. The call changes data. Call it once, right after registration. Each repeated call with a valid key sends the emails again. On a hosted portal, the password link of the earlier email then stops working. If the installation requires SMS or an authenticator app after registration, the call turns that method on for the portal. It skips this step for an internal test address. On a hosted portal in custom mode, the call also sends the registration data to the sales address. The call returns no data.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | query | **UUID** (uuid) | The account the welcome letter is addressed to, by portal user ID. The key in `key` has to have been issued for this same account, so the pair is what authorises the call. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **key** | query | **String** | The confirmation key from the sign-in link the portal issued for that account, which stands in for a token here. It is accepted for one hour after it was created; a wrong, foreign or expired key answers 403 and sends nothing. | [required] [example: `birthday`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The welcome letters were sent and the configured second factor was switched on for the portal | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The confirmation key does not match the user or is older than one hour | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
