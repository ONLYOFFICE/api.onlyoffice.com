# resendUserInvites

> EmployeeFullArrayWrapper resendUserInvites(UpdateMembersRequestDto)

`PUT /api/2.0/people/invite`

Resend activation emails

Sends the invitation or activation email again to accounts that have not finished joining. With `resendAll` set to true, the call reaches every pending account and ignores `userIds`. Requires a room admin or a DocSpace admin for this mode. Other callers get 403. Without it, the call reaches only the listed accounts. A user or a guest can list only their own ID, and other IDs return 403. A pending invitation gets a new invitation link. An account that has not confirmed its email gets activation instructions. The call skips active and disabled accounts, and accounts the caller cannot invite, without an error. The call changes data and sends emails. By default, an account that got this email in the last 10 minutes gets no new one. Its earlier link stays valid. So you can repeat the call. A later repeat sends the emails again. The response lists only the targeted accounts that the caller can see. So it is not a delivery report. If `userIds` is missing and `resendAll` is false, the call returns 400. To invite a new address, use `POST api/2.0/people/invite`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](../../models/update-members-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The targeted accounts the caller is allowed to see | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `userIds` is missing while `resendAll` is false | - | - |
| **403** | A member or a guest asked for resendAll, or listed an account other than their own | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
