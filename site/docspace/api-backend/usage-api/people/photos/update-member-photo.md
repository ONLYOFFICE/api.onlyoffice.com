# updateMemberPhoto

> ThumbnailsDataWrapper updateMemberPhoto(userId, UpdatePhotoMemberRequest)

`PUT /api/2.0/people/{userId}/photo`

Update a user photo

Sets the avatar of your own profile from an image that the portal downloads from the URL in `files`. Any signed-in user can call it for their own profile only. A call for another profile returns 403, even from a DocSpace admin. The URL is absolute or relative to the portal. It must use HTTPS. Only a request that came over HTTP may pass an HTTP URL. The call changes data and replaces the avatar and all its sizes. You can repeat it with the same body. If `files` is the URL the profile already uses, the call keeps the current image. To send the image bytes, use `POST api/2.0/people/{userId}/photo`. To delete the avatar, use `DELETE api/2.0/people/{userId}/photo`. If `files` is empty, the call returns 400. It also returns 403 if the portal refuses the URL or the server behind it returns an error. If no user has the ID, the call returns 404.  Raises the `user.updated` webhook on every call, even when `files` is the current avatar.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **String** | The profile whose avatar is replaced, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdatePhotoMemberRequest** | body | [**UpdatePhotoMemberRequest**](../../models/update-photo-member-request.md) | The address of the image to use as the new avatar. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the photo sizes built from the downloaded image | [**ThumbnailsDataWrapper**](../../models/thumbnails-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or the files field is empty | - | - |
| **403** | The ID in the route is not the calling account, the account may not edit its own profile, the URL was refused, or the server behind it answered with an error status | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThumbnailsDataWrapper**](../../models/thumbnails-data-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
