# AiOpenAIFinishReason
OpenAI Chat Completions streaming shapes.   `toOpenAIChatCompletionStream` maps the engine's transport-agnostic `ChatEvent` stream onto these chunks so a host can expose an OpenAI-compatible `POST /v1/chat/completions` (`stream: true`) endpoint backed by the same chat pipeline as the in-app widget. Only the subset of fields the engine can populate is emitted; everything else an OpenAI client tolerates as absent.

Possible values:

- `stop`
- `length`
- `tool_calls`
- `content_filter`
- `null`
