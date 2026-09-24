# setProductAdministrator

> ProductAdministratorWrapper setProductAdministrator(SecurityRequestsDto)

`PUT /api/2.0/settings/security/administrator`

Set product administrator

Promotes a portal member to administrator of one module, or takes that role away, according to the `administrator` flag; the all-zero product GUID targets the DocSpace administrator role, which covers the whole portal. The caller needs the portal-settings right of a DocSpace administrator, and granting the portal-wide role additionally requires being the portal owner - anyone else is refused with 403. A free cloud plan does not offer the option at all and answers 402, as does a promotion for which no paid seat is left, since promoting a guest or a plain member turns them into a paid one. Taking the portal-wide role away also removes the member from every product group. The change is immediate, portal-wide, recorded in the audit trail, and sending the same body twice changes nothing further; it never creates a user, so invite the member first. The answer echoes the identifiers and the flag as stored - re-read membership with `GET api/2.0/settings/security/administrator`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SecurityRequestsDto** | body | [**SecurityRequestsDto**](../../models/security-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The module, the user and the administrator flag as they were stored | [**ProductAdministratorWrapper**](../../models/product-administrator-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal plan does not offer product administrators, or no paid seat is left for the member being promoted | - | - |
| **403** | Only the portal owner can grant or revoke the portal-wide administrator role | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
