# saveFormRoleMapping

> saveFormRoleMapping(fileId, SaveFormRoleMappingDtoInteger)

`POST /api/2.0/files/file/{fileId}/formrolemapping`

Save form role mapping

Assigns the roles of a PDF form to the people who are to fill them in, and starts the filling: the form is marked as being filled out, the account that called is recorded as the one who started it, everybody named in a role is notified, and the form becomes visible to the members whose room rights are limited to filling forms. Each role carries its name, the account that takes it and the sequence number that decides the turn, so the same sequence means the roles may be filled in parallel and different ones make a queue. Sending an empty role list resets the filling instead, dropping the assignment altogether. The whole set is replaced on every call, so the call is idempotent for a given set of roles but not additive. The file has to be a PDF form lying in a room; the caller needs the right to start the filling of that form, which the room admin and a member with content-creator rights have, and is otherwise refused with 403. Read back what was stored with `GET api/2.0/files/file/{fileId}/formroles`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The form the role mapping belongs to. Send the same value as the `formId` of the request body, which is the one the handler reads. | [required] |
| **SaveFormRoleMappingDtoInteger** | body | [**SaveFormRoleMappingDtoInteger**](../../models/save-form-role-mapping-dto-integer.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The roles were stored and the filling was started or reset | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not start or reset the filling of this form | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
