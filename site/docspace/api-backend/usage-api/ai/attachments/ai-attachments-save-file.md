# aiAttachmentsSaveFile

> AiAttachment aiAttachmentsSaveFile(aiAttachmentsSaveFile\_request)

`POST /api/2.0/ai/attachments/save-file`

Save file

Stores one file attachment as a draft and returns it, so its ID can be attached to a message later. `input` carries the host `path` - the DocSpace entry ID the AI backend resolves server-side - the text `content` already extracted from that file, the ONLYOFFICE numeric file `type`, and optionally a `title`; the text is what the model reads, so this operation does not open the file itself. Archives are refused outright, whatever their declared name says. Drafts are not bound to a conversation until `POST api/2.0/ai/attachments/link-to-message` is called, so an unlinked draft outlives the round that created it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveFile\_request** | body | [**aiAttachmentsSaveFile_request**](../../models/ai-attachments-save-file-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored draft, whose ID links it to a message later. | [**AiAttachment**](../../models/ai-attachment.md) | - |
| **400** | The attachment payload is malformed. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
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
