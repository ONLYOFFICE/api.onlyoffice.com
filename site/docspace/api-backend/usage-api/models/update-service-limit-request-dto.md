# UpdateServiceLimitRequestDto
The new thresholds and state of an existing service limit.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits. | [required] [example: `42`] [min: 1] [max: 2147483647] |
| **amountValue** | **Double** (double) | The most money the AI services may cost per period, in their currency. Zero blocks the AI services completely. | [optional] [example: `100`] [min: 0] [max: 10000] [nullable] |
| **quantityValue** | **Integer** (int32) | The largest quantity the AI services may consume per period, in their common unit. Zero blocks the AI services completely. | [optional] [example: `2000`] [min: 0] [max: 2147483647] [nullable] |
| **enabled** | **Boolean** | Whether the limit is in force: false switches it off at once, true switches it back on. | [optional] [example: `true`] [nullable] |
