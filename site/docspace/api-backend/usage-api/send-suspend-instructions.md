# sendSuspendInstructions

Referenced types are defined in the [full reference](../api.md).

> sendSuspendInstructions()

`POST /api/2.0/portal/suspend`

Send suspension instructions

Mails the portal owner the two confirmation links that deactivate this portal and bring it back again, and records the request in the audit trail; the portal itself is not changed here. The caller has to be the portal owner and hold the portal-settings right, and on a server installation the last remaining space cannot be deactivated - the call is refused when every other space has limited access. The letter always goes to the owner's own address, and the operation keeps working while the portal's payment has lapsed. It is mutating only in that it sends a message, and it is rate-limited to five requests per fifteen minutes per user and path by default, answering 429 above that. Nothing is returned in the body, so a client cannot tell from the answer whether the mail was delivered. The first link in the letter authorizes `PUT api/2.0/portal/suspend`, which suspends the portal, and the second one authorizes `PUT api/2.0/portal/continue`, which makes it active again. To remove the portal instead of pausing it, use `POST api/2.0/portal/delete`.

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
