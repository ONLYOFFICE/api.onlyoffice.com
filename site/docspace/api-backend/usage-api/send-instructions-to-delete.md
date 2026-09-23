# sendInstructionsToDelete

Referenced types are defined in the [full reference](../people.md).

> StringWrapper sendInstructionsToDelete()

`PUT /api/2.0/people/self/delete`

Send the deletion instructions

Emails the caller a confirmation link that lets them delete their own profile, and is the first step of the self-service profile removal. It acts on the authenticated account only and takes no parameters, so it cannot be used to remove somebody else - an administrator removes another user through `DELETE api/2.0/people/{userid}`. The caller has to be a regular portal account: the portal owner and an account imported from LDAP are rejected, because neither can delete itself. The call sends mail and does not change the profile; the deletion happens later, when the caller follows the emailed link and the client calls `DELETE api/2.0/people/@self` with the confirmation token from it. The answer is a ready-to-display message naming the address the link was sent to, and the address is wrapped in bold HTML markup, so strip the markup before showing it outside a web page. Repeated calls are throttled, and each one sends a new link.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message stating which address the confirmation link was sent to | [**StringWrapper**](../people.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is the portal owner or an LDAP account and cannot delete their own profile | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../people.md#model-stringwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
