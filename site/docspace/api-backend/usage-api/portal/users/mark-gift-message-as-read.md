# markGiftMessageAsRead

> markGiftMessageAsRead()

`POST /api/2.0/portal/present/mark`

Mark a gift message as read

Marks the open-source gift message as read for the calling user, so the app stops showing it. Any signed-in user can call it. The portal saves the flag per user, so other accounts still see the message. The call changes data, and you can repeat it. It returns success even if saving fails. In that case, it only writes the error to the portal log. So a success does not prove that the portal saved the flag. No operation reads the flag or clears it again.

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
