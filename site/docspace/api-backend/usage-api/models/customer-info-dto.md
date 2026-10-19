# CustomerInfoDto
The billing customer behind the portal, and which portal member pays for it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **portalId** | **String** | The portal's identifier in the billing system, which is what support and invoices refer to. It is not the portal alias. | [optional] [example: `portal-001`] [nullable] |
| **paymentMethodStatus** | [**PaymentMethodStatus**](payment-method-status.md) | Whether a payment method is stored for the account and usable. Without one the portal can hold a wallet balance but cannot be charged automatically. | [optional] [enum: `0`, `1`, `2`] |
| **paymentMethodType** | **String** | The customer's payment method type. | [optional] [example: `card`] [nullable] |
| **isDelayedPaymentMethod** | **Boolean** | Indicates whether the customer's payment method is delayed, i.e. the money reaches the wallet only after the transfer settles rather than immediately. | [optional] [example: `false`] |
| **email** | **String** | The address the billing account is registered to, lower-cased. It need not belong to a portal member, which is exactly when `payer` stays empty. | [optional] [example: `user@example.com`] [nullable] |
| **payer** | [**EmployeeDto**](employee-dto.md) | The portal member whose account is behind the billing address. It is empty when `email` matches no member of this portal, and while it is empty every operation of this group that only the payer may call is out of reach for everybody. | [optional] |
