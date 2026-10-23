# aiWebSearchPassthroughContents

> Map aiWebSearchPassthroughContents(AiWebSearchPassthroughContentsRequest)

`POST /api/2.0/ai/websearch/v1/contents`

Web page contents passthrough

Fetches the contents of web pages on behalf of the document editor's AI plugin, against the portal's active web-search provider, exactly as the search passthrough does — including the `entityId` / `entityKind` billing attribution. The portal-wide configuration is used and a portal without one answers 404. `urls` has to be a non-empty array of strings, or the call answers 400 naming the field. The provider's 4xx status, body and content type are relayed, so its 429 surfaces unchanged, while a 5xx is replaced by a fixed 502 with the detail kept in the server log. This is the follow-up to `POST api/2.0/ai/websearch/v1/search`, which returns the results whose contents this operation retrieves.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiWebSearchPassthroughContentsRequest** | body | **Map** | A page-contents request in the shape the portal's active web-search provider expects, forwarded to it once `urls` passes a type check. The endpoint and the key come from the stored configuration. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed verbatim with its status and content type. | **Map** | - |
| **400** | `urls` is missing or not a non-empty array of strings; `field` names the input. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | Web search is not configured for this portal. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **502** | The provider, or the hop in front of it, failed or answered a 5xx; the detail is in the server log. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

**Map**

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
