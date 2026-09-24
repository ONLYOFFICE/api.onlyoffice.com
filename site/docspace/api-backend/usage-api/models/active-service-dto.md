# ActiveServiceDto
One wallet service the portal is running right now, with the allowance it grants where that is counted.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **service** | **String** | The stable key of the service, which is what `POST api/2.0/portal/payment/servicestate` takes to switch it off again. | [optional] [example: `disk-storage`] [nullable] |
| **serviceUnit** | **String** | What `limit` and `used` count, in the portal language - gigabytes, editor seats, credits. | [optional] [example: `GB`] [nullable] |
| **subscription** | **Boolean** | Whether the service is billed as a standing subscription rather than per unit consumed. Only a subscription can carry `limit` and `used`. | [optional] [example: `true`] |
| **title** | **String** | The service name in the portal language, for printing rather than matching. | [optional] [example: `Additional disk storage`] [nullable] |
| **limit** | **Integer** (int32) | How much of the service the portal is entitled to. It is empty for a service whose consumption is not counted this way, which is not the same as a service without a limit. | [optional] [example: `500`] [nullable] |
| **used** | **Integer** (int32) | How much of that allowance is in use - the editors currently active for the cloud editors, the units already consumed for disk storage. Empty under the same conditions as `limit`. | [optional] [example: `320`] [nullable] |
