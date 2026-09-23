# deleteCustomTags

Referenced types are defined in the [full reference](../files.md).

> deleteCustomTags(BatchTagsRequestDto)

`DELETE /api/2.0/files/tags`

Delete the custom room tags

Deletes custom room tags from the portal catalog by name and detaches them from every room that carries them; the rooms themselves and their content are untouched, and only the tag disappears from their tag lists. Only a portal administrator may call it, and a room manager who is allowed to create tags is refused. The names are matched exactly as they are stored: names that are not in the catalog are skipped in silence and an empty list is accepted as a no-op, so a successful answer does not prove that anything was deleted; check a name with `GET api/2.0/files/tags/{tagName}/haslinks` first when that matters. The call cannot be undone: creating the name again with `POST api/2.0/files/tags` brings back the tag but not its links, which have to be attached to each room once more. The answer carries no body. To take a tag off one room and leave it in the catalog for the others, use `DELETE api/2.0/files/rooms/{id}/tags` instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BatchTagsRequestDto** | body | [**BatchTagsRequestDto**](../files.md#model-batchtagsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tags were removed from the catalog and from every room | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Only a portal administrator can delete tags | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
