# ServiceLimitDto
A spending limit on the AI services: for the portal as a whole, for every user, or for one user.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The service limit ID, used to read, change, switch off or delete the limit. In the list of the users the same ID repeats for every user the limit for every user applies to. | [optional] [example: `42`] |
| **serviceGroupName** | **String** | The limited service group; the AI services are `ai-services`. | [optional] [example: `ai-services`] [nullable] |
| **customerAccountNumber** | **Integer** (int32) | The number of the billing account of the portal the limit belongs to. | [optional] [example: `12345`] |
| **scope** | [**ServiceLimitScope**](service-limit-scope.md) | Whom the limit applies to. | [optional] [enum: `1`, `2`, `3`] |
| **userId** | **UUID** (uuid) | The ID of the portal user the limit applies to: the user of a personal limit, or, in the list of the users, the user a limit for every user applies to. Null for a limit of the portal as a whole, and for a limit for every user read on its own. | [optional] [example: `3f2504e0-4f89-11d3-9a0c-0305e82c3301`] [nullable] |
| **amountValue** | **Double** (double) | The most money the AI services may cost per period, in `currency`; null when the limit has no money threshold. | [optional] [example: `50`] [nullable] |
| **currency** | **String** | The currency `amountValue` is expressed in; null when the limit has no money threshold. | [optional] [example: `USD`] [nullable] |
| **quantityValue** | **Integer** (int32) | The largest quantity the AI services may consume per period, in `serviceUnit`; null when the limit has no quantity threshold. | [optional] [example: `1000`] [nullable] |
| **serviceUnit** | **String** | The unit `quantityValue` is expressed in; null when the limit has no quantity threshold. | [optional] [example: `request`] [nullable] |
| **period** | [**ServiceLimitPeriod**](service-limit-period.md) | The window the thresholds apply to. A day, week or month resets at the start of the next one in UTC (a week on Monday), not a fixed time after the first charge; a lifetime limit never resets. | [optional] [enum: `1`, `2`, `3`, `4`] |
| **periodEnd** | **Date** (date-time) | The last moment of the current period, in UTC, after which the spending starts over from zero; null for a lifetime limit, which never resets. Filled for every limit, the limit for every user included, whose spending is counted per user. | [optional] [example: `2026-10-22T23:59:59.9999999Z`] [nullable] |
| **usageFrom** | **Date** (date-time) | The moment a lifetime limit counts from, in UTC; null for the other periods. | [optional] [example: `2026-10-01T09:12:00Z`] [nullable] |
| **enabled** | **Boolean** | Whether the limit is in force. A switched-off limit no longer restricts the AI services and can be switched back on. | [optional] [example: `true`] |
| **created** | **Date** (date-time) | The date and time when the limit was created, in UTC. | [optional] [example: `2026-09-01T10:30:00Z`] |
| **modified** | **Date** (date-time) | The date and time when the limit was last changed, in UTC. | [optional] [example: `2026-09-15T08:00:00Z`] |
| **usage** | [**ServiceLimitUsageDto**](service-limit-usage-dto.md) | What was spent against the limit in its current period and what is left. Filled for the limit of the portal as a whole and in the list of the users; null where the spending is not read, such as for a limit read by its ID or the limit for every user, whose spending is counted per user. | [optional] |
