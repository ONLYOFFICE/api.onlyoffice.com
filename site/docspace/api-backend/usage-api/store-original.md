# storeOriginal

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper storeOriginal(SettingsRequestDto)

`PUT /api/2.0/files/storeoriginal`

Change the ability to upload original formats

Stores whether the caller's uploads keep the original file when the portal converts them into an editable format, and returns the value that is now stored. With `set=true` the converted document is saved as a new file next to the upload, so both the original and the converted copy stay in the folder; with `set=false` the conversion replaces the uploaded file with a new version of it whenever the caller may edit that file. The setting belongs to the calling account alone: every authenticated role down to a guest may change its own copy, and an unauthenticated caller is refused. It applies to conversion on upload and to `PUT api/2.0/files/file/{fileId}/checkconversion`, not to files already stored. The value is published as `storeOriginalFiles` by `GET api/2.0/files/settings`, which is the only way to read it back. The change is recorded in the portal audit trail.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../files.md#model-settingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if the original file is kept when an upload is converted | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
