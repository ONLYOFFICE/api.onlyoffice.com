# LoginSettingsRequestDto
The brute-force protection of the sign-in form: how many failures, over how long, cost how long a block.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **attemptCount** | **Integer** (int32) | How many failed sign-in attempts inside one window are tolerated before the offender is blocked. Attempts are counted per user name and client address together, so one member being blocked leaves the rest of the portal signing in normally. | [optional] [example: `1`] [min: 1] [max: 9999] |
| **blockTime** | **Integer** (int32) | How long, in seconds, a blocked user name and address pair stays refused. While the block lasts the sign-in is refused even when the password is finally correct. | [optional] [example: `1`] [min: 1] [max: 9999] |
| **checkPeriod** | **Integer** (int32) | The length, in seconds, of the rolling window the failed attempts are counted over. A wider window makes the same `attemptCount` stricter, because failures further apart still add up. | [optional] [example: `1`] [min: 1] [max: 9999] |
