# TenantWalletSettings
The tenant wallet settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enabled** | **Boolean** | Specifies whether automatic top-up for the tenant wallet is enabled. | [optional] [example: `true`] |
| **minBalance** | **Integer** (int32) | The minimum wallet balance at which automatic top-up will be triggered. Must be between 5 and 1000. | [optional] [example: `10`] [min: 5] [max: 1000] |
| **upToBalance** | **Integer** (int32) | The maximum wallet balance at which automatic top-up will be triggered. Must be between 6 and 5000. | [optional] [example: `100`] [min: 6] [max: 5000] |
| **currency** | **String** | The three-character ISO 4217 currency symbol. | [optional] [example: `USD`] [nullable] |
| **lowBalanceThreshold** | **Integer** (int32) | The wallet balance below which a low-balance notification is sent. Set internally, not user-configurable. | [optional] [example: `1`] |
| **lowBalanceNotified** | **Boolean** | Specifies whether a low-balance notification has already been sent for the current dip below ASC.Core.Tenants.TenantWalletSettings.LowBalanceThreshold. | [optional] [example: `false`] |
| **lastModified** | **Date** (date-time) | The date and time when the tenant wallet settings were last modified. | [optional] [example: `1990-01-01T00:00:00Z`] |
