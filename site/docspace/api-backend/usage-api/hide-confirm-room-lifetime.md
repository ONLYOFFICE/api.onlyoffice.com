# hideConfirmRoomLifetime

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper hideConfirmRoomLifetime(SettingsRequestDto)

`PUT /api/2.0/files/hideconfirmroomlifetime`

Hide confirmation dialog when changing room lifetime settings

Stores whether the caller is warned before the lifetime settings of a room are changed, and returns the value that is now stored. A room lifetime moves the files of the room to the trash once they reach the configured age, which is why the interface confirms the change; this setting decides whether that confirmation is shown to the calling account. It belongs to that account alone: every authenticated role down to a guest may change its own copy, and an unauthenticated caller is refused. It works in both directions - `set=true` hides the warning, `set=false` brings it back - and is a hint for the interface only, so changing a room lifetime through `PUT api/2.0/files/rooms/{id}` is unaffected. The value is published as `hideConfirmRoomLifetime` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the warning shown, and writing a value that is already stored is accepted and leaves the setting untouched. Hiding the warning does not shorten or extend any lifetime: what a room does with ageing files is decided by the room itself.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../files.md#model-settingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if the room lifetime warning is now hidden for the caller | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../files.md#model-booleanwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
