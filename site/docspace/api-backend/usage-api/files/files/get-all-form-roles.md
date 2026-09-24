# getAllFormRoles

> FormRoleArrayWrapper getAllFormRoles(fileId)

`GET /api/2.0/files/file/{fileId}/formroles`

Get form roles

Returns the roles of a PDF form together with the state each of them is in, which is how a client shows who is expected to fill the form next. Every entry carries the name of the role, the account holding it, the sequence number that decides the turn and a status: the roles of earlier turns are reported as complete, those of later turns as waiting, and the role whose turn it is as either yours to fill or already in progress, depending on whether that person has opened the form; when the filling has been stopped, the role it was interrupted at is reported as stopped instead. A form whose filling was never started answers with an empty list. The file has to be a PDF form, or the completed copy of one, and anything else is refused. Read access to the form is enough, so every member of the room sees the roles, while a caller without access to the room and a guest outside it are refused with 403 and an unknown file is answered with 404. The operation is read-only. The assignment itself is written by `POST api/2.0/files/file/{fileId}/formrolemapping`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The roles of the form with the state of each | [**FormRoleArrayWrapper**](../../models/form-role-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no read access to the form | - | - |
| **404** | No file with this identifier exists | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FormRoleArrayWrapper**](../../models/form-role-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
