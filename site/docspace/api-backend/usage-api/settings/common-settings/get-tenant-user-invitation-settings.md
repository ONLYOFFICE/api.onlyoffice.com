# getTenantUserInvitationSettings

> TenantUserInvitationSettingsWrapper getTenantUserInvitationSettings()

`GET /api/2.0/settings/invitationsettings`

Get the user invitation settings

Returns whether the portal currently allows inviting new members and new guests at all. No permission is required; anonymous callers can read it too, since the invitation flow itself may run before the caller has signed in. This is a read-only, idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty instead of resending the same settings.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether inviting new members and new guests is currently allowed | [**TenantUserInvitationSettingsWrapper**](../../models/tenant-user-invitation-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantUserInvitationSettingsWrapper**](../../models/tenant-user-invitation-settings-wrapper.md)

## Authorization

[cookieAuth](../settings.md#cookieauth), [bearerAuth](../settings.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
