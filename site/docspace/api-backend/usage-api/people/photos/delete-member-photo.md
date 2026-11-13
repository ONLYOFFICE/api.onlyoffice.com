# deleteMemberPhoto

> ThumbnailsDataWrapper deleteMemberPhoto(userId)

`DELETE /api/2.0/people/{userId}/photo`

Delete a user photo

Deletes the avatar of your own profile, so the profile shows the default image. Any signed-in user can call it for their own profile only. A call for another profile returns 403, even from a DocSpace admin. The call deletes the stored image and all its sizes, and this cannot be undone. You can repeat the call, even when the profile has no avatar. It returns the URLs of every size, which now point to the default image. To set a new avatar, use `POST api/2.0/people/{userId}/photo`. If no user has the ID, the call returns 404.  Raises the `user.updated` webhook even when the profile had no avatar.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **String** | The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its user name is accepted. Reading a photo works for any account the caller may see, while deleting one only works for the calling account itself. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of every photo size, now pointing at the default image | [**ThumbnailsDataWrapper**](../../models/thumbnails-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: Not defined
- **Accept**: application/json
