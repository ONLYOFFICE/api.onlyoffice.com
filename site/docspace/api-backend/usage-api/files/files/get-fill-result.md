# getFillResult

> FillingFormResultWrapper getFillResult(fillingSessionId)

`GET /api/2.0/files/file/fillresult`

Get form-filling result

Returns the result of a completed form-filling session. It holds the filled copy, the original form, and the submission number in the room. It also holds the room and the account that started the filling. Anyone can call it without signing in. The session id in `fillingSessionId` is the only secret. The call is read-only. The portal keeps the result only for a limited time after the filling ends. So request it soon after the document service reports the session id. The call returns 404 for a session that never completed, has expired, or has a wrong format. If `fillingSessionId` is missing, the call returns 400. To read the filled copy, use `GET api/2.0/files/file/{fileId}`.

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
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FillingFormResultWrapper**](../../models/filling-form-result-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
