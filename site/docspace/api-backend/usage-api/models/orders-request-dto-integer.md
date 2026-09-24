# OrdersRequestDtoInteger
The request that moves several files and folders to given positions.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **items** | [**List**](orders-item-request-dto-integer.md) | The entries to move, applied one after another in the order they are sent, so each of them shifts the neighbours the ones before it left behind. | [required] [example: `[{entryId=1, entryType=2, order=1}, {entryId=4, entryType=1, order=2}]`] [nullable] |
