# sendOwnerChangeInstructions

> OwnerChangeInstructionsWrapper sendOwnerChangeInstructions(OwnerIdSettingsRequestDto)

`POST /api/2.0/settings/owner`

Start the portal owner change

Starts moving the portal to another owner. The portal sends a confirmation letter to the portal owner's email address. Ownership moves only after `PUT api/2.0/settings/owner` with the link from this letter. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. A DocSpace admin who is not the portal owner gets 200 with `status` 0 and a refusal text. The call also returns `status` 0 for an unknown or inactive new owner. So read `status`, not the HTTP code. On success, `status` is 1. The `message` then shows the owner's address as an HTML `mailto:` link. Do not repeat the call. Each successful call sends a new letter with a new link. Earlier links keep working until ownership moves. A link works for seven days by default. The call returns 400 if `ownerId` is missing or the owner's email address is not confirmed. To check the address, read `activationStatus` from `GET api/2.0/people/@self`. It also returns 403 if the new owner is a guest. To change a user type instead, use `PUT api/2.0/people/type/{type}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **OwnerIdSettingsRequestDto** | body | [**OwnerIdSettingsRequestDto**](../../models/owner-id-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The outcome of the request: `status` 1 with the address the instructions were sent to, or `status` 0 with a localized refusal when the transfer cannot be started | [**OwnerChangeInstructionsWrapper**](../../models/owner-change-instructions-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `ownerId`, or the portal owner's own email address has not been confirmed yet, so no instructions can be sent | - | - |
| **403** | The caller does not hold the portal-settings right of a DocSpace administrator, or the user named as the new owner is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**OwnerChangeInstructionsWrapper**](../../models/owner-change-instructions-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
