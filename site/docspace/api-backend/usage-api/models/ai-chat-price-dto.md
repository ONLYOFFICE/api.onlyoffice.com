# AiChatPriceDto
What a chat model charges, split by the direction the tokens flow in.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **prompt** | **Double** (double) | The cost of one million tokens sent to the model, which includes the conversation history resent with every turn and not just the newest message. | [optional] [example: `5.0`] |
| **completion** | **Double** (double) | The cost of one million tokens the model writes back. It is normally the dearer of the two directions. | [optional] [example: `15.0`] |
| **promptCacheRead** | **Double** (double) | The cost of one million prompt tokens served from the prompt cache. It is absent when the model does not support prompt caching. | [optional] [example: `0.2`] [nullable] |
| **promptCacheWrite** | **Double** (double) | The cost of one million prompt tokens written to the prompt cache with the default lifetime. It is absent when the model does not support prompt caching. | [optional] [example: `2.5`] [nullable] |
| **promptCacheWrite1H** | **Double** (double) | The cost of one million prompt tokens written to the prompt cache with a one-hour lifetime. It is absent when the model offers no such option. | [optional] [example: `4.0`] [nullable] |
