# aiAttachmentsDelete

> AiSuccessResponse aiAttachmentsDelete(AiAttachmentsDeleteRequest)

`DELETE /api/2.0/ai/attachments/delete`

Delete one attachment

Permanently deletes one attachment, whether it is still a draft or already bound to a message. The ID is not validated here, so a malformed one surfaces as an error relayed from storage rather than as a 400, and an ID that does not exist answers success without deleting anything. Deleting a bound attachment leaves the message in place without it. The deletion cannot be undone.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiAttachmentsDeleteRequest** | body | **String** | The ID of the attachment to delete, as a bare JSON string. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted, whether or not anything was deleted. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiSuccessResponse**](../../models/ai-success-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
