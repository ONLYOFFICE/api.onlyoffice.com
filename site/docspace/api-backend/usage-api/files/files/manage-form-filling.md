# manageFormFilling

> manageFormFilling(fileId, ManageFormFillingDto)

`PUT /api/2.0/files/file/{fileId}/manageformfilling`

Perform form filling action

Drives the filling of a PDF form through its states, the action deciding which way. Action 2 starts the filling: in a form-filling room the form is opened for filling, the members whose rights are limited to filling forms are let in, and a form that has been changed since it was last started has the drafts of its previous round dropped. Action 0 stops it, which in a virtual data room records who interrupted it and at which role and notifies the people who held the other roles, and in a form-filling room closes the form for filling. Action 1 resumes a filling that was stopped, clearing that record. Action 3 puts the form back into editing, closing it for filling and remembering the version it was edited from. The file has to be a PDF form lying in a room. Starting needs the right to start the filling, which the room admin and a member with content-creator rights have, while stopping a filling that somebody else started belongs to room managers alone, so a content creator is refused with 403 there. The call is mutating; the state that resulted is read with `GET api/2.0/files/file/{fileId}/formroles`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The form the action applies to. Send the same value as the `formId` of the request body, which is the one the handler reads. | [required] |
| **ManageFormFillingDto** | body | [**ManageFormFillingDto**](../../models/manage-form-filling-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The action was applied to the form | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `formId` | - | - |
| **403** | The form does not exist, is not a PDF or lies outside a room, the caller may not start or stop its filling, or `action` is not one of the known values | - | - |
| **500** | The form has no filling properties yet, as when a filling that was never started is resumed, or the form lies in a third-party storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
