# deleteCustomTags

> deleteCustomTags(BatchTagsRequestDto)

`DELETE /api/2.0/files/tags`

Delete the custom room tags

Deletes custom room tags from the portal catalog and removes them from every room. The rooms and their content stay. Requires a DocSpace admin. Other callers get 403. A room admin can create tags but also gets 403 here. The call cannot be undone. Creating the name again with `POST api/2.0/files/tags` restores the tag but not its rooms. The call matches names, ignoring case on MySQL, and skips names that are not in the catalog. An empty list changes nothing. So a success does not prove that a tag was deleted, and you can repeat the call. To check a tag first, use `GET api/2.0/files/tags/{tagName}/haslinks`. The response has no body. To remove a tag from one room only, use `DELETE api/2.0/files/rooms/{id}/tags`. The call returns 400 if `names` is missing, or a name is empty, has only spaces, or is too long.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BatchTagsRequestDto** | body | [**BatchTagsRequestDto**](../models/batch-tags-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tags were removed from the catalog and from every room | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `names`, or a name is empty, blank or longer than 255 characters | - | - |
| **403** | Only a portal administrator can delete tags | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
