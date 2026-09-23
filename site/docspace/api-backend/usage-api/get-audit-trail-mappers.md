# getAuditTrailMappers

Referenced types are defined in the [full reference](../api.md).

> AuditTrailProductMapperArrayWrapper getAuditTrailMappers(productType, moduleType)

`GET /api/2.0/security/audit/mappers`

Get audit trail mappers

Returns the audit vocabulary as the tree it really is: every product, the modules inside it, and for each module the actions it can record together with the type of change and the entity each of them applies to. Pass `productType` to keep a single product and `moduleType` to keep a single module inside the products that remain; omit both to get the whole tree. The caller needs the portal-settings right of a DocSpace administrator; the audit option of the pricing plan is not required, and the call is read-only and safe to repeat. Each action carries `messageAction`, the name to send as the `action` filter of `GET api/2.0/security/audit/events/filter`, next to `actionType` and `entity`, the values its `actionType` and `entryType` filters accept - this is where a caller learns which action belongs to which module instead of guessing. A filter that matches nothing yields an empty list rather than an error. Use `GET api/2.0/security/audit/types` for the flat lists of the same names.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **productType** | query | **ProductType** | The product to keep, spelled as `GET api/2.0/security/audit/types` lists it under `productTypes`. Omitting it keeps every product; a value no product matches yields an empty list rather than an error. | [optional] [example: `Documents`] [enum: `2`, `3`, `7`, `8`] |
| **moduleType** | query | **LocationType** | The module to keep inside the products that survive `productType`, spelled as `GET api/2.0/security/audit/types` lists it under `moduleTypes`. Omitting it keeps every module of those products. | [optional] [example: `Files`] [enum: `0`, `1`, `2`, `3`, `27`, `29`, `30`, `31`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The products with their modules and the actions each module can record | [**AuditTrailProductMapperArrayWrapper**](../api.md#model-audittrailproductmapperarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuditTrailProductMapperArrayWrapper**](../api.md#model-audittrailproductmapperarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
