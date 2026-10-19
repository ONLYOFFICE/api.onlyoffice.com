# getFillResult

> FillingFormResultWrapper getFillResult(fillingSessionId)

`GET /api/2.0/files/file/fillresult`

Get form-filling result

Answers with the outcome of one completed form-filling session: the filled copy of the form, the original form it was made from, the number this submission was given inside the room, the identifier of the room and the account that started the filling. `isRoomMember` says whether the caller is a member of that room, which a client uses to decide whether the room can be offered for opening. The session is named by `fillingSessionId`, the value the document service reports when the filling ends; the portal remembers it only for a while after that, so a session that was never completed, one already forgotten and a value of the wrong shape are all answered as not found, while omitting the parameter is rejected as an invalid request. The operation is read-only and needs no sign-in: it is meant for the caller that has just finished filling the form through an external link, and the session identifier is the only secret involved. The filled copy itself is an ordinary file - read it with `GET api/2.0/files/file/{fileId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fillingSessionId** | query | **String** | The identifier of the finished filling session, the value the document service reports when the filling ends. The portal remembers it only for a while afterwards, so an older session is answered as not found. | [optional] [example: `11111111-2222-3333-4444-555555555555`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The result of the completed form-filling session | [**FillingFormResultWrapper**](../../models/filling-form-result-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The `fillingSessionId` is missing or empty | - | - |
| **404** | No completed form-filling session with this identifier is remembered | - | - |
| **500** | The original form of the filled copy has been deleted | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FillingFormResultWrapper**](../../models/filling-form-result-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
