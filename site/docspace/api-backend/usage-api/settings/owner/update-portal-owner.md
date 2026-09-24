# updatePortalOwner

> updatePortalOwner(OwnerIdSettingsRequestDto)

`PUT /api/2.0/settings/owner`

Confirm the portal owner change

Completes the portal owner change that `POST api/2.0/settings/owner` started, making the user named in `ownerId` the owner of this portal. Authorization comes from the confirmation link in that letter, not from an ordinary session: pass the link's `type`, `key`, `uid` and `encemail` parameters in the `confirm` request header, and check with `POST api/2.0/authentication/confirm` that it is still usable, because it expires after a limited period, seven days by default. A caller without such a link is refused whatever role it holds, and so is a link whose address is no longer the owner's, which is what replaying a used link looks like. The named user has to be an active member of the portal and must not be a guest. The call is mutating: a named user who is not a DocSpace administrator yet is promoted to one first, and a promotion needing a paid seat the portal lacks is refused before ownership moves. The previous owner keeps their account and role but loses the owner's rights, and the change reaches the audit trail. The answer carries no payload: read the new `ownerId` from `GET api/2.0/settings`, which needs no token. Only the new owner can start another transfer.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **OwnerIdSettingsRequestDto** | body | [**OwnerIdSettingsRequestDto**](../../models/owner-id-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal owner has been changed to the user named in the request | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The user named as the new owner cannot be found in this portal, is a guest, or is not active | - | - |
| **409** | The new owner could not be given DocSpace administrator rights, so the transfer was not applied | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
