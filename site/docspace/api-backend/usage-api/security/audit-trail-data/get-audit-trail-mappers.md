# getAuditTrailMappers

> AuditTrailProductArrayWrapper getAuditTrailMappers(productType, moduleType)

`GET /api/2.0/security/audit/mappers`

Get audit trail mappers

Returns the audit actions as a tree of products, their modules, and the actions each module records. Pass `productType` to keep one product, and `moduleType` to keep one module in each product. Omit both to get the whole tree. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call needs neither the audit option of the pricing plan nor the login history and audit trail section. The call is read-only. Each action has `messageAction`, the value of the `action` filter of `GET api/2.0/security/audit/events/filter`. Its `actionType` and `entity` are the values of the `actionType` and `entryType` filters there. If no product matches `productType`, the call returns an empty list, not an error. If no module matches `moduleType`, the call returns the products with empty module lists. For flat lists of the same names, use `GET api/2.0/security/audit/types`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **productType** | query | **ProductType** | The product to keep, spelled as `GET api/2.0/security/audit/types` lists it under `productTypes`. Omitting it keeps every product; a value no product matches yields an empty list rather than an error. | [optional] [example: `Documents`] [enum: `2`, `3`, `7`, `8`] |
| **moduleType** | query | **LocationType** | The module to keep inside the products that survive `productType`, spelled as `GET api/2.0/security/audit/types` lists it under `moduleTypes`. Omitting it keeps every module of those products. | [optional] [example: `Files`] [enum: `0`, `1`, `2`, `3`, `27`, `29`, `30`, `31`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The products with their modules and the actions each module can record | [**AuditTrailProductArrayWrapper**](../../models/audit-trail-product-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuditTrailProductArrayWrapper**](../../models/audit-trail-product-array-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
