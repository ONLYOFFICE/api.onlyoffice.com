# changeDefaultAccessRights

Referenced types are defined in the [full reference](../files.md).

> FileShareResponseArrayWrapper changeDefaultAccessRights(request\_body)

`PUT /api/2.0/files/settings/dafaultaccessrights`

Change the default access rights

Stores the access rights the sharing dialog offers the calling account by default, and returns the set that was actually stored. The body is a bare array of access-right values, not an object. The portal normalises the array instead of keeping it as sent: it keeps the fill-forms, custom-filter and review entries, then adds read-and-write or comment - whichever is present, in that order - and stops there, and it falls back to read alone when nothing else applies, so the response can be shorter than the request and its order can differ. An empty array clears the setting, after which read alone is reported. A value outside the published list is rejected as an invalid request. The set belongs to the calling account alone: every authenticated role down to a guest may store its own, and an unauthenticated caller is refused. Nothing already shared is changed. The stored set is published as `defaultSharingAccessRights` by `GET api/2.0/files/settings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **List** | The access rights the sharing dialog should offer by default. The array is the whole request body rather than a field of an object, and the portal stores a normalised subset of it instead of the array as sent, so read the answer to learn what was kept. An empty array clears the setting, after which the portal reports read access alone. A value outside the published list is rejected as an invalid request. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The normalised set of default access rights stored for the caller | [**FileShareResponseArrayWrapper**](../files.md#model-fileshareresponsearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareResponseArrayWrapper**](../files.md#model-fileshareresponsearraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
