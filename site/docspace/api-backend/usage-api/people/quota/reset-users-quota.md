# resetUsersQuota

> EmployeeFullArrayWrapper resetUsersQuota(UpdateMembersQuotaRequestDto)

`PUT /api/2.0/people/resetquota`

Reset a user quota limit

Drops the personal storage limit of the listed accounts, so that each of them follows the portal default again. The caller needs the permission to edit the portal settings, which in practice means a DocSpace administrator or the portal owner. On a hosted portal the tariff has to include the storage statistics feature, otherwise the operation answers 402; a standalone installation has no such condition. It takes only `userIds` - the `quota` field of the request body is not read here - and system accounts are dropped from the list without an error. The accounts are processed one by one and the answer holds the ones that were reached, each already showing the portal default as its limit. Nothing is deleted and no space is freed; only the limit that applies changes. Use `PUT api/2.0/people/userquota` to give an account its own limit instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersQuotaRequestDto** | body | [**UpdateMembersQuotaRequestDto**](../../models/update-members-quota-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The accounts that now follow the portal default limit | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The tariff of a hosted portal does not include the storage statistics feature | - | - |
| **403** | No permissions to perform this action | - | - |
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
