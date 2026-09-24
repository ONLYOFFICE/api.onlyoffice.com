# deleteMemberPhoto

> ThumbnailsDataWrapper deleteMemberPhoto(userid)

`DELETE /api/2.0/people/{userid}/photo`

Delete a user photo

Removes the avatar of a profile, so that the profile falls back to the default placeholder image. A caller may only do this to their own profile - the ID in the route has to be the calling account, and an administrator gets 403 for anybody else - and the account must be allowed to edit its own profile. The removal is permanent and cannot be undone: the stored image and all of its sizes are deleted, and a new avatar has to be uploaded through `POST api/2.0/people/{userid}/photo` to replace it. The call is idempotent, so removing an avatar from a profile that has none succeeds as well, and it raises a `UserUpdated` webhook. The answer still holds the URLs of every size, now pointing at the default image.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its user name is accepted. Reading a photo works for any account the caller may see, while deleting one only works for the calling account itself. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

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
