# CustomerServiceUsageDto
What one wallet service was consumed and cost over the requested period, added up rather than listed.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **service** | **String** | The stable key of the service, which is what the `serviceName` filter of this operation matches on and what `GET api/2.0/portal/payment/walletservice` looks a service up by. | [optional] [example: `disk-storage`] [nullable] |
| **title** | **String** | The service name in the portal language, for printing rather than matching. | [optional] [example: `Additional disk storage`] [nullable] |
| **serviceUnit** | **String** | What `totalQuantity` counts, in the portal language. AI consumption is reported in tokens here rather than in the AI credits the service is sold in, so it does not line up with the price list. | [optional] [example: `GB`] [nullable] |
| **currency** | **String** | The currency `totalAmount` and `price` are expressed in, as a three-letter ISO 4217 code. | [optional] [example: `USD`] [nullable] |
| **totalQuantity** | **Integer** (int32) | How many units of the service were consumed over the period, in the unit named by `serviceUnit`. | [optional] [example: `100`] |
| **totalAmount** | **Double** (double) | What that consumption cost over the period. It is what was actually charged, so it can differ from `price` times `totalQuantity` when the price changed inside the period. | [optional] [example: `49.99`] |
| **operationCount** | **Integer** (int32) | How many separate charges the total was added up from. The charges themselves are in `GET api/2.0/portal/payment/customer/operations`. | [optional] [example: `2`] |
| **price** | **Double** (double) | What one unit of the service costs today, not what it cost during the period. It is `0` when the service is no longer on the installation's price list. | [optional] [example: `0.14`] |
| **subscription** | **Boolean** | Whether the service is billed as a standing subscription rather than per unit consumed. It is derived from today's price list, so it describes the service as it is sold now. | [optional] [example: `true`] |
