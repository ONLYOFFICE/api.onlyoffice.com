# updateUserQuota

Referenced types are defined in the [full reference](../people.md).

> EmployeeFullArrayWrapper updateUserQuota(UpdateMembersQuotaRequestDto)

`PUT /api/2.0/people/userquota`

Change a user quota limit

Gives the listed accounts their own storage limit, replacing the portal default for each of them. The caller needs the permission to edit the portal settings, which in practice means a DocSpace administrator or the portal owner. `quota` is a whole number of bytes: a value of 0 or more becomes the personal limit, while any negative value switches the personal limit off and hands the account back to the portal default. The value has to fit the portal: a limit larger than the total storage the tariff allows, or larger than the portal-wide quota on a standalone installation, is rejected with 400, and so is a value that is not a whole number. System accounts are dropped from the list without an error, the accounts are processed one by one, and the answer holds the ones that were reached. Setting a limit does not free any space and does not delete anything: an account already over its new limit simply cannot add more. Use `PUT api/2.0/people/resetquota` to return accounts to the portal default.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersQuotaRequestDto** | body | [**UpdateMembersQuotaRequestDto**](../people.md#model-updatemembersquotarequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The accounts whose limit was changed | [**EmployeeFullArrayWrapper**](../people.md#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The value is not a whole number of bytes, or it exceeds the storage the portal allows | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../people.md#model-employeefullarraywrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeopleSearchApi
