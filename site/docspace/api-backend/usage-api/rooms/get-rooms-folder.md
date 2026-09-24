# getRoomsFolder

> FolderContentIntegerWrapper getRoomsFolder(type, subjectId, subjectOwnerId, searchArea, withoutTags, tags, excludeSubject, provider, quotaFilter, storageFilter, privacyFilter, count, startIndex, sortBy, sortOrder, filterValue, groupId)

`GET /api/2.0/files/rooms`

Get rooms

Lists the rooms of one section of the portal: the active rooms by default, or the archive, the form-filling section or the room templates, chosen with `searchArea`. The rooms arrive in `folders` while `files` stays empty, `current` describes the section itself, and `total` counts every room that matched the filters before paging. A caller sees only the rooms they created or were invited to, while a portal administrator sees all of them, so an empty answer means nothing is visible to this account rather than nothing exists. The remaining parameters narrow the same set, by room type, title, tags, member, owner, storage, quota and privacy, and they combine with each other. Sorting is not free of side effects: a `sortBy` value is also stored as this account's default order for later listings, and omitting it reuses the stored order. Page the result with `count` and `startIndex`. Read a single room with `GET api/2.0/files/rooms/{id}`, and create one with `POST api/2.0/files/rooms`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **type** | query | [**List**](../models/room-type.md) | Keeps only the rooms of the listed kinds. Repeat the parameter to pass more than one value; they are combined with OR, and omitting it returns the rooms of every kind. | [optional] [example: `1`] |
| **subjectId** | query | **UUID** (uuid) | Keeps only the rooms this account or group has access to, which is how the rooms of one member are listed. The identifier comes from the portal people and group listings, and the exclude flag turns the filter into its opposite. | [optional] [example: `9a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9`] |
| **subjectOwnerId** | query | **UUID** (uuid) | Keeps only the rooms created by this account, regardless of who else was invited to them. The identifier comes from the portal people listing, and the exclude flag turns the filter into its opposite. | [optional] [example: `9a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9`] |
| **searchArea** | query | **SearchArea** | The section to list. Every section is a separate root and a room belongs to exactly one of them at a time, so archiving a room moves it out of the active section. The default is the active section, which leaves the form-filling rooms to their own value. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`] |
| **withoutTags** | query | **Boolean** | When true, keeps only the rooms that carry no tag at all, which is the complement of the tag filter. When false or omitted, tags play no part in the selection. | [optional] [example: `false`] |
| **tags** | query | **String** | A JSON array of tag names serialized into a single query value, for example [Important,Legal]. A room matches when it carries any one of them. Take the names from `GET api/2.0/files/tags`; a name that is not in the catalog simply matches nothing. | [optional] [example: `["Important"]`] |
| **excludeSubject** | query | **Boolean** | Inverts the two subject filters: when true, the rooms of the named account are the ones left out of the answer instead of the only ones kept. It does nothing on its own. | [optional] [example: `false`] |
| **provider** | query | **ProviderFilter** | Keeps only the rooms whose content lives in the named third-party service, for portals where rooms may be connected to external storage. The default keeps rooms of every origin. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`] |
| **quotaFilter** | query | **QuotaFilter** | Splits the rooms by whether a storage quota was set on the room itself or it follows the portal default, which is how rooms with a custom limit are found. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **storageFilter** | query | **StorageFilter** | Splits the rooms by where their content is stored, in the portal itself or in a connected third-party account. It is the coarse form of the provider filter. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **privacyFilter** | query | **RoomPrivacyFilter** | Splits the rooms by whether they are private, that is encrypted rooms whose content the portal cannot read. Omitting it returns both kinds. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **count** | query | **Integer** (int32) | How many rooms one page may carry. Ask for the next page by raising the start index by the number of rooms already received. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many matching rooms to skip before the page begins. Page through the answer until the skip plus the rooms received reaches the total it reports. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The field to order the rooms by, named as in the file listings: `AZ` for the title, `DateAndTime` for the last change, `DateAndTimeCreation`, `Author`, `Size`, `Type`, `RoomType`, `Tags`, `UsedSpace`, `LastOpened`. The name is matched ignoring case, an unknown one is rejected rather than ignored, and the accepted one also becomes this account's stored order. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction of the order chosen by the sort field. It has no effect when no sort field is given and the stored order of the account is used. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | Keeps only the rooms whose title contains this text, ignoring case. It is a substring match over the title alone: room content and tags are not searched. | [optional] [example: `Sales`] |
| **groupId** | query | **Integer** (int32) | Keeps only the rooms that belong to this room group. The identifier comes from `GET api/2.0/files/group`; the groups of portal members are a different concept and their identifiers do not match here. | [optional] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rooms of the selected section with the paging counters | [**FolderContentIntegerWrapper**](../models/folder-content-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot read the selected section | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentIntegerWrapper**](../models/folder-content-integer-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
