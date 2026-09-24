# QuantityRequestDto
The new size of the portal subscription.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **quantity** | **Map** (int32) | The plan and the number of units it is to cover, as a single pair. While the portal is on a priced plan the key has to be the `name` of that same plan, which `GET api/2.0/portal/payment/quota` reports, because the subscription is resized rather than swapped; the value is the total the subscription is to have afterwards, not the difference. Exactly one pair is accepted, and a value that is already in effect is refused with 400. | [required] [example: `{admin=1}`] |
