# DocsCloudPayment
Represents the payment information of a Docs Connect tenant.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **cartId** | **String** | The cart ID. | [optional] [example: `CartId`] [nullable] |
| **productId** | **Integer** (int32) | The product ID. | [optional] [example: `12345`] |
| **status** | **Integer** (int32) | The payment status. | [optional] [example: `1`] |
| **intervalUnit** | **Integer** (int32) | The interval unit. | [optional] [example: `1`] |
| **isYear** | **Boolean** | Whether the payment interval is yearly. | [optional] [example: `false`] |
| **isPrepaid** | **Boolean** | Whether the payment is prepaid. | [optional] [example: `false`] |
| **quantity** | **Integer** (int32) | The quantity. | [optional] [example: `10`] |
| **currency** | **String** | The three-character ISO 4217 currency symbol of the payment. | [optional] [example: `USD`] [nullable] |
