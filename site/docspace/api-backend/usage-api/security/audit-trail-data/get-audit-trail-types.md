# getAuditTrailTypes

> AuditTrailTypesWrapper getAuditTrailTypes()

`GET /api/2.0/security/audit/types`

Get audit trail types

Returns the vocabularies the audit filters are built from: `actions` lists every action the portal can record, `actionTypes` the kinds of change they stand for, `productTypes` the products they belong to, `moduleTypes` the locations inside those products, and `entryTypes` the kinds of entity an action can be applied to. The caller needs the portal-settings right of a DocSpace administrator; the audit option of the pricing plan is not required, so the lists can be read on any portal. The operation is read-only, takes no parameters and depends on nothing else. Every value is the name to send in the matching query parameter of `GET api/2.0/security/audit/events/filter` or `GET api/2.0/security/audit/login/filter`, so read this operation once and reuse the answer instead of guessing spellings. The response is an untyped object holding those five arrays of names, and it changes only with the portal version. Use `GET api/2.0/security/audit/mappers` when the relations between products, modules and actions are needed rather than the flat lists.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The action, action type, product, module and entry type names accepted by the audit filters | [**AuditTrailTypesWrapper**](../../models/audit-trail-types-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuditTrailTypesWrapper**](../../models/audit-trail-types-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
