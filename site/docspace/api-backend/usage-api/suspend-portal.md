# suspendPortal

Referenced types are defined in the [full reference](../api.md).

> suspendPortal()

`PUT /api/2.0/portal/suspend`

Deactivate a portal

Deactivates this portal: its status becomes suspended and its users can no longer work in it, while all of its rooms, files and accounts stay untouched. It is reached only with the deactivation link that `POST api/2.0/portal/suspend` mails to the portal owner - that link authorizes the call instead of an authentication token - and the owner is checked again here, so a link issued for another account is refused. On a server installation the last remaining space cannot be deactivated. The call is mutating and idempotent: it sets the status, records the deactivation in the audit trail and refreshes the portal's base domain, and repeating it leaves the portal suspended. Nothing is returned in the body; the new state is read from `status` in `GET api/2.0/portal`. Bring the portal back with `PUT api/2.0/portal/continue`, using the second link from the same letter. To remove the portal and its content for good, use `DELETE api/2.0/portal/delete` instead - that cannot be undone.

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

## PortalUsersApi
