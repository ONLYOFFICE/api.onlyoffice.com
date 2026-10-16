# NotificationChannelStatusDto
The ways this installation can deliver a notification, and whether each of them is usable.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **channels** | [**List**](notification-channel-dto.md) | The channels the running installation is configured with. A channel appears only when the notification service names a sender for it, so the list can be shorter than the channels this build implements, and an empty list means the configuration names none of them. | [optional] [example: `[{name=email.sender, isEnabled=true}]`] [nullable] |
