# sendUserPassword

Referenced types are defined in the [full reference](../people.md).

> StringWrapper sendUserPassword(EmailMemberRequestDto)

`POST /api/2.0/people/password`

Remind a user password

Emails a password recovery link to an address, and is the entry point of the recovery flow rather than the operation that changes anything. It needs no authentication, which is how a person who cannot sign in uses it; when the portal has a CAPTCHA configured, an unauthenticated request has to pass it and answers 403 if it does not. An unauthenticated caller always gets the same success message, whether or not the address belongs to an account, so the answer cannot be used to find out which addresses are registered. An authenticated caller does get told: a failure is answered with 403, and asking for somebody else requires DocSpace administrator rights, while the owner's password can be asked for by the owner alone and another administrator's only by the owner. The link that is sent leads to `PUT api/2.0/people/{userid}/password`, which is where the new password is set; no password is ever sent by email despite the wording of the message. Repeated calls are throttled.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailMemberRequestDto** | body | [**EmailMemberRequestDto**](../people.md#model-emailmemberrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message stating that the recovery link was sent to the address | [**StringWrapper**](../people.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The CAPTCHA was not passed, or an authenticated caller may not ask for that account | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../people.md#model-stringwrapper)

## Authorization

[cookieAuth](../people.md#cookieauth), [bearerAuth](../people.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeoplePhotosApi
