# updateInvitationSettings

> TenantUserInvitationSettingsWrapper updateInvitationSettings(TenantUserInvitationSettingsRequestDto)

`PUT /api/2.0/settings/invitationsettings`

Update the user invitation settings

Sets whether the portal allows inviting new members and new guests. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). Disabling member or guest invitations only blocks creating new invitations going forward; it does not revoke links already issued or remove members already invited. This is a mutating, idempotent, portal-wide call. It returns the saved setting; read the current value at any time, including anonymously, from `GET api/2.0/settings/invitationsettings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantUserInvitationSettingsRequestDto** | body | [**TenantUserInvitationSettingsRequestDto**](../../models/tenant-user-invitation-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved user invitation settings | [**TenantUserInvitationSettingsWrapper**](../../models/tenant-user-invitation-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantUserInvitationSettingsWrapper**](../../models/tenant-user-invitation-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
