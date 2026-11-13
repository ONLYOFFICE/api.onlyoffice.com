# WebhookEnvelope
The body of every delivery. `payload` is narrowed by `event.trigger` per x-docspace-trigger-payloads.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **event** | [**WebhookEventInfo**](webhook-event-info.md) |  | [optional] |
| **payload** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **webhook** | [**WebhookConfigInfo**](webhook-config-info.md) |  | [optional] |
