# approveGuestShareLink

> EmployeeFullWrapper approveGuestShareLink(EmailMemberRequestDto)

`POST /api/2.0/people/guests/share/approve`

Approve a guest sharing link

Accepts a guest that another member shared, which links that guest to the calling account and makes it visible in the caller's list of guests. Everything the operation needs comes from the confirmation token of the link produced by `GET api/2.0/people/guests/{userid}/share`: the request body is not read at all, so there is nothing to fill in, and an expired or already used token is answered with 401. The caller has to be a room admin or a DocSpace admin; a member or a guest gets 403. The account the token names has to exist and still be a guest, otherwise the operation answers 404 or 400. The call is idempotent: a guest that is already linked to the caller is simply returned again. The answer is the full profile of the guest.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailMemberRequestDto** | body | [**EmailMemberRequestDto**](../../models/email-member-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profile of the guest now linked to the caller | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The account named by the token is not a guest | - | - |
| **403** | The caller is a member or a guest | - | - |
| **404** | The account named by the token no longer exists | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullWrapper**](../../models/employee-full-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
