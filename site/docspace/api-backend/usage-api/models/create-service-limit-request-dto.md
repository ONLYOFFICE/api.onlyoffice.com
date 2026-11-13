# CreateServiceLimitRequestDto
The spending limit to create on the AI services: for the portal as a whole, for every user, or for one user.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **scope** | [**ServiceLimitScope**](service-limit-scope.md) | Whom the limit applies to. | [required] [enum: `1`, `2`, `3`] |
| **userId** | **UUID** (uuid) | The ID of the portal user a personal limit is set for, as returned in `id` by the people operations. | [optional] [example: `3f2504e0-4f89-11d3-9a0c-0305e82c3301`] [nullable] |
| **amountValue** | **Double** (double) | The most money the AI services may cost per period, in their currency, which cannot be chosen. Zero blocks the AI services completely. | [optional] [example: `50`] [min: 0] [max: 10000] [nullable] |
| **quantityValue** | **Integer** (int32) | The largest quantity the AI services may consume per period, in their common unit. Zero blocks the AI services completely. | [optional] [example: `1000`] [min: 0] [max: 2147483647] [nullable] |
| **period** | [**ServiceLimitPeriod**](service-limit-period.md) | The window the thresholds apply to, in UTC. A day, week or month is calendar-aligned rather than rolling - a daily limit resets at midnight UTC, a weekly one on Monday - while a lifetime limit counts from its creation and never resets. | [optional] [enum: `1`, `2`, `3`, `4`] |
