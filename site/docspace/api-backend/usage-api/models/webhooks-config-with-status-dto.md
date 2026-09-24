# WebhooksConfigWithStatusDto
A webhook subscription together with how its last delivery ended.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **configs** | [**WebhooksConfigDto**](webhooks-config-dto.md) | The subscription itself. Despite the plural name it is one subscription, not a list. | [optional] |
| **status** | **Integer** (int32) | The HTTP status code the target answered on the last attempt. `0` means nothing has been delivered yet, which is not the same as a failure. | [optional] [example: `200`] |
