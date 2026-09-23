# createRoomTag

Referenced types are defined in the [full reference](../files.md).

> StringWrapper createRoomTag(CreateTagRequestDto)

`POST /api/2.0/files/tags`

Create a room tag

Adds a custom tag to the portal-wide catalog of room tags and answers with the stored name. Tags are shared by the whole portal instead of belonging to the caller: once the tag exists, every room manager can attach it to their own rooms with `PUT api/2.0/files/rooms/{id}/tags`, and that call also creates a tag it does not find. Creating a name that is already in the catalog returns the existing tag unchanged rather than a duplicate or an error, so repeating the call after a timeout is safe. A blank name, or one longer than the published limit, is rejected as an invalid request. Only a room manager or a portal administrator may create a tag, and a user or a guest is refused. The answer is the name as stored, and that name is the value to send in the `tags` filter of `GET api/2.0/files/rooms` and in the room tag calls. The catalog itself is read with `GET api/2.0/files/tags`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateTagRequestDto** | body | [**CreateTagRequestDto**](../files.md#model-createtagrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The name of the created tag, or of the tag that already carried this name | [**StringWrapper**](../files.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Only a room manager or a portal administrator can create tags | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../files.md#model-stringwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
