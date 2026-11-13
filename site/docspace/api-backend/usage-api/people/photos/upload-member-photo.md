# uploadMemberPhoto

> FileUploadResultWrapper uploadMemberPhoto(userId, file, autosave)

`POST /api/2.0/people/{userId}/photo`

Upload a user photo

Uploads an image as the avatar of your own profile, or as a temporary file. With `autosave` set to true, the image immediately becomes the avatar. The call builds all its sizes and returns their URLs in `data`. Each URL has a `hash` parameter that changes with the avatar. So an app can cache these URLs. With `autosave` false, the call only saves a temporary file and returns it in `data`. Pass this value as `tmpFile` to `POST api/2.0/people/{userId}/photo/thumbnails` to choose the crop. The profile does not change until that call succeeds. Any signed-in user can call it for their own profile only. A call for another profile gets 200 with `success` set to false. With `autosave` true, the call changes data. You can repeat it with the same file. The image must be PNG or JPEG and fit the image size limit. The call reports every error in the body, with the status 200. It sets `success` to false and puts the reason in `message`. This covers a missing file, a wrong format, and a too large image. So check `success`, not the status.  Raises the `user.updated` webhook only when `autosave` is true and the image is saved to the profile.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **String** | The profile whose avatar is uploaded, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **file** | form | **File** (binary) | The image itself, sent as a multipart form field. It has to be a raster format the portal can read and stay within the portal limit on image size; sending no file makes the operation answer with `success` false rather than an error status. | [required] |
| **autosave** | form | **Boolean** | Set it to true to make the uploaded image the avatar right away. With the default false the image is only stored as a temporary file whose name comes back in `data`, and it has to be passed to `POST api/2.0/people/{userId}/photo/thumbnails` to take effect. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The upload result: on success the photo URLs or the temporary file name in data, and on failure success set to false with the reason in message | [**FileUploadResultWrapper**](../../models/file-upload-result-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileUploadResultWrapper**](../../models/file-upload-result-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
