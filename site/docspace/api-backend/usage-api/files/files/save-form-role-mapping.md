# saveFormRoleMapping

> saveFormRoleMapping(fileId, SaveFormRoleMappingDto)

`POST /api/2.0/files/file/{fileId}/formrolemapping`

Save form role mapping

Assigns the roles of a PDF form to users and starts the filling. The call marks the form as being filled and records the caller as the user who started it. It notifies the users in the roles, except the caller. Members who may only fill forms can then see the form. Each role has a name, an account, and a sequence number that sets the turn. Roles with the same number are filled in parallel, and different numbers make a queue. The call replaces the whole set of roles. In a virtual data room, an empty role list resets a stopped filling and deletes the assignment. Elsewhere, or before a stop, an empty list returns 403. The call reads the form id only from `formId` in the body. Send the same value in the route. The form must be a PDF in a room. Requires the right to start or reset the filling, which a room manager and a content creator have. Other callers get 403. The call changes data. Do not repeat it. In a virtual data room, a repeated call returns 403. In a form-filling room, each call notifies the users in the roles again. If `roles` is missing, the call returns 400. To read the stored roles, use `GET api/2.0/files/file/{fileId}/formroles`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The form the role mapping belongs to. Send the same value as the `formId` of the request body, which is the one the handler reads. | [required] |
| **SaveFormRoleMappingDto** | body | [**SaveFormRoleMappingDto**](../../models/save-form-role-mapping-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The roles were stored and the filling was started or reset | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `formId` or `roles`, or `roles` is null | - | - |
| **403** | The caller may not start or reset the filling of this form, or the file is not a PDF or lies outside a room | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
