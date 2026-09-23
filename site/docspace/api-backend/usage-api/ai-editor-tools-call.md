# aiEditorToolsCall

Referenced types are defined in the [full reference](../aichat.md).

> aiEditorToolsCall_200_response aiEditorToolsCall(aiEditorToolsCall\_request)

`POST /api/2.0/ai/editor-tools/call`

Call an editor tool

Executes one DocSpace tool on behalf of the document editor's AI plugin, server-side and under the caller's own credentials, so the browser never holds the transport. `name` has to be one of the tools `GET api/2.0/ai/editor-tools/list` reports; anything else, including a tool the editor is not allowed to reach, is refused. The result is always returned as a string - a structured result is serialised - because the plugin relays it to the model verbatim. A tool that fails does so inside that string as an error payload rather than as an HTTP status, so check the content before trusting it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiEditorToolsCall\_request** | body | [**aiEditorToolsCall_request**](../aichat.md#model-aieditortoolscall-request-body) | The tool to run: `name` from `GET api/2.0/ai/editor-tools/list`, `arguments` matching that tool's input schema, and an optional `entityId` for the room to run it in. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tool's output as a string. A tool that failed reports it inside that string. | [**aiEditorToolsCall_200_response**](../aichat.md#model-aieditortoolscall-200-response) | - |
| **400** | The tool name is not one this portal exposes. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**aiEditorToolsCall_200_response**](../aichat.md#model-aieditortoolscall-200-response)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
