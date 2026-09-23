# changeDeleteConfirm

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper changeDeleteConfirm(SettingsRequestDto)

`PUT /api/2.0/files/changedeleteconfrim`

Ask for delete confirmation

Stores whether the caller wants to be asked for confirmation before files and folders are deleted, and returns the value that is now stored. The setting belongs to the calling account alone: every authenticated role down to a guest may change its own copy, one member's choice never affects another, and an unauthenticated caller is refused. It is a hint for the interface, not a server-side guard: the delete operations under `api/2.0/files/fileops` remove whatever they are given regardless of this value, so a client that skips its own prompt loses nothing but the prompt. Pass `set=true` to be asked again, `set=false` to delete without a prompt. The same value is published as `confirmDelete` by `GET api/2.0/files/settings`, which is the only way to read it back. Repeating the call with the same value writes it again and is safe. A new account starts with the confirmation switched on, and the value says nothing about where deleted items land: they go to the trash and are cleared from there according to `GET api/2.0/files/settings/autocleanup`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../files.md#model-settingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if the caller is asked to confirm a deletion | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
