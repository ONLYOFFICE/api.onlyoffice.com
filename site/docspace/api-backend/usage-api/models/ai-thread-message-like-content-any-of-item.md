# AiThreadMessageLike.content.anyOf item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **String** | Part kind: `text`, `reasoning`, `source`, `image`, `file`, `audio`, `data` or `tool-call`. | [required] |
| **text** | **String** | The text of a `text` or `reasoning` part. | [optional] |
| **parentId** | **String** | Id of the part this one belongs to, on `text`, `reasoning`, `source` and `tool-call` parts. On a `reasoning` part the chat library keeps the provider's thinking signature here. | [optional] |
| **sourceType** | **String** | A `source` part's source kind; always `url`. | [optional] |
| **id** | **String** | A `source` part's id. | [optional] |
| **url** | **String** | A `source` part's URL. | [optional] |
| **title** | **String** | A `source` part's title. | [optional] |
| **image** | **String** | An `image` part's picture, as a URL (usually a `data:` URL). For an image the user attached, a JSON string `{ ref, title, kind: image }` naming the stored attachment instead. | [optional] |
| **mimeType** | **String** | A `file` part's media type. For a file the user attached, a JSON string `{ ref, title, kind: file, path, type }` naming the stored attachment instead - the chat library carries the reference here. | [optional] |
| **data** | **String** | A `file` part's content; empty when the part references an attachment. (A `data` part would carry its payload here too, as any JSON value; neither the chat library nor this service writes one.) | [optional] |
| **filename** | **String** | The file name of a `file` or `image` part. | [optional] |
| **name** | **String** | An `image` part's display name, or a `data` part's name. | [optional] |
| **audio** | [**AiThreadMessageLike_content_anyOf_inner_audio**](ai-thread-message-like-content-any-of-inner-audio.md) |  | [optional] |
| **toolCallId** | **String** | A `tool-call` part's call id. | [optional] |
| **toolName** | **String** | A `tool-call` part's tool name. | [optional] |
| **args** | **Object** | A `tool-call` part's arguments. | [optional] |
| **argsText** | **String** | A `tool-call` part's arguments as the model streamed them, JSON text. | [optional] |
| **result** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **isError** | **Boolean** | Whether a `tool-call` part's result is an error. | [optional] |
| **artifact** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **interrupt** | [**AiThreadMessageLike_content_anyOf_inner_interrupt**](ai-thread-message-like-content-any-of-inner-interrupt.md) |  | [optional] |
| **messages** | **List** | Messages of a sub-agent run inside a `tool-call` part. | [optional] |
| **metadata** | **Object** | Provider-specific data of a `tool-call` part - for a Gemini call, `{ thoughtSignature }`, which has to be sent back with the call. | [optional] |
