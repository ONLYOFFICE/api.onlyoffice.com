# getMemberPhoto

> ThumbnailsDataWrapper getMemberPhoto(userId)

`GET /api/2.0/people/{userId}/photo`

Get a user photo

Returns the URLs of the avatar of a profile in every size the portal keeps. Any signed-in user can call it for an account they can see. If the caller cannot see the account, the call returns 403. A guest sees only the accounts related to them. The call is read-only. A profile without its own avatar gets the URLs of the default image. The URLs change with the avatar. Request them again before each use. To change the avatar, use `POST api/2.0/people/{userId}/photo` for a file or `PUT api/2.0/people/{userId}/photo` for a URL. To delete it, use `DELETE api/2.0/people/{userId}/photo`. If no user has the ID, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **String** | The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its user name is accepted. Reading a photo works for any account the caller may see, while deleting one only works for the calling account itself. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the photo in every size, or of the default image when the profile has no photo | [**ThumbnailsDataWrapper**](../../models/thumbnails-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to see the requested account | - | - |
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
