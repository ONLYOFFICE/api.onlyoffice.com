# WebhookConfigInfo
The subscription, plus its delivery state at send time.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The subscription ID. | [optional] [example: `1`] |
| **name** | **String** | The subscription name given by its creator. | [optional] [example: `Room activity`] |
| **url** | **String** | The URL the delivery is posted to. | [optional] [example: `https://example.com/hooks/docspace`] |
| **triggers** | **List** | The subscribed events, or [\"*\"] for the catch-all. | [optional] [example: `[file.created, file.updated]`] |
| **target** | [**WebhookTargetInfo**](webhook-target-info.md) |  | [optional] |
| **lastFailureOn** | **Date** (date-time) | When the last delivery to this subscription failed, in UTC. Sent only on an automatic retry, together with `retryCount`; absent on a first attempt, the first attempt of a manual retry included. | [optional] [example: `2024-01-15T10:29:00Z`] |
| **lastFailureContent** | **String** | What the receiver answered, or the network error, when the last delivery to this subscription failed. Sent only on an automatic retry, like `lastFailureOn`. | [optional] [example: `502 Bad Gateway`] |
| **lastSuccessOn** | **Date** (date-time) | When the last delivery to this subscription succeeded, in UTC. Sent only on an automatic retry, like `lastFailureOn`; absent there too when no delivery has succeeded yet. | [optional] [example: `2024-01-15T09:12:00Z`] |
| **retryCount** | **Integer** (int32) | How many times this delivery has been retried automatically. Omitted on the first attempt (0); present from attempt 2. A manual retry is a new delivery and starts again from 0, so its first attempt carries no `retryCount`, `lastFailureOn` or `lastSuccessOn`; only the repeated `event.id` shows that the event was sent before. | [optional] [example: `2`] |
| **retryOn** | **Date** (date-time) | When this retry was sent, in UTC, cut to whole seconds. Sent only on an automatic retry, like `lastFailureOn`. | [optional] [example: `2024-01-15T10:31:00Z`] |
