# AutoCleanUpData
The trash auto-clearing setting of an account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **isAutoCleanUp** | **Boolean** | Whether the trash of the account is cleared automatically. While it is false nothing is removed by the portal and the interval below is kept but unused. | [optional] [example: `false`] |
| **gap** | [**DateToAutoCleanUp**](date-to-auto-clean-up.md) | How long an item may stay in the trash before it is removed for good. It is reported even while clearing is off, and it is what the moment in the `autoDelete` field of a trashed entry is computed from. | [optional] [enum: `1`, `2`, `3`, `4`, `5`, `6`] |
