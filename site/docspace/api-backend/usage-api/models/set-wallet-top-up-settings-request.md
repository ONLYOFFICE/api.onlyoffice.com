# SetWalletTopUpSettingsRequest
The part of the automatic top-up settings a payer chooses. The low-balance warning state is kept by the portal itself and cannot be set here.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enabled** | **Boolean** | Whether the payment method on file is charged automatically when the wallet balance runs low. | [optional] [example: `true`] |
| **minBalance** | **Integer** (int32) | The balance below which a top-up is charged, in `currency`. | [optional] [example: `10`] [min: 5] [max: 1000] |
| **upToBalance** | **Integer** (int32) | The balance a top-up brings the wallet up to, in `currency`. | [optional] [example: `100`] [min: 6] [max: 5000] |
| **currency** | **String** | The three-letter ISO 4217 code both amounts are expressed in; it has to be the currency of the wallet. | [optional] [example: `USD`] [nullable] |
| **lowBalanceThreshold** | **Integer** (int32) | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `10`] |
| **lowBalanceNotified** | **Boolean** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `false`] |
| **lastModified** | **Date** (date-time) | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `2026-01-01T10:00:00`] |
