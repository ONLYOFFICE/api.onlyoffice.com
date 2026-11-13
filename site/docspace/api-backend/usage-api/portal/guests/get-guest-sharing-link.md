# getGuestSharingLink

> StringWrapper getGuestSharingLink(userId)

`GET /api/2.0/people/guests/{userId}/share`

Get a guest sharing link

Returns a link that lets another admin add a guest of the caller to their own guest list. Any signed-in user can call it, except a guest. A guest gets 403. If the caller cannot see the account, the call also returns 403. If the account is not a guest, the call returns 400. If no account has the ID, the call returns 404. The call is read-only. It returns a short confirmation link. Give it to the room admin or DocSpace admin who should get the guest. They accept it with `POST api/2.0/people/guests/share/approve`. The link has a token that expires, so create it right before use.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **UUID** (uuid) | The ID of the guest to be handed over, taken from the route. The account has to exist, has to be a guest, and has to be one the caller can see. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The shortened confirmation link, as plain text | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The account is not a guest | - | - |
| **403** | The caller is a guest, or is not allowed to see that account | - | - |
| **404** | No account has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
