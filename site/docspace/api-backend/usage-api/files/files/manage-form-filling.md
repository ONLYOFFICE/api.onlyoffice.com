# manageFormFilling

> manageFormFilling(fileId, ManageFormFillingDto)

`PUT /api/2.0/files/file/{fileId}/manageformfilling`

Perform form filling action

Changes the filling state of a PDF form as `action` sets. In a form-filling room, `Start` (2) opens the form for filling to members who may only fill forms. If the form version differs from the one that `Edit` remembered, `Start` also deletes the drafts of the previous round. The action `Stop` (0) stops the filling. In a virtual data room, it records who stopped it and at which role. It also notifies the users of the other roles. In a form-filling room, `Stop` closes the form for filling. The action `Resume` (1) continues a stopped filling and clears that record. The action `Edit` (3) returns the form to editing, closes it for filling, and remembers the version. The call reads the form id only from `formId` in the body. Send the same value in the route. The form must be a PDF in a room. The action `Start` requires the right to start the filling, which a room manager and a content creator have. Other callers get 403. Only a room manager can stop a filling that another user started. A content creator gets 403 there. In a form-filling room, `Edit` requires editing access to the form. The call changes data. You can repeat `Resume` and `Edit` with the same body. A repeated `Stop` returns 403 in a virtual data room and changes nothing in a form-filling room. Do not repeat `Start` in a form-filling room. A repeat can delete the drafts that users started after the first call. If the body has no `formId`, the call returns 400. If `action` is not a known value, the call returns 403. To read the resulting state, use `GET api/2.0/files/file/{fileId}/formroles`.  Raises the `form.stopped` webhook for every `Stop`, even a repeated one, and for `Edit` that ends a started filling.

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
| **403** | The form does not exist, is not a PDF or lies outside a room, the caller may not start or stop its filling or, in a form-filling room, put it back into editing, or `action` is not one of the known values | - | - |
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
