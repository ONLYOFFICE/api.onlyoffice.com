# sendOwnerChangeInstructions

Referenced types are defined in the [full reference](../api.md).

> OwnerChangeInstructionsWrapper sendOwnerChangeInstructions(OwnerIdSettingsRequestDto)

`POST /api/2.0/settings/owner`

Start the portal owner change

Starts handing this portal over to another of its members: the confirmation letter goes to the current owner's address, and nothing changes until the link in it is used. The owner's own email address has to be confirmed first, otherwise the call is answered with 400; `GET api/2.0/people/@self` reports it as `activationStatus`. The caller needs the portal-settings right of a DocSpace administrator, so a room administrator, an ordinary member or a guest is refused with 403, as is naming a guest in `ownerId`. Only the portal owner can actually start a transfer: an administrator who is not the owner, or a named user who is inactive or unknown here, gets 200 with `status` 0 and a localized refusal instead of an error, so read `status` and not the HTTP code. A started transfer answers `status` 1 and a `message` carrying the owner's address inside an HTML `mailto:` anchor rather than as plain text. Ownership itself does not move here; every call issues a fresh link usable for a limited period, seven days by default, and the attempt is recorded in the audit trail. Complete the transfer with `PUT api/2.0/settings/owner`; changing what a member may do is `PUT api/2.0/people/type/{type}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **OwnerIdSettingsRequestDto** | body | [**OwnerIdSettingsRequestDto**](../api.md#model-owneridsettingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The outcome of the request: `status` 1 with the address the instructions were sent to, or `status` 0 with a localized refusal when the transfer cannot be started | [**OwnerChangeInstructionsWrapper**](../api.md#model-ownerchangeinstructionswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal owner's own email address has not been confirmed yet, so no instructions can be sent | - | - |
| **403** | The caller does not hold the portal-settings right of a DocSpace administrator, or the user named as the new owner is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**OwnerChangeInstructionsWrapper**](../api.md#model-ownerchangeinstructionswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
