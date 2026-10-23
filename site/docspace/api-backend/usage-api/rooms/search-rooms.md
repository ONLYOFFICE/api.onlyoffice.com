# searchRooms

> FolderContentWrapper searchRooms(RoomsMetadataSearchRequestDto)

`POST /api/2.0/files/rooms/search`

Search the rooms by metadata

Lists one page of the rooms of a section narrowed by metadata: the active rooms by default, or the archive, the room templates, the form templates or the Forms section, chosen with `searchArea`, while `type` narrows the room types. The filter is a typed body: `metadataTemplateId` alone keeps the rooms the template is assigned to, every condition in `metadataFilters` must hold at once, and `filterValue` adds a text search over room titles and metadata values; the template and field IDs come from `GET api/2.0/files/metadata/templates`, and a body with none of them lists the section unfiltered. A caller sees only the rooms they created or were invited to, a DocSpace admin sees all of them, so an empty page means nothing visible matched. The call changes nothing but the sort order: a `sortBy` value is stored as the account's default order for later listings, and omitting it reuses the stored one. The rooms come in `folders` while `files` stays empty, and `total` counts every match before `count` and `startIndex` page through them. An unknown template or field, a field outside the named template, more than 20 conditions, an unrecognised `sortBy` or a `count` out of range is refused with 400, a section the caller cannot read with 403. For the tag, member, owner, storage, quota and privacy filters use `GET api/2.0/files/rooms`, which takes the same metadata filter as a JSON string.

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
