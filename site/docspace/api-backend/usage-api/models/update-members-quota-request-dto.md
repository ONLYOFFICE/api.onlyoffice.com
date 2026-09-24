# UpdateMembersQuotaRequestDto
The request parameters for updating a user quota.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userIds** | **List** (uuid) | The accounts the operation applies to. System accounts are dropped from the list without an error. | [optional] [example: `[00000000-0000-0000-0000-000000000000, 11111111-1111-1111-1111-111111111111]`] [nullable] |
| **quota** | [**UpdateMembersQuotaRequestDto_quota**](update-members-quota-request-dto-quota.md) |  | [optional] |
