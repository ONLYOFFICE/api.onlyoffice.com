# updateInvitationSettings

Referenced types are defined in the [full reference](../api.md).

> TenantUserInvitationSettingsWrapper updateInvitationSettings(TenantUserInvitationSettingsRequestDto)

`PUT /api/2.0/settings/invitationsettings`

Update the user invitation settings

Sets whether the portal allows inviting new members and new guests. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). Disabling member or guest invitations only blocks creating new invitations going forward; it does not revoke links already issued or remove members already invited. This is a mutating, idempotent, portal-wide call. It returns the saved setting; read the current value at any time, including anonymously, from `GET api/2.0/settings/invitationsettings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantUserInvitationSettingsRequestDto** | body | [**TenantUserInvitationSettingsRequestDto**](../api.md#model-tenantuserinvitationsettingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved user invitation settings | [**TenantUserInvitationSettingsWrapper**](../api.md#model-tenantuserinvitationsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantUserInvitationSettingsWrapper**](../api.md#model-tenantuserinvitationsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsCookiesApi
