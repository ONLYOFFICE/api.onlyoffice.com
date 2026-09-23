# getTenantUserInvitationSettings

Referenced types are defined in the [full reference](../api.md).

> TenantUserInvitationSettingsWrapper getTenantUserInvitationSettings()

`GET /api/2.0/settings/invitationsettings`

Get the user invitation settings

Returns whether the portal currently allows inviting new members and new guests at all. No permission is required; anonymous callers can read it too, since the invitation flow itself may run before the caller has signed in. This is a read-only, idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty instead of resending the same settings.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether inviting new members and new guests is currently allowed | [**TenantUserInvitationSettingsWrapper**](../api.md#model-tenantuserinvitationsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantUserInvitationSettingsWrapper**](../api.md#model-tenantuserinvitationsettingswrapper)

## Authorization

[cookieAuth](../api.md#cookieauth), [bearerAuth](../api.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
