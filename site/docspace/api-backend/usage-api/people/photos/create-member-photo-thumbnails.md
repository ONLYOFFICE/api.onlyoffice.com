# createMemberPhotoThumbnails

> ThumbnailsDataWrapper createMemberPhotoThumbnails(userid, ThumbnailsRequest)

`POST /api/2.0/people/{userid}/photo/thumbnails`

Create photo thumbnails

Crops the avatar of a profile to the rectangle given in the request and rebuilds all of its thumbnail sizes, which is the second step of changing an avatar by hand. It works in two modes: with `tmpFile` it takes the temporary image `POST api/2.0/people/{userid}/photo` produced with `autosave` off, makes the cropped result the main photo and then discards the temporary file, and without `tmpFile` it re-crops the photo the profile already has. A caller may only do this to their own profile - the ID in the route has to be the calling account, and an administrator gets 403 for anybody else - and the account must be allowed to edit its own profile. The call replaces the stored photo, so the previous crop is lost, and it can be repeated with new coordinates as often as needed. Passing `width` and `height` as 0 together with `tmpFile` keeps the whole uploaded image instead of cropping it. The answer holds the URLs of every generated size, the same shape `GET api/2.0/people/{userid}/photo` returns.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar is cropped, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **ThumbnailsRequest** | body | [**ThumbnailsRequest**](../../models/thumbnails-request.md) | The crop rectangle, and optionally the temporary image to crop. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the rebuilt photo sizes | [**ThumbnailsDataWrapper**](../../models/thumbnails-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The ID in the route is not the calling account, or the account may not edit its own profile | - | - |
| **404** | No user has the specified ID | - | - |
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
