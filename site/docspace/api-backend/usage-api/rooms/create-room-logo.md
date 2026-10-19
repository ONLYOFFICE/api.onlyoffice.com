# createRoomLogo

> FolderWrapper createRoomLogo(id, LogoRequest)

`POST /api/2.0/files/rooms/{id}/logo`

Set the room logo

Turns an image already uploaded to the portal into the logo of a room and returns the room with the addresses of the four logo sizes. This is the second half of a two-step flow: upload the picture with `POST api/2.0/files/logos` first and pass the path it returns as `tmpFile`, because the image itself is never sent here. The temporary file belongs to the account that uploaded it and is consumed by this call, so it cannot be reused for a second room and a path somebody else uploaded is refused. `x`, `y`, `width` and `height` crop the picture; sending a position without a size is rejected as an invalid request, while a size without a position is accepted. An empty `tmpFile` leaves the room as it is. A logo replaces the cover in the interface without erasing it, and removing the logo brings the cover back. The caller must be a manager of the room, an archived room is refused, and an unknown room is answered with 404.

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
| **500** | `width` or `height` is larger than 2147483647, or a third-party identifier carries a storage account number beyond the 32-bit range | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
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
