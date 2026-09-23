# getTfaConfirmData

Referenced types are defined in the [full reference](../api.md).

> TfaConfirmDataWrapper getTfaConfirmData()

`GET /api/2.0/settings/tfaapp/confirm`

Get TFA confirmation data

Returns the confirmation link the current user has to follow to pass the portal's two-factor authentication step, together with the confirmation cookie that link depends on. Any authenticated member may call it, always for their own account, and TFA has to be required for that account by the portal policy already, otherwise the response body is empty. Which link comes back depends on the method. With the SMS method it is a phone activation link while the account has no activated mobile number and a phone authorization link afterwards, and only `url` is filled in. With the authenticator-application method the response also carries `cookieName` and `cookieValue`, and the call mutates state by issuing a fresh confirmation key and setting that cookie; the link then points at activation while no application is linked, or after the previous link was reset, and at re-verification once one is linked. Hand the code obtained through that flow to `POST api/2.0/settings/tfaapp/validate`. The portal-wide policy behind all of this is read with `GET api/2.0/settings/tfaapp`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The confirmation link for the caller's TFA step, with the cookie filled in for the authenticator method | [**TfaConfirmDataWrapper**](../api.md#model-tfaconfirmdatawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TfaConfirmDataWrapper**](../api.md#model-tfaconfirmdatawrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
