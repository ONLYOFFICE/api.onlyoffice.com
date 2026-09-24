# PaymentCalculation
The parameters of the calculated payment amount.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **operationId** | **Long** (int64) | The operation unique identifier. | [optional] [example: `123456789`] |
| **amount** | **Double** (double) | The calculated payment amount. | [optional] [example: `10.0`] |
| **currency** | **String** | The three-character ISO 4217 currency symbol used for the payment calculation. | [optional] [example: `USD`] [nullable] |
| **quantity** | **Integer** (int32) | The quantity associated with the payment calculation. | [optional] [example: `1`] |
