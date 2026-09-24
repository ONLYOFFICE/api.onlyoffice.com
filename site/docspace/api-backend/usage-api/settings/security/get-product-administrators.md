# getProductAdministrators

> EmployeeArrayWrapper getProductAdministrators(productid)

`GET /api/2.0/settings/security/administrator/{productid}`

Get product administrators

Lists the users who administer the portal module identified by `productid` in the path. The all-zero GUID stands for the portal itself: the answer then covers the DocSpace administrator group together with every product group, and includes the portal owner, who administers everything by default. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. `productid` has to be a GUID, and one that names no group is answered with an empty list rather than a failure. The operation is read-only and returns whole user profiles, a heavier answer than a membership check, and a user who belongs to more than one of the groups asked about is listed once per group. Entries arrive in group order, the DocSpace administrator group first, the list is neither paged nor filterable, and a promotion made through the sibling `PUT` shows up here at once. Use `GET api/2.0/settings/security/administrator` to test a single user against a single module, and `PUT api/2.0/settings/security/administrator` to promote or demote somebody.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **productid** | path | **UUID** (uuid) | The module the operation acts on, by module GUID. The all-zero GUID stands for the portal itself rather than for a single module, and a GUID that names no module group is answered with an empty result instead of a failure. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The users who administer the module asked about, or the portal-wide administrators when the all-zero identifier is used | [**EmployeeArrayWrapper**](../../models/employee-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
