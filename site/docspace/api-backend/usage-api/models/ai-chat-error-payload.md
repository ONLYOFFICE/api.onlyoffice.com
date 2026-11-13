# AiChatErrorPayload
Why a round failed or stopped early, as the message status and the stream report it: a stable `code`, a message safe to show the user, and the cause when there is one.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **code** | **String** | Stable machine-readable code. One of a canonical set — `auth`, `model_not_found`, `rate_limit`, `timeout`, `network`, `bad_request`, `server`, `not_found`, `insufficient_funds`, `aborted`, `unknown` — or a provider-specific string when the SDK supplies one verbatim. | [required] [example: `rate_limit`] |
| **message** | **String** | Human-readable, end-user-safe message. | [required] [example: `The provider is rate limiting requests.`] |
| **cause** | [**AiChatErrorPayload**](ai-chat-error-payload.md) | Optional nested cause, normalized through the same helper. | [optional] |
