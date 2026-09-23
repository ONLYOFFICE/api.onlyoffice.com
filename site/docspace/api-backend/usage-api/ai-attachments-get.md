# aiAttachmentsGet

Referenced types are defined in the [full reference](../aichat.md).

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
| **200** | The attachment, or a null body when no attachment has that ID. | [**AiAttachment**](../aichat.md#model-aiattachment) | - |
| **400** | The attachment ID is missing. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**AiAttachment**](../aichat.md#model-aiattachment)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
