# sendInstructionsToDelete

> StringWrapper sendInstructionsToDelete()

`PUT /api/2.0/people/self/delete`

Send the deletion instructions

Emails the caller a link that confirms the deletion of their own profile. Any signed-in user can call it. The portal owner and LDAP accounts get 403. The call changes no data and sends an email. Within 10 minutes after the email, a repeated call sends no new email but returns the same text. A later call emails a new link. Every link sent stays valid for 7 days. To delete the profile, the app calls `DELETE api/2.0/people/@self` with the confirmation token from the link. To delete another account, use `DELETE api/2.0/people/{userId}`. The call returns a text that you can show to the user, with the email address of the link. The address is wrapped in HTML bold tags. Remove them before you show the text outside a web page.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message stating which address the confirmation link was sent to | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is the portal owner or an LDAP account and cannot delete their own profile | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
