# createRoomFromTemplate

Referenced types are defined in the [full reference](../files.md).

> RoomFromTemplateStatusWrapper createRoomFromTemplate(CreateRoomFromTemplateDto)

`POST /api/2.0/files/rooms/fromtemplate`

Create a room from the template

Starts a background job that copies a room template into a new room of the Rooms section, and answers with the same progress record that `GET api/2.0/files/rooms/fromtemplate/status` returns. The caller must be able to read the template and to create rooms at all, so a user or a guest is refused, and the checks run before the job is queued. The room does not exist when the response arrives: poll the status operation until `isCompleted` is true, then take `roomId` from it, and treat a non-empty `error` as a failed job. Only one such job is kept per account, and a finished one is discarded when the next is started, so a second creation loses the record of the first. Anything not sent is inherited from the template, and `copyLogo` keeps the template logo and makes `logo` pointless. `quota` is accepted only while the per-room quota feature is on, and a template of a public room cannot be instantiated while the portal forbids external sharing. A template that does not exist or cannot be read is answered as missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateRoomFromTemplateDto** | body | [**CreateRoomFromTemplateDto**](../files.md#model-createroomfromtemplatedto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The progress record of the room creation job | [**RoomFromTemplateStatusWrapper**](../files.md#model-roomfromtemplatestatuswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomFromTemplateStatusWrapper**](../files.md#model-roomfromtemplatestatuswrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
