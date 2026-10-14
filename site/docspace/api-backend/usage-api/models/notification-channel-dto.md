# NotificationChannelDto
One delivery channel of the installation, with the state it is in for this portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The internal name of the channel as the notification service knows it - `email.sender` for letters, `telegram.sender` for Telegram messages. It is a key to match on, not a label to print. | [required] [example: `email.sender`] [nullable] |
| **isEnabled** | **Boolean** | Whether the channel can deliver for this portal. Letters are enabled whenever the channel is listed at all, while Telegram is enabled only while the portal has a bot name and token stored. It says nothing about the caller, who also has to connect their own Telegram account through `GET api/2.0/settings/telegram/link`. | [required] [example: `true`] |
