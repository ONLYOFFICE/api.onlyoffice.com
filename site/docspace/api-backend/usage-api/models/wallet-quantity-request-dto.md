# WalletQuantityRequestDto
The wallet service being bought or scheduled, and the way its quantity is applied.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **quantity** | **Map** (int32) | The wallet service and the number of units of it, as a single pair. The key is the `serviceName` of a service from `GET api/2.0/portal/payment/walletservices`, and the value is read according to `productQuantityType`: the units to add, or the total the service is to have in the next period. Minimum quantities apply per service - disk storage starts at 100 units, the Docs Connect Dev Pack at 10, and the administrators may not be fewer than the portal already has. Exactly one pair is accepted, and a null or zero value cancels a change scheduled earlier rather than buying nothing. | [required] [example: `{admin=1}`] |
| **productQuantityType** | [**ProductQuantityType**](product-quantity-type.md) | How the number in `quantity` is applied. `Add` buys the units straight away and charges them to the portal wallet, while `Set` charges nothing now and records the quantity the service is to have from the next period. Only these two are accepted here; `Sub` and `Renew` are refused with 400. | [optional] [enum: `0`, `1`, `2`, `3`] |
