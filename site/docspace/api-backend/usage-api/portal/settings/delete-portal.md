# deletePortal

> StringWrapper deletePortal()

`DELETE /api/2.0/portal/delete`

Delete a portal

Deletes the portal with its rooms, files, accounts, settings, and OAuth apps. Its domain then stops serving the portal. Sign the request with the confirmation token from the email that `POST api/2.0/portal/delete` sends. The call also checks that the token belongs to the portal owner. Other callers get 403, including an ordinary sign-in token. The call cannot be undone, and no operation restores the portal. To keep the content, first start a backup with `POST api/2.0/backup/startbackup`. The call also works while the portal is unpaid. Do not repeat it. The portal emails the owner a confirmation. The call returns the absolute URL of a feedback form to send the owner to. To deactivate the portal instead, use `POST api/2.0/portal/suspend`. On a server installation, you cannot delete the last space. Spaces with limited access do not count.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The absolute URL of the feedback form to send the owner of the removed portal to | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The account the confirmation link was issued for is not the portal owner | - | - |
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
