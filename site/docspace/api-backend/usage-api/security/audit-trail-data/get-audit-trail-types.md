# getAuditTrailTypes

> AuditTrailTypesWrapper getAuditTrailTypes()

`GET /api/2.0/security/audit/types`

Get audit trail types

Returns the names that the audit filters accept, as five flat lists. The lists are `actions`, `actionTypes`, `productTypes`, `moduleTypes`, and `entryTypes`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call needs neither the audit option of the pricing plan nor the login history and audit trail section. The call is read-only and takes no parameters. The names change only with the portal version, so you can read them once and reuse them. Send them as the filter values of `GET api/2.0/security/audit/events/filter` and `GET api/2.0/security/audit/login/filter`. To see which module records which action, use `GET api/2.0/security/audit/mappers`.

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
