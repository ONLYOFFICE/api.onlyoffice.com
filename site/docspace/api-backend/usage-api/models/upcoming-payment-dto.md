# UpcomingPaymentDto
One charge the portal is going to be billed for at the start of the next period.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The quota that is going to be charged. When a switch to another quota is scheduled, this is the quota being switched to, so it can differ from what `GET api/2.0/portal/tariff` reports for today. | [optional] [example: `-11`] |
| **name** | **String** | The quota's stable key, which is the same identifier the wallet operations use for a service. | [optional] [example: `storage`] [nullable] |
| **title** | **String** | The quota name in the portal language, meant to be printed on an invoice preview. | [optional] [example: `Business plan`] [nullable] |
| **unitOfMeasure** | **String** | What `quantity` counts, in the portal language - seats, administrators, gigabytes. It is empty for a quota that is simply on or off. | [optional] [example: `admins`] [nullable] |
| **quantity** | **Integer** (int32) | How much is going to be charged for, which is the quantity scheduled for the next period when one has been scheduled and today's quantity otherwise. | [optional] [example: `100`] |
| **wallet** | **Boolean** | Whether the charge is paid out of the portal wallet rather than from the subscription. | [optional] [example: `true`] |
| **dueDate** | [**ApiDateTime**](api-date-time.md) | When the charge falls due, in the portal time zone. | [optional] |
| **amount** | **Double** (double) | What the charge comes to: the unit price of the quota multiplied by `quantity`. Taxes are not part of it, and a quota with no price of its own is not listed at all rather than listed with a zero. | [optional] [example: `14`] |
| **currency** | **String** | The currency `amount` is expressed in, as a three-letter ISO 4217 code. It follows the portal's billing account, so every entry of one answer carries the same code. | [optional] [example: `USD`] [nullable] |
