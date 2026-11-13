# getRoomsFolder

> FolderContentWrapper getRoomsFolder(type, subjectId, subjectOwnerId, searchArea, withoutTags, tags, excludeSubject, provider, quotaFilter, storageFilter, privacyFilter, withAiFolder, count, startIndex, sortBy, sortOrder, filterValue, groupId, metadataTemplateId, metadataFilters, includeHiddenMetadata)

`GET /api/2.0/files/rooms`

Get rooms

Returns one page of the rooms of a portal section. The `searchArea` parameter picks the section, by default the active rooms. The other parameters filter the rooms by type, title, tags, member, owner, storage, quota, privacy, and metadata. A room must match all filters. Any signed-in user can call it. If the caller cannot read the section, the call returns 403. A caller sees only the rooms they created or were invited to. A DocSpace admin sees all rooms. So an empty list means that the caller sees no matching room. The call is read-only, except that it stores a `sortBy` value as the default sort order of the account. Without `sortBy`, the call uses the stored order. The rooms come in `folders`, and `files` stays empty. The `current` field describes the section, and `total` counts all matching rooms before paging. To read one room, use `GET api/2.0/files/rooms/{id}`. The call returns 400 if `tags` is not a JSON array, `sortBy` is unknown, or the metadata filter is invalid.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **type** | query | [**List**](../models/room-type.md) | Keeps only the rooms of the listed kinds. Repeat the parameter to pass more than one value; they are combined with OR, and omitting it returns the rooms of every kind. | [optional] [example: `1`] |
| **subjectId** | query | **UUID** (uuid) | Keeps only the rooms this account or group has access to, which is how the rooms of one member are listed. The identifier comes from the portal people and group listings, and the exclude flag turns the filter into its opposite. | [optional] [example: `9a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9`] |
| **subjectOwnerId** | query | **UUID** (uuid) | Keeps only the rooms created by this account, regardless of who else was invited to them. The identifier comes from the portal people listing, and the exclude flag turns the filter into its opposite. | [optional] [example: `9a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9`] |
| **searchArea** | query | **SearchArea** | The section to list. Every section is a separate root and a room belongs to exactly one of them at a time, so archiving a room moves it out of the active section. The default is the active section, which leaves the form-filling rooms to their own value. | [optional] [example: `1`] [enum: `Active`, `Archive`, `Any`, `RecentByLinks`, `Templates`, `Knowledge`, `ResultStorage`, `AiAgents`, `Forms`, `FormTemplates`, `AiHub`, `PrivateRooms`] |
| **withoutTags** | query | **Boolean** | When true, keeps only the rooms that carry no tag at all, which is the complement of the tag filter. When false or omitted, tags play no part in the selection. | [optional] [example: `false`] |
| **tags** | query | **String** | A JSON array of tag names serialized into a single query value, for example [Important,Legal]. A room matches when it carries any one of them. Take the names from `GET api/2.0/files/tags`; a name that is not in the catalog simply matches nothing. | [optional] [example: `["Important"]`] |
| **excludeSubject** | query | **Boolean** | Inverts the two subject filters: when true, the rooms of the named account are the ones left out of the answer instead of the only ones kept. It does nothing on its own. | [optional] [example: `false`] |
| **provider** | query | **ProviderFilter** | Keeps only the rooms whose content lives in the named third-party service, for portals where rooms may be connected to external storage. The default keeps rooms of every origin. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`] |
| **quotaFilter** | query | **QuotaFilter** | Splits the rooms by whether a storage quota was set on the room itself or it follows the portal default, which is how rooms with a custom limit are found. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **storageFilter** | query | **StorageFilter** | Splits the rooms by where their content is stored, in the portal itself or in a connected third-party account. It is the coarse form of the provider filter. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **privacyFilter** | query | **RoomPrivacyFilter** | Splits the rooms by whether they are private, that is encrypted rooms whose content the portal cannot read. Omitting it returns both kinds, except in the active rooms, which leave private rooms out. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **withAiFolder** | query | **Boolean** | Keeps only the rooms that provide skills to the AI chat: Instructions rooms, whose Markdown files are read with `GET api/2.0/files/rooms/{id}/ai`. Omitting it returns rooms of every type. | [optional] [example: `true`] |
| **count** | query | **Integer** (int32) | How many rooms one page may carry. Ask for the next page by raising the start index by the number of rooms already received. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many matching rooms to skip before the page begins. Page through the answer until the skip plus the rooms received reaches the total it reports. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The field to order the rooms by, named as in the file listings: `AZ` for the title, `DateAndTime` for the last change, `DateAndTimeCreation`, `Author`, `Size`, `Type`, `RoomType`, `Tags`, `UsedSpace`, `LastOpened`. The name is matched ignoring case, an unknown one is rejected rather than ignored, and the accepted one also becomes this account's stored order. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction of the order chosen by the sort field. It has no effect when no sort field is given and the stored order of the account is used. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | Keeps only the rooms whose title contains this text, ignoring case. It is a substring match over the title alone: room content and tags are not searched. | [optional] [example: `Sales`] |
| **groupId** | query | **Integer** (int32) | Keeps only the rooms that belong to this room group. The identifier comes from `GET api/2.0/files/group`; the groups of portal members are a different concept and their identifiers do not match here. | [optional] [example: `1`] |
| **metadataTemplateId** | query | **Integer** (int32) | The ID of the metadata template the entries must be assigned to. On its own it narrows the listing to the entries carrying the template; together with the metadata filters it also pins the template the filtered fields belong to. | [optional] [example: `1`] |
| **metadataFilters** | query | **String** | The URL-encoded JSON array of the metadata filter conditions, e.g. [\{fieldId:1,op:contains,value:ACME\},\{fieldId:2,op:range,from:2026-01-01,to:2026-06-30\},\{fieldId:3,op:in,optionIds:[...]\}]. A string field takes eq (the whole value) or contains (a part of it); a number or a date field takes range with inclusive bounds, or gt, gte, lt, lte with the single bound in value; a choice field takes in. A date-only bound covers the whole day, so to:2026-06-30 includes the values stored on 30 June and gt:2026-06-30 starts after it. A custom field is addressed by its name instead of the fieldId: \{name:Client,op:eq,value:ACME\}. The same filter is taken as a typed request body by POST api/2.0/files/rooms/search. | [optional] [example: `[{"fieldId":1,"op":"eq","value":"ACME"}]`] |
| **includeHiddenMetadata** | query | **Boolean** | Whether the text search, and the metadataMatches it reports, also look at the values of the hidden metadata templates (created with visible false for the metadata a service keeps for itself, which the web client never shows). False, the default, leaves them out, so an entry is not found by such a value; true takes them in. metadataTemplateId and metadataFilters are not concerned: a hidden template or field named there is searched either way. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rooms of the selected section with the paging counters | [**FolderContentWrapper**](../models/folder-content-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, the `startIndex` is negative, or `tags` is not a JSON array of strings | - | - |
| **403** | The caller cannot read the selected section | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentWrapper**](../models/folder-content-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
