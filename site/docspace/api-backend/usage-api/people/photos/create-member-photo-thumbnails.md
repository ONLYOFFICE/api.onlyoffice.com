# createMemberPhotoThumbnails

> ThumbnailsDataWrapper createMemberPhotoThumbnails(userId, ThumbnailsRequest)

`POST /api/2.0/people/{userId}/photo/thumbnails`

Create photo thumbnails

Crops the avatar of your own profile and rebuilds all its thumbnail sizes. This is the second step of changing an avatar by hand. With `tmpFile`, the call crops the temporary image from `POST api/2.0/people/{userId}/photo` with `autosave` off. Then it makes the result the main photo and deletes the temporary file. Without `tmpFile`, the call crops the current photo of the profile again. A `width` and `height` of 0 keep the whole image. Any signed-in user can call it for their own profile only. A call for another profile returns 403, even from a DocSpace admin. The call changes data and replaces the previous crop. You can repeat it without `tmpFile` and with new coordinates. A repeated call with the same `tmpFile` returns 404. The call returns the URLs of every size, as `GET api/2.0/people/{userId}/photo` does. If no user has the ID or no temporary file has the name in `tmpFile`, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **String** | The profile whose avatar is cropped, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **ThumbnailsRequest** | body | [**ThumbnailsRequest**](../../models/thumbnails-request.md) | The crop rectangle, and optionally the temporary image to crop. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the rebuilt photo sizes | [**ThumbnailsDataWrapper**](../../models/thumbnails-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The ID in the route is not the calling account, the account may not edit its own profile, or `x` equals the width of the image or `y` its height | - | - |
| **404** | No user has the specified ID, or no temporary file has the name given in `tmpFile` | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThumbnailsDataWrapper**](../../models/thumbnails-data-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
