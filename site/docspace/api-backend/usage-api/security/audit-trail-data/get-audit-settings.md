# getAuditSettings

> TenantAuditSettingsWrapper getAuditSettings()

`GET /api/2.0/security/audit/settings/lifetime`

Get audit lifetime settings

Returns the lifetimes of the login history and the audit trail, in days. The portal deletes login events older than the login history lifetime. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. In a cloud installation, the call returns 402 if the login history and audit trail section is turned off. The call does not need the audit option of the pricing plan. The call is read-only. The audit trail lifetime sets how far `GET api/2.0/security/audit/events/last` and the audit trail report look back. The login history lifetime does the same for the login history report. The audit trail lifetime deletes no events and does not limit `GET api/2.0/security/audit/events/filter`. The installation decides how long it stores audit events. To change the lifetimes, use `POST api/2.0/security/audit/settings/lifetime`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The login history and audit trail lifetimes of the portal, in days | [**TenantAuditSettingsWrapper**](../../models/tenant-audit-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The login history and audit trail section is not enabled for this portal | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantAuditSettingsWrapper**](../../models/tenant-audit-settings-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
