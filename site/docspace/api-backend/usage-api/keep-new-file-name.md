# keepNewFileName

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper keepNewFileName(SettingsRequestDto)

`PUT /api/2.0/files/keepnewfilename`

Keep the default file name

Stores whether the caller wants new documents created with the default name instead of being asked for one, and returns the value that is now stored. It is a preference of the calling account: every authenticated role down to a guest may change its own copy, one member's choice never affects another, and an unauthenticated caller is refused. The portal only keeps the value and reports it - the creation operations, `POST api/2.0/files/{folderId}/file` among them, always use the title they are given, so this setting changes what an interface asks for rather than what the server does. Writing a value that is already stored is accepted and leaves the setting and the audit trail untouched. The value is published as `keepNewFileName` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the prompt in place. The title a created document actually gets, and how a clash with an existing title is resolved, are decided by the creation request rather than here.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../files.md#model-settingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if new documents are created with the default name | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
