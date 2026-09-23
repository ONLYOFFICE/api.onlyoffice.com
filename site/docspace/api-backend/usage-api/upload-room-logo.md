# uploadRoomLogo

Referenced types are defined in the [full reference](../files.md).

> UploadResultWrapper uploadRoomLogo(File)

`POST /api/2.0/files/logos`

Upload a room logo image

Stores an image in temporary storage and answers with the path to it, which is the first half of setting a room logo. No room changes here: pass the returned path as `tmpFile` to `POST api/2.0/files/rooms/{id}/logo`, together with the crop rectangle, to make the image the logo of a room. The image travels as multipart form data, and the first file part of the request is the one that is used while any other part is ignored. It is re-encoded to PNG and scaled down to fit 1280 by 1280 pixels, so a larger picture is accepted and shrunk, while a part that is not a readable image, or one over the portal limit for uploaded images, is refused with 400. Only a room manager or a portal administrator may upload, and everyone else gets 403. Every call produces a new path, and an image that is never used stays in temporary storage until it is cleaned up, so uploading twice is harmless.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **File** | form | **File** (binary) | The image data. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The path of the stored temporary image | [**UploadResultWrapper**](../files.md#model-uploadresultwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request carries no image, or the image cannot be used as a logo | - | - |
| **403** | Only a room manager or a portal administrator can upload a logo | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UploadResultWrapper**](../files.md#model-uploadresultwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## RoomsGroupsApi
