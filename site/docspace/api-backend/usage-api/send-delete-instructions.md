# sendDeleteInstructions

Referenced types are defined in the [full reference](../api.md).

> sendDeleteInstructions()

`POST /api/2.0/portal/delete`

Send removal instructions

Mails the portal owner the confirmation link that removes this portal; nothing about the portal changes until that link is used. The caller has to be the portal owner and hold the portal-settings right, and on a server installation the last remaining space cannot be removed - the call is refused when every other space has limited access. The letter goes to the owner's own address whoever asked for it, and it warns about the subscription that will stop renewing when the portal is on a paid plan. The operation keeps working while the portal's payment has lapsed, is mutating only in that it sends a message, and is rate-limited to five requests per fifteen minutes per user and path by default, answering 429 above that. Nothing is returned in the body. The link in the letter authorizes `DELETE api/2.0/portal/delete`, which deletes the portal with all of its rooms, files and accounts and cannot be undone. To pause the portal instead of deleting it, send the deactivation letter with `POST api/2.0/portal/suspend`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | OK | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
