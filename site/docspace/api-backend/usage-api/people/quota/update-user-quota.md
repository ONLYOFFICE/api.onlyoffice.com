# updateUserQuota

> EmployeeFullArrayWrapper updateUserQuota(UpdateMembersQuotaRequestDto)

`PUT /api/2.0/people/userquota`

Change a user quota limit

Sets a storage limit for each listed account, instead of the portal default. Pass `quota` as a whole number of bytes. The value -1 means no limit, and -2 returns the account to the portal default. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call returns 400 if `quota` is not a whole number or is over the storage the tariff allows. On a standalone installation, it also returns 400 for a value over the portal quota. The call changes data. You can repeat it with the same body. It skips system accounts without an error. It returns the changed accounts. A limit deletes nothing and frees no space. While user quotas are on, an account over its limit cannot add more files. To return accounts to the portal default, use `PUT api/2.0/people/resetquota`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersQuotaRequestDto** | body | [**UpdateMembersQuotaRequestDto**](../../models/update-members-quota-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The accounts whose limit was changed | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The value is not a whole number of bytes, or it exceeds the storage the portal allows | - | - |
| **403** | No permissions to perform this action | - | - |
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
