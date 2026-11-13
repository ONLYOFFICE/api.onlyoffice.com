# updatePortalOwner

> updatePortalOwner(OwnerIdSettingsRequestDto)

`PUT /api/2.0/settings/owner`

Confirm the portal owner change

Completes the portal owner change that `POST api/2.0/settings/owner` started. The user in `ownerId` becomes the portal owner. Sign the request with the confirmation link from that letter, not with a session. A signed-in caller without this link gets 403, even the portal owner. A caller with neither a session nor this link gets 401. Pass the link's `type`, `key`, `uid`, and `encemail` parameters in the `confirm` header. An invalid or expired link returns 401. A link expires after seven days by default. It also becomes invalid when its address no longer belongs to the portal owner. A deleted or disabled `uid` account has the same effect. To check that the link still works, use `POST api/2.0/authentication/confirm`. The call changes data, and a repeated call with the same link returns 401. If the new owner is not a DocSpace admin yet, the call makes them one first. The previous owner keeps their account and role but loses the owner's rights. The call returns no body. To read the new `ownerId`, use `GET api/2.0/settings` as a signed-in user. After this call, a new transfer needs the new owner. The new owner must be an active account of the portal, not a guest. If promoting the new owner needs a paid seat that the portal lacks, the call returns 402. Then ownership does not move. Without `ownerId`, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **OwnerIdSettingsRequestDto** | body | [**OwnerIdSettingsRequestDto**](../../models/owner-id-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal owner has been changed to the user named in the request | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `ownerId` | - | - |
| **401** | The caller is not signed in and sent no owner change link, or the link is invalid or expired, its address no longer belongs to the portal owner, or its `uid` account is deleted or disabled | - | - |
| **402** | The user named as the new owner is a regular user, and promoting them to DocSpace administrator needs a paid seat the portal has run out of | - | - |
| **403** | The caller is signed in but sent no owner change link, whatever their role, or sent a valid confirmation link of another type | - | - |
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
