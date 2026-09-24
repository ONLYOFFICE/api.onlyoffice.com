# resendUserInvites

> EmployeeFullArrayWrapper resendUserInvites(UpdateMembersRequestDto)

`PUT /api/2.0/people/invite`

Resend activation emails

Sends the invitation or activation email again to the accounts that have not finished joining the portal. Set `resendAll` to true to reach every pending account of the portal, in which case `userIds` is ignored and the caller has to be a room admin or a DocSpace admin; with the default false only the listed accounts are reached, and a member or a guest may then list nothing but their own ID. Which email goes out depends on the state of each account: a pending invitation gets a fresh invitation link, while an account that exists but has not confirmed its address gets activation instructions instead. Accounts that are already active or that are disabled are skipped, and so are the pending accounts the caller has no right to invite, without an error. The answer lists only the targeted accounts the caller is allowed to see, so it can be shorter than the request and is not a delivery report. Repeated calls are throttled, and each call issues new links that make the previously sent ones useless. To invite an address that has no profile yet, use `POST api/2.0/people/invite`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](../../models/update-members-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The targeted accounts the caller is allowed to see | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | A member or a guest asked for resendAll, or listed an account other than their own | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
