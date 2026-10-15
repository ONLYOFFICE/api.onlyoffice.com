# TenantWalletSettingsDto
The automatic wallet top-up settings of the portal, together with the low-balance warning state the portal keeps for them.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enabled** | **Boolean** | Whether the payment method on file is charged automatically when the wallet balance runs low. | [optional] [example: `true`] |
| **minBalance** | **Integer** (int32) | The balance below which a top-up is charged, in `currency`; 0 while top-up has never been configured. | [optional] [example: `10`] |
| **upToBalance** | **Integer** (int32) | The balance a top-up brings the wallet up to, in `currency`; 0 while top-up has never been configured. | [optional] [example: `100`] |
| **currency** | **String** | The three-letter ISO 4217 code both amounts are expressed in, or `null` while top-up has never been configured. | [optional] [example: `USD`] [nullable] |
| **lowBalanceThreshold** | **Integer** (int32) | The wallet balance below which the portal sends its low-balance warning. The portal maintains it; it cannot be set by a request. | [optional] [example: `1`] |
| **lowBalanceNotified** | **Boolean** | Whether the low-balance warning has already been sent for the current dip below `lowBalanceThreshold`. The portal maintains it, and switching top-up on re-arms it. | [optional] [example: `false`] |
| **lastModified** | **Date** (date-time) | When the settings were last stored; when they were never stored, the moment they were read instead. | [optional] [example: `2026-01-01T00:00:00Z`] |
