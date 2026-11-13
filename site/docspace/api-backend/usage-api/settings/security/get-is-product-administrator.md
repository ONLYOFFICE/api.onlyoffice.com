# getIsProductAdministrator

> ProductAdministratorWrapper getIsProductAdministrator(productId, userId)

`GET /api/2.0/settings/security/administrator`

Check product administrator

Returns whether one user administers one portal module. The answer repeats `productId` and `userId` and adds the `administrator` flag. The all-zero `productId` asks about the whole portal. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The flag is `true` if the user is in the DocSpace admin group or in the module group. So a DocSpace admin is an administrator of every module. Unknown user or module IDs give `false`, not an error. So `false` does not prove that the user exists. The flag comes only from group membership and does not show whether the module is available. To check that, use `GET api/2.0/settings/security/{id}`. To list all administrators of a module, use `GET api/2.0/settings/security/administrator/{productId}`. To change the role, use `PUT api/2.0/settings/security/administrator`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **productId** | query | **UUID** (uuid) | The module being asked about, by module GUID. The all-zero GUID asks about the portal itself rather than a single module. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **userId** | query | **UUID** (uuid) | The account being asked about, by portal user ID. An ID that names no account is answered as a plain negative rather than a failure, so a negative answer does not prove the account exists. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The module and the user asked about together with the flag that says whether that user administers the module | [**ProductAdministratorWrapper**](../../models/product-administrator-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ProductAdministratorWrapper**](../../models/product-administrator-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
