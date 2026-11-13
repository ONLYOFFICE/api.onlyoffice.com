# setProductAdministrator

> ProductAdministratorWrapper setProductAdministrator(SecurityRequestDto)

`PUT /api/2.0/settings/security/administrator`

Set product administrator

Adds a portal member to the administrators of one module, or removes the member, by the `administrator` flag. The all-zero `productId` means the DocSpace admin role for the whole portal. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. Only the portal owner can grant the DocSpace admin role or take any role away from a DocSpace admin. Other callers get 403 for these changes. On a free cloud plan, the call returns 402. Promoting a guest or a user takes a paid seat. If no paid seat is left, the call returns 402. Removing the DocSpace admin role also removes the member from every product group. The call changes data immediately, and you can repeat it with the same body. It never creates a user, so invite the member first. If the body cannot be read or has no `productId` or `userId`, the call returns 400. The call returns the identifiers and the flag as sent. To check membership, use `GET api/2.0/settings/security/administrator`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SecurityRequestDto** | body | [**SecurityRequestDto**](../../models/security-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The module, the user and the administrator flag as they were stored | [**ProductAdministratorWrapper**](../../models/product-administrator-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `productId` or `userId` | - | - |
| **402** | The portal plan does not offer product administrators, or no paid seat is left for the member being promoted | - | - |
| **403** | The caller has no portal-settings right, or is not the portal owner and grants the portal-wide administrator role or takes a role away from a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ProductAdministratorWrapper**](../../models/product-administrator-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
