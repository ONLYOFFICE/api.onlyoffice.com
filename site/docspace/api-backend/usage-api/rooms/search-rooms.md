# searchRooms

> FolderContentWrapper searchRooms(RoomsMetadataSearchRequestDto)

`POST /api/2.0/files/rooms/search`

Search the rooms by metadata

Returns one page of the rooms of a portal section that match a metadata filter. The `searchArea` field picks the section, by default the active rooms, and `type` limits the room types. The `searchArea` field can also pick the private rooms section. The active rooms do not include private rooms. With only `metadataTemplateId`, the call keeps the rooms that have this template. A room must match every condition of `metadataFilters`. The call searches the `filterValue` text in room titles and metadata values. All given filters combine, and a body without them lists the whole section. Take the template and field IDs from `GET api/2.0/files/metadata/templates`. Any signed-in user can call it. If the caller cannot read the section, the call returns 403. A caller sees only the rooms they created or were invited to. A DocSpace admin sees all rooms. So an empty list means that the caller sees no matching room. The call is read-only, except that it stores a `sortBy` value as the default sort order of the account. Without `sortBy`, the call uses the stored order. You can repeat it with the same body. The rooms come in `folders`, and `files` stays empty. The `total` field counts all matching rooms before paging. To filter by tags, member, owner, storage, quota, or privacy, use `GET api/2.0/files/rooms`. The call returns 400 for an unknown template or field, a field outside the template, or more than 20 conditions. It also returns 400 for an unknown `sortBy`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RoomsMetadataSearchRequestDto** | body | [**RoomsMetadataSearchRequestDto**](../models/rooms-metadata-search-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Returns the matching rooms of the section | [**FolderContentWrapper**](../models/folder-content-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | An unknown metadata template or field, a field outside the named template, more than 20 conditions, an unrecognised `sortBy` or a `count` out of range | - | - |
| **403** | You don't have enough permission to view the room content | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
