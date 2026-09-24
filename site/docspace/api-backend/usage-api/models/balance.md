# Balance
Represents a balance with an account number and a list of sub-accounts.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **accountNumber** | **Integer** (int32) | The account number. | [optional] [example: `12345`] |
| **subAccountNumber** | **Integer** (int32) | The sub-account number. | [optional] [example: `12345`] |
| **accountName** | **String** | The account name. | [optional] [example: `account name`] [nullable] |
| **accountCurrency** | **String** | The account currency. | [optional] [example: `"USD"`] [nullable] |
| **subAccounts** | [**List**](sub-account.md) | A list of sub-accounts. | [optional] [example: `[{currency=USD, amount=1500.75}]`] [nullable] |
| **lastCredit** | [**TransactionInfo**](transaction-info.md) | The most recent credit transaction applied to the account. | [optional] |
