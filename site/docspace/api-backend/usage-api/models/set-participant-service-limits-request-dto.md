# SetParticipantServiceLimitsRequestDto
The personal spending limit on the AI services to set for each of several portal users.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userIds** | **List** (uuid) | The IDs of the portal users the limit is set for, as returned in `id` by the people operations. | [required] [example: `[3f2504e0-4f89-11d3-9a0c-0305e82c3301, 7c9e6679-7425-40de-944b-e07fc1f90ae7]`] |
| **amountValue** | **Double** (double) | The most money the AI services may cost each user per period, in their currency, which cannot be chosen. Zero blocks the AI services completely. | [optional] [example: `40`] [min: 0] [max: 10000] [nullable] |
| **quantityValue** | **Integer** (int32) | The largest quantity the AI services may consume per period for each user, in their common unit. Zero blocks the AI services completely. | [optional] [example: `1000`] [min: 0] [max: 2147483647] [nullable] |
| **period** | [**ServiceLimitPeriod**](service-limit-period.md) | The window the thresholds apply to, in UTC. A day, week or month is calendar-aligned rather than rolling - a daily limit resets at midnight UTC, a weekly one on Monday - while a lifetime limit counts from its creation and never resets. | [optional] [enum: `1`, `2`, `3`, `4`] |
