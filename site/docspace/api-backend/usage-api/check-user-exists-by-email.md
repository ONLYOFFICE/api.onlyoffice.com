# checkUserExistsByEmail

Referenced types are defined in the [full reference](../people.md).

> UserExistsResponseWrapper checkUserExistsByEmail(email, encemail, culture)

`GET /api/2.0/people/exists`

Check whether an email is taken

Reports whether an email address already belongs to a portal profile, and in what state that profile is. It is meant for the invitation and sign-up screens, which is why it accepts a confirmation token as well as an ordinary session, and why it is available on an unpaid portal. Pass the address either in plain text as `email` or, when it arrived inside an invitation link, encrypted as `encemail`; one of the two is required and a malformed or overlong address answers 400. The call is read-only, and the answer carries `exists` plus the `status` of the profile - `Active`, `Terminated` or `Pending` - which is left out entirely when nothing matches, so a pending invitation can be told apart from a working account and from a free address. It reveals only that an address is taken and not who owns it - read `GET api/2.0/people/email` for the profile itself, which needs the right to see that account.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **email** | query | **String** (email) | The user email address. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] |
| **encemail** | query | **String** | The user encrypted email address. | [optional] [example: `encrypted_email_string`] |
| **culture** | query | **String** | Culture | [optional] [example: `en-US`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the address is taken, and the status of the profile that holds it | [**UserExistsResponseWrapper**](../people.md#model-userexistsresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Both email and encemail are missing, or the address is malformed or longer than 255 characters | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UserExistsResponseWrapper**](../people.md#model-userexistsresponsewrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
