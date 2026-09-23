# setOrganizeRoomsGrouping

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper setOrganizeRoomsGrouping(SettingsRequestDto)

`PUT /api/2.0/files/settings/organizegrouping`

Organize rooms grouping

Stores whether the caller sees rooms arranged by the groups they belong to instead of one flat list, and returns the value that is now stored. It is a preference of the calling account: every authenticated role down to a guest may change its own copy, and an unauthenticated caller is refused. The groups themselves are the room groups managed under `api/2.0/files/group`, and they exist whether or not this setting is on - the portal only records the preference, while `GET api/2.0/files/rooms` keeps returning the same rooms either way, so the arrangement is done by the client. Writing a value that is already stored is accepted and leaves the setting untouched. The value is published as `organizeRoomsGrouping` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the grouping on. Turning it off changes no group: the groups, the rooms in them and who may see them stay exactly as they were, and are still read through the room group operations.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../files.md#model-settingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if the caller sees rooms arranged by room groups | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
