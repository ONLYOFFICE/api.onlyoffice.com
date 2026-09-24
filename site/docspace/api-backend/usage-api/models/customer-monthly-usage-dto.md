# CustomerMonthlyUsageDto
What the portal spent from its wallet in one calendar month, added up across every service.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **year** | **Integer** (int32) | The year the month belongs to. Months are cut in the portal time zone, so a movement at the edge of a month falls where the portal sees it and not where UTC does. | [optional] [example: `2025`] |
| **month** | **Integer** (int32) | The month itself, January being 1. Only months that had spending appear at all, so a gap in the list is a month with nothing in it rather than missing data. | [optional] [example: `1`] |
| **currency** | **String** | The currency `totalAmount` is expressed in, as a three-letter ISO 4217 code - the accounting currency of the wallet. | [optional] [example: `USD`] [nullable] |
| **totalAmount** | **Double** (double) | What the month came to across every service, as a positive amount spent rather than a signed balance. | [optional] [example: `199.98`] |
| **operationCount** | **Integer** (int32) | How many separate movements that total was added up from, for a client that wants to show the weight behind a figure. The movements themselves are in `GET api/2.0/portal/payment/customer/operations`. | [optional] [example: `3`] |
