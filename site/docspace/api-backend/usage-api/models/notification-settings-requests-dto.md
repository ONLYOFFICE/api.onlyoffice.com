# NotificationSettingsRequestsDto
Which kind of notification the calling user switches, and which way.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | [**NotificationType**](notification-type.md) | The kind of notification being switched. A value outside the defined set is echoed back while nothing is stored, so confirm the result with `GET api/2.0/settings/notification/{type}` rather than trusting the answer. | [required] [enum: `0`, `1`, `2`, `3`] |
| **isEnabled** | **Boolean** | Whether that kind reaches the calling account. It applies to the caller own account alone and to every room at once; a single room is silenced with `POST api/2.0/settings/notification/rooms` instead. | [optional] [example: `true`] |
