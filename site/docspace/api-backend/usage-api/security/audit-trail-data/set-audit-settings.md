# setAuditSettings

> TenantAuditSettingsWrapper setAuditSettings(TenantAuditSettingsRequestDto)

`POST /api/2.0/security/audit/settings/lifetime`

Set audit lifetime settings

Sets the lifetimes of the login history and the audit trail, in days, and returns the stored values. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. In a cloud installation, the call returns 402 if the pricing plan has no audit option. It also returns 402 if the login history and audit trail section is turned off. The call changes data and replaces both values. So send both in `settings`, with the current value for the one that stays. To read the current values, use `GET api/2.0/security/audit/settings/lifetime`. You can repeat the call with the same body. The change takes effect immediately for `GET api/2.0/security/audit/events/last` and for both reports. A shorter login history lifetime lets the daily cleanup permanently delete older login events. A shorter audit trail lifetime deletes nothing. Older audit events stay in `GET api/2.0/security/audit/events/filter`. They return to the recent events and the report when the lifetime grows. The call returns 400 if the body has no `settings` or a lifetime is outside 1 to 180 days. It then saves neither value.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantAuditSettingsRequestDto** | body | [**TenantAuditSettingsRequestDto**](../../models/tenant-audit-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The login history and audit trail lifetimes as they were stored | [**TenantAuditSettingsWrapper**](../../models/tenant-audit-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `settings`, or a lifetime is outside the allowed range of 1 to 180 days | - | - |
| **402** | The portal's pricing plan has no audit option, or the login history and audit trail section is not enabled | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
