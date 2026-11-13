# WebhookRetryRequestDto
Which past webhook deliveries are sent again.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **ids** | **List** (int32) | The delivery records to send again, by the `id` values `GET api/2.0/settings/webhooks/log` reports. The bound is per call: a longer batch has to be split into several calls. | [optional] [example: `[1, 2, 3]`] [nullable] |
