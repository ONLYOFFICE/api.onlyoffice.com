# ServiceLimitUsageDto
What has been spent against a spending limit in its current period, and what is left.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **periodStart** | **Date** (date-time) | The start of the current period, in UTC. | [optional] [example: `2026-10-18T00:00:00Z`] |
| **periodEnd** | **Date** (date-time) | The end of the current period, in UTC: the moment the spending starts again from zero. Null for a lifetime limit, which never resets. | [optional] [example: `2026-10-18T23:59:59Z`] [nullable] |
| **amountConsumed** | **Double** (double) | The money charged in the current period, in the currency of the limit. | [optional] [example: `12.5`] |
| **amountAvailable** | **Double** (double) | The money still available in the current period: the threshold less what was charged and what is reserved for operations in progress, never below zero. Null when the limit has no money threshold. | [optional] [example: `27.5`] [nullable] |
| **quantityConsumed** | **Integer** (int32) | The quantity consumed in the current period, in the unit of the limit. | [optional] [example: `250`] |
| **quantityAvailable** | **Integer** (int32) | The quantity still available in the current period, never below zero; null when the limit has no quantity threshold. | [optional] [example: `750`] [nullable] |
