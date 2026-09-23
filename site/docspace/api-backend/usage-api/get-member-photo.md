# getMemberPhoto

Referenced types are defined in the [full reference](../people.md).

> ThumbnailsDataWrapper getMemberPhoto(userid)

`GET /api/2.0/people/{userid}/photo`

Get a user photo

Returns the URLs of the avatar of a profile in every size the portal keeps: the original, the retina and the maximum variants, and the big, medium and small thumbnails. Unlike the operations that change an avatar, this one may be called for another account, as long as the caller is allowed to see that account - a guest, for instance, only sees the accounts it is related to. The call is read-only and always answers with a full set of URLs: a profile that has no avatar of its own gets the URLs of the default placeholder image rather than an empty answer. The URLs are portal paths meant to be requested directly and may be replaced when the avatar changes, so they should not be stored for a long time. To change the avatar use `POST api/2.0/people/{userid}/photo` for an uploaded file, `PUT api/2.0/people/{userid}/photo` for one taken from a URL, and `DELETE api/2.0/people/{userid}/photo` to drop it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its user name is accepted. Reading a photo works for any account the caller may see, while deleting one only works for the calling account itself. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the photo in every size, or of the default image when the profile has no photo | [**ThumbnailsDataWrapper**](../people.md#model-thumbnailsdatawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to see the requested account | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThumbnailsDataWrapper**](../people.md#model-thumbnailsdatawrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
