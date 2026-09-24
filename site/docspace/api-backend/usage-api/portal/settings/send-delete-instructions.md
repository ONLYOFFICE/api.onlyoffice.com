# sendDeleteInstructions

> sendDeleteInstructions()

`POST /api/2.0/portal/delete`

Send removal instructions

Mails the portal owner the confirmation link that removes this portal; nothing about the portal changes until that link is used. The caller has to be the portal owner and hold the portal-settings right, and on a server installation the last remaining space cannot be removed - the call is refused when every other space has limited access. The letter goes to the owner's own address whoever asked for it, and it warns about the subscription that will stop renewing when the portal is on a paid plan. The operation keeps working while the portal's payment has lapsed, is mutating only in that it sends a message, and is rate-limited to five requests per fifteen minutes per user and path by default, answering 429 above that. Nothing is returned in the body. The link in the letter authorizes `DELETE api/2.0/portal/delete`, which deletes the portal with all of its rooms, files and accounts and cannot be undone. To pause the portal instead of deleting it, send the deactivation letter with `POST api/2.0/portal/suspend`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The removal letter has been handed to the mail service; nothing about the portal has changed yet and the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
