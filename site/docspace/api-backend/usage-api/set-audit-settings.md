# setAuditSettings

Referenced types are defined in the [full reference](../api.md).

> TenantAuditSettingsResponseWrapper setAuditSettings(TenantAuditSettingsWrapper)

`POST /api/2.0/security/audit/settings/lifetime`

Set audit lifetime settings

Sets how long this portal keeps its login history and its audit trail, in days, and returns the pair as it was stored. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal's pricing plan, otherwise the call is answered with 402. Send both numbers inside `settings`: each has to be between 1 and 180 days, and a value outside that range is refused with 400 without either number being saved, so read the current pair from `GET api/2.0/security/audit/settings/lifetime` and resend the one that should stay as it is. The call replaces the stored settings rather than merging them, is idempotent, and takes effect at once: the period covered by `GET api/2.0/security/audit/events/last` and by both audit reports shrinks or grows with it, and events older than the new lifetime stop being reported. The change is itself recorded in the audit trail.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantAuditSettingsWrapper** | body | [**TenantAuditSettingsWrapper**](../api.md#model-tenantauditsettingswrapper) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The login history and audit trail lifetimes as they were stored | [**TenantAuditSettingsResponseWrapper**](../api.md#model-tenantauditsettingsresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A lifetime is outside the allowed range of 1 to 180 days | - | - |
| **402** | The portal's pricing plan has no audit option, or the login history and audit trail section is not enabled | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantAuditSettingsResponseWrapper**](../api.md#model-tenantauditsettingsresponsewrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
