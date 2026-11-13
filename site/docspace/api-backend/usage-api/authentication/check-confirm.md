# checkConfirm

> ConfirmWrapper checkConfirm(CheckConfirmRequestDto)

`POST /api/2.0/authentication/confirm`

Check a confirmation link

Checks the key of a confirmation link and returns whether the link can still be used. Links include invitations, phone activation, password changes, and portal deletion. Take `key`, `type`, and the other values from the query string of the link. If `key` is empty, the call uses the confirmation cookie of this `type`. Anyone can call it without signing in, even on an unpaid, suspended, or blocked portal. For a signed-out caller, the call is read-only. It does not accept an invitation or sign anyone in. A signed-in caller with a room's shared invitation link joins that room with the link's role. The call also counts one use of that link. A repeated call changes nothing. For a signed-in caller, a valid invitation link returns `UserExisted` instead of `Ok`. Follow only an `Ok` result with the action of the link. For an invitation, use `POST api/2.0/people` with `fromInviteLink`. For a sign-in link, use `POST api/2.0/authentication` with `confirmData`. If the portal's IP restrictions block the caller, an invitation link returns 403. The call returns 400 if `email` is not a valid email address.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CheckConfirmRequestDto** | body | [**CheckConfirmRequestDto**](../models/check-confirm-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the confirmation link may be used, with the room and the email it was issued for when it is an invitation | [**ConfirmWrapper**](../models/confirm-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `email` is sent but empty or not a valid email address | - | - |
| **403** | The portal's IP restrictions do not allow this address to check an invitation link | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConfirmWrapper**](../models/confirm-wrapper.md)

## Authorization

[Basic](authentication.md#basic), [OAuth2](authentication.md#oauth2) (scopes: read, write), [ApiKeyBearer](authentication.md#apikeybearer), [asc_auth_key](authentication.md#asc_auth_key), [Bearer](authentication.md#bearer), [OpenId](authentication.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
