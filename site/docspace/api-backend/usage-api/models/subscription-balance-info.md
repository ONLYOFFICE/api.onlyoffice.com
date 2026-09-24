# SubscriptionBalanceInfo
The information about the current subscription and its unused balance.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **totalCost** | **Double** (double) | The total cost of the current billing period (the sum across all subscription items). | [optional] [example: `120.0`] |
| **currency** | **String** | The three-character ISO 4217 currency symbol of the subscription. | [optional] [example: `USD`] [nullable] |
| **periodStart** | **Date** (date-time) | The start of the current billing period. | [optional] [example: `2026-06-01T00:00:00Z`] |
| **periodEnd** | **Date** (date-time) | The end of the current billing period. | [optional] [example: `2026-07-01T00:00:00Z`] |
| **periodUsedUntil** | **Date** (date-time) | The boundary of the used part of the period (the moment of the request). | [optional] [example: `2026-06-23T14:35:00Z`] |
| **daysElapsed** | **Integer** (int32) | The number of days elapsed since the start of the period (inclusive). | [optional] [example: `23`] |
| **remainingBalance** | **Double** (double) | The unused balance of the subscription, in the subscription currency. | [optional] [example: `87.74`] |
| **remainingBalanceInWalletCurrency** | **Double** (double) | The unused balance of the subscription, converted to the wallet currency. | [optional] [example: `87.74`] |
| **walletCurrency** | **String** | The three-character ISO 4217 currency symbol of the wallet. | [optional] [example: `USD`] [nullable] |
