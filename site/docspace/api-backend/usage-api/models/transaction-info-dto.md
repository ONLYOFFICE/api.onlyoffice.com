# TransactionInfoDto
Represents information about the transaction applied to an account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **date** | **Date** (date-time) | The date and time when the credit transaction occurred. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **currency** | **String** | The three-character ISO 4217 currency symbol. | [optional] [example: `"USD"`] [nullable] |
| **amount** | **Double** (double) | The amount in the specified currency. | [optional] [example: `1500.75`] |
