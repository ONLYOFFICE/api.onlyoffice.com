# ServicePriceInfo
Represents a price of the service.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The price unique identifier. | [optional] [example: `12345`] |
| **accountNumber** | **Integer** (int32) | The account number. | [optional] [example: `1010`] |
| **serviceId** | **Integer** (int32) | The service ID. | [optional] [example: `12345`] |
| **timeUnit** | [**PriceTimeUnit**](price-time-unit.md) | The time unit the price is bound to. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`] |
| **costPrice** | **Double** (double) | The cost price. | [optional] [example: `1500.75`] |
| **extraCharge** | **Double** (double) | The extra charge added to the cost price. | [optional] [example: `1500.75`] |
| **servicePrice** | **Double** (double) | The resulting service price. | [optional] [example: `1500.75`] |
| **quota** | **Double** (double) | The quota the price is set for. | [optional] [example: `100`] [nullable] |
| **timeBound** | [**TimeBound**](time-bound.md) | The period the price is effective in. | [optional] |
| **status** | [**PriceStatus**](price-status.md) | The price status. | [optional] [enum: `0`, `1`, `2`] |
| **created** | **Date** (date-time) | The date and time when the price was created. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **discountCategoryId** | **Integer** (int32) | The discount category ID. | [optional] [example: `12345`] [nullable] |
| **discountCategory** | [**DiscountCategory**](discount-category.md) | The discount category. | [optional] |
