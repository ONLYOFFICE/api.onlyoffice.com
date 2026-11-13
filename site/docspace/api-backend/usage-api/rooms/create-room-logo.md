# createRoomLogo

> FolderWrapper createRoomLogo(id, LogoRequest)

`POST /api/2.0/files/rooms/{id}/logo`

Set the room logo

Sets an uploaded image as the room logo, and returns the room with the URLs of four logo sizes. First, upload the image with `POST api/2.0/files/logos`. Then pass the returned path in `tmpFile`. An empty `tmpFile` changes nothing. Use `x`, `y`, `width`, and `height` to crop the image. A position without a size returns 400, but a size without a position works. The logo hides the cover of the room. If you delete the logo, the room shows the cover again. Requires the room manager role in the room. Other callers get 403. An archived room also returns 403. The call changes data. The portal deletes the uploaded image after this call, so a repeated call returns 404. A path that another account uploaded returns 403. The call returns 400 for a crop outside the image or a value out of range. If the logo does not fit the portal storage quota, the call returns 402. If the room does not exist, the call returns 404.  Raises the `room.updated` webhook when a logo is given in `tmpFile`. Raises the `agent.updated` webhook instead when the room is an AI agent.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room the logo is set on. | [required] [example: `1`] |
| **LogoRequest** | body | [**LogoRequest**](../models/logo-request.md) | The uploaded picture and the piece of it to use. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room with the addresses of its new logo | [**FolderWrapper**](../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `tmpFile`, `x` or `y` is outside 0-1280, `width` or `height` is missing or outside 1-1280, the crop position lies outside the uploaded picture, or a third-party identifier refers to a storage account that is not connected | - | - |
| **402** | The logo does not fit into the portal storage quota | - | - |
| **403** | The caller may not edit this room, the room is archived, or `tmpFile` is not a picture the caller uploaded | - | - |
| **404** | No room with this ID exists, `tmpFile` names no uploaded picture or one already used, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../models/folder-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room the logo is set on. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderWrapper**](../models/third-party-folder-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
