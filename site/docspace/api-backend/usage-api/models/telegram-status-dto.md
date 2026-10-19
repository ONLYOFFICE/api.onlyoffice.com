# TelegramStatusDto
Whether the calling user's account is linked to the portal's Telegram bot.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **status** | [**RegStatus**](reg-status.md) | Where the caller's own account stands: not linked, linked, or a registration link issued and the portal still waiting for it to be opened in Telegram. The waiting state ends on its own when the link expires, so it is worth polling rather than treating as final. | [required] [enum: `0`, `1`, `2`] |
| **username** | **String** | The Telegram handle the account is linked to, without the leading `@`. It is filled in only while the account is linked and comes back empty in the other two states. | [optional] [example: `john_doe`] [nullable] |
