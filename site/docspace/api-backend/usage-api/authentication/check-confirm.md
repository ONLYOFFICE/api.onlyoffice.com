# checkConfirm

> ConfirmWrapper checkConfirm(EmailValidationKeyModel)

`POST /api/2.0/authentication/confirm`

Check a confirmation link

Checks the key of a confirmation link that the portal sent by email and reports whether the action behind that link can still be carried out - an employee invitation, phone activation, a password change, portal removal and so on. Take `key` and `type` from the query string of the link; when `key` is left empty, the key saved in the confirmation cookie of the same `type` is used instead. Open to unauthenticated callers and read-only: it neither accepts the invitation nor signs anyone in. `result` is `Ok` when the link may be used, `Invalid` when the key does not match the type or the email, `Expired` when it is too old, and `TariffLimit`, `UserExisted`, `UserExcluded` or `QuotaFailed` when the key is sound but the invitation behind it cannot be accepted. Only `Ok` should be followed by the operation that performs the action - `POST api/2.0/people` with `fromInviteLink` for an invitation, `POST api/2.0/authentication` with `confirmData` for a sign-in link - and for an invitation to a room the answer also carries the identifier and the title of that room.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailValidationKeyModel** | body | [**EmailValidationKeyModel**](../models/email-validation-key-model.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the confirmation link may be used, with the room and the email it was issued for when it is an invitation | [**ConfirmWrapper**](../models/confirm-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The portal's IP restrictions do not allow this address to check an invitation link | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConfirmWrapper**](../models/confirm-wrapper.md)

## Authorization

[cookieAuth](authentication.md#cookieauth), [bearerAuth](authentication.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
