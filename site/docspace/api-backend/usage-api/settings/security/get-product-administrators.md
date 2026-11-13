# getProductAdministrators

> EmployeeArrayWrapper getProductAdministrators(productId)

`GET /api/2.0/settings/security/administrator/{productId}`

Get product administrators

Returns the users who administer the portal module with the GUID `productId`. The all-zero GUID means the whole portal. Then the list covers the DocSpace admin group and every product group, and it includes the portal owner. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. If `productId` names no group, the call returns an empty list. Entries come in group order, with the DocSpace admin group first. A user who is in several of these groups appears once per group. The list has no paging and no filter. To check one user against one module, use `GET api/2.0/settings/security/administrator`. To add or remove an administrator, use `PUT api/2.0/settings/security/administrator`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **productId** | path | **UUID** (uuid) | The module the operation acts on, by module GUID. The all-zero GUID stands for the portal itself rather than for a single module, and a GUID that names no module group is answered with an empty result instead of a failure. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The users who administer the module asked about, or the portal-wide administrators when the all-zero identifier is used | [**EmployeeArrayWrapper**](../../models/employee-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeArrayWrapper**](../../models/employee-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
