# createRoomLogo

Referenced types are defined in the [full reference](../files.md).

> FolderIntegerWrapper createRoomLogo(id, LogoRequest)

`POST /api/2.0/files/rooms/{id}/logo`

Set the room logo

Turns an image already uploaded to the portal into the logo of a room and returns the room with the addresses of the four logo sizes. This is the second half of a two-step flow: upload the picture with `POST api/2.0/files/logos` first and pass the path it returns as `tmpFile`, because the image itself is never sent here. The temporary file belongs to the account that uploaded it and is consumed by this call, so it cannot be reused for a second room and a path somebody else uploaded is refused. `x`, `y`, `width` and `height` crop the picture; sending a position without a size is rejected as an invalid request, while a size without a position is accepted. An empty `tmpFile` leaves the room as it is. A logo replaces the cover in the interface without erasing it, and removing the logo brings the cover back. The caller must be a manager of the room, an archived room is refused, and an unknown room is answered with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room the logo is set on. | [required] [example: `1`] |
| **LogoRequest** | body | [**LogoRequest**](../files.md#model-logorequest) | The uploaded picture and the piece of it to use. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room with the addresses of its new logo | [**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **404** | No room with this ID is visible to the caller | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
