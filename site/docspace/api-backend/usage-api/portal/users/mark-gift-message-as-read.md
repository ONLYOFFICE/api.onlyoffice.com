# markGiftMessageAsRead

> markGiftMessageAsRead()

`POST /api/2.0/portal/present/mark`

Mark a gift message as read

Marks the open-source gift message - the notice a server installation shows about its free edition - as read for the calling user, so the client stops displaying it. Any signed-in user may call it and nothing has to be called first. The flag is stored per user, so marking it read for one account leaves it unread for everybody else on the portal. The call is mutating but idempotent: repeating it changes nothing. It never fails on the caller's behalf - a storage error is written to the portal log and the operation still answers with a success, so the answer is no proof that the flag was saved. Nothing is returned in the body, and no operation reads the flag back or clears it again, which makes the change effectively permanent for that user. It touches only this one notice: portal-wide announcements and the letters the portal sends are unaffected, and other per-user settings are stored through the operations under `api/2.0/settings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The gift message is marked as read for the calling user; the same answer is returned when saving the flag failed, because the error is only written to the portal log. The response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
