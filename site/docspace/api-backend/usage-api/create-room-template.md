# createRoomTemplate

Referenced types are defined in the [full reference](../files.md).

> RoomTemplateStatusWrapper createRoomTemplate(RoomTemplateDto)

`POST /api/2.0/files/roomtemplate`

Create a room template

Queues a background job that turns an existing room into a reusable room template, and returns the state of that job right away. The template lands in the portal's Templates section, inherits the source room's type, privacy, indexing, storage limit, lifetime, download and watermark settings, and receives copies of the room's files together with its ordinary subfolders and everything inside them; the service subfolders a room keeps for its own workflows are left out. The caller needs room-manager rights on the source room, and the room must not be archived: a room that cannot be found under Rooms is answered as missing, and every other refusal comes back as a rejection. The template is not ready when the response arrives, so poll `GET api/2.0/files/roomtemplate/status` until `isCompleted` is true, then read `templateId`; a non-empty `error` there means the job failed and the half-built template was removed. Only one template creation is tracked per caller, and starting another replaces the previous record. Setting `public` to true discards `share` and `groups` and shares the finished template with everyone instead, while `copyLogo` reuses the source room's own picture and makes `logo` irrelevant.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RoomTemplateDto** | body | [**RoomTemplateDto**](../files.md#model-roomtemplatedto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Status | [**RoomTemplateStatusWrapper**](../files.md#model-roomtemplatestatuswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomTemplateStatusWrapper**](../files.md#model-roomtemplatestatuswrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
