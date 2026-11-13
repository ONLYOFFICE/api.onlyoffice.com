# getLastAuditEvents

> AuditEventArrayWrapper getLastAuditEvents()

`GET /api/2.0/security/audit/events/last`

Get recent audit events

Returns the 20 most recent audit events of the portal, newest first. Audit events record what members created, changed, deleted, shared, or set. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. In a cloud installation, the call returns 402 if the login history and audit trail section is turned off. The call is read-only. It looks back only as far as the audit trail lifetime of `GET api/2.0/security/audit/settings/lifetime`. In `actionText`, the call cuts every inserted value to 50 characters. An empty list means the portal recorded no audit events in that period. To filter by user, module, action, or period, use `GET api/2.0/security/audit/events/filter`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The twenty most recent audit events of the portal, newest first | [**AuditEventArrayWrapper**](../../models/audit-event-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The login history and audit trail section is not enabled for this portal | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuditEventArrayWrapper**](../../models/audit-event-array-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
