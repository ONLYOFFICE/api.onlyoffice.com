# setOpenEditorInSameTab

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper setOpenEditorInSameTab(SettingsRequestDto)

`PUT /api/2.0/files/settings/openeditorinsametab`

Open document in the same browser tab

Stores whether the caller wants documents opened in the current browser tab instead of a new one, and returns the value that is now stored. It is a preference of the calling account: every authenticated role down to a guest may change its own copy, and an unauthenticated caller is refused. The portal only keeps the value - the editor addresses returned by the file operations are the same either way, so this setting changes how a client opens them rather than what it receives. Writing a value that is already stored is accepted and leaves the setting untouched. The value is published as `openEditorInSameTab` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with documents opening in a new tab. Nothing about the document changes with it: the editing session, the access rights that apply and the addresses handed out are the same whichever tab a client uses.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../files.md#model-settingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if documents are opened in the current browser tab | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
