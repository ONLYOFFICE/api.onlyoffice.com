# updateMemberPhoto

Referenced types are defined in the [full reference](../people.md).

> ThumbnailsDataWrapper updateMemberPhoto(userid, UpdatePhotoMemberRequest)

`PUT /api/2.0/people/{userid}/photo`

Update a user photo

Sets the avatar of a profile from an image the portal downloads itself from the URL given in `files`, which is the way to reuse a picture that is already published somewhere. A caller may only do this to their own profile - the ID in the route has to be the calling account, and an administrator gets 403 for anybody else - and the account must be allowed to edit its own profile. The URL has to be absolute or relative to the portal, and it has to use HTTPS unless the request itself came over HTTP; an address the portal refuses to fetch, and a download that does not succeed, both answer 403. Passing the URL the profile already uses is a no-op, and an empty `files` is rejected with 400, so use `DELETE api/2.0/people/{userid}/photo` to remove an avatar rather than sending an empty value. The downloaded image replaces the stored avatar and all of its sizes at once, raises a `UserUpdated` webhook, and is subject to the portal limit on image size. To send the bytes instead of a URL, upload the file through `POST api/2.0/people/{userid}/photo`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar is replaced, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdatePhotoMemberRequest** | body | [**UpdatePhotoMemberRequest**](../people.md#model-updatephotomemberrequest) | The address of the image to use as the new avatar. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the photo sizes built from the downloaded image | [**ThumbnailsDataWrapper**](../people.md#model-thumbnailsdatawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The files field is empty | - | - |
| **403** | The ID in the route is not the calling account, the account may not edit its own profile, or the URL was refused or could not be downloaded | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThumbnailsDataWrapper**](../people.md#model-thumbnailsdatawrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
