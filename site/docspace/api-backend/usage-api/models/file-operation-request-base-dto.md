# FileOperationRequestBaseDto
The parameter shared by every request that starts a background file operation.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **returnSingleOperation** | **Boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false` returns every operation of the same kind that the caller has running or unread. When nothing was queued, which happens for an empty selection, `true` falls back to the full list. | [optional] [example: `false`] |
