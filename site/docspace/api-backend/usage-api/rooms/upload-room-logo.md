# uploadRoomLogo

> UploadResultWrapper uploadRoomLogo(File)

`POST /api/2.0/files/logos`

Upload a room logo image

Saves an image in temporary storage and returns its path. This is the first step of setting a room logo, and no room changes. Then pass the path as `tmpFile` to `POST api/2.0/files/rooms/{id}/logo` with the crop area. Requires a DocSpace admin or a room admin. Other callers get 403. The call changes data in temporary storage only, and each call creates a new path. So you can repeat it. Send the image as multipart form data. The call uses the first file and ignores other parts. It converts the image to PNG and scales it down to fit 1280 by 1280 pixels. The call returns 400 if the request is not a multipart form or has no file. It also returns 400 if the image is empty, over the size limit, or not a readable PNG or JPEG.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **File** | form | **File** (binary) | The image data. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The path of the stored temporary image | [**UploadResultWrapper**](../models/upload-result-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request is not a multipart form or carries no file, or the first file is empty, larger than the portal limit for uploaded images, or not a readable PNG or JPEG image | - | - |
| **403** | Only a room manager or a portal administrator can upload a logo | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UploadResultWrapper**](../models/upload-result-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
