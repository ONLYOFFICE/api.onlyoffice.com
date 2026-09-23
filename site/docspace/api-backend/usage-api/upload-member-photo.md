# uploadMemberPhoto

Referenced types are defined in the [full reference](../people.md).

> FileUploadResultWrapper uploadMemberPhoto(userid, File, Autosave)

`POST /api/2.0/people/{userid}/photo`

Upload a user photo

Uploads an image as multipart form data and either makes it the avatar of a profile straight away or keeps it as a temporary file to be cropped afterwards. With `autosave` set to true the image becomes the avatar immediately, all of its sizes are built and their URLs come back in `data`, each with a `hash` query parameter that changes whenever the avatar does, so a client can cache them safely. With `autosave` left false the image is only stored as a temporary file and `data` holds its name, which has to be passed as `tmpFile` to `POST api/2.0/people/{userid}/photo/thumbnails` to choose the crop; nothing changes on the profile until that second call succeeds. A caller may only do this to their own profile, the ID in the route has to be the calling account, and the image has to be a format the portal can read and stay within the portal limit on image size. This operation reports every problem in the body instead of as a status code: it answers 200 with `success` set to false and a human-readable `message`, and it does so for a missing file, an unreadable format, an oversized image and a rejected permission alike, so a client has to check `success` and must not rely on the status alone. A successful upload raises a `UserUpdated` webhook only in the `autosave` case.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar is uploaded, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **File** | form | **File** (binary) | The image itself, sent as a multipart form field. It has to be a raster format the portal can read and stay within the portal limit on image size; sending no file makes the operation answer with `success` false rather than an error status. | [required] |
| **Autosave** | form | **Boolean** | Set it to true to make the uploaded image the avatar right away. With the default false the image is only stored as a temporary file whose name comes back in `data`, and it has to be passed to `POST api/2.0/people/{userid}/photo/thumbnails` to take effect. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The upload result: on success the photo URLs or the temporary file name in data, and on failure success set to false with the reason in message | [**FileUploadResultWrapper**](../people.md#model-fileuploadresultwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileUploadResultWrapper**](../people.md#model-fileuploadresultwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## PeopleProfilesApi
