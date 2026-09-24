# aiAttachmentsGet

> AiAttachment aiAttachmentsGet(body)

`POST /api/2.0/ai/attachments/get`

Get one attachment

Returns one attachment by its ID, whether it is still a draft or already bound to a message. The ID is required and has to be a non-empty string. An ID that no longer exists is not reported as 404: the answer is a null body with status 200, so treat a missing payload as no such attachment. Use `POST api/2.0/ai/attachments/get-many` to read several at once.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the attachment to read, as a bare JSON string. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The attachment, or a null body when no attachment has that ID. | [**AiAttachment**](../../models/ai-attachment.md) | - |
| **400** | The attachment ID is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiAttachment**](../../models/ai-attachment.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
