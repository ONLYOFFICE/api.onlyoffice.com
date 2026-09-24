# SaveFormRoleMappingDtoInteger
The people who are to fill in the roles of a PDF form.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **formId** | **Integer** (int32) | The PDF form the roles belong to. This is the value the operation reads, rather than the identifier in its route, and the two are to be sent the same. | [required] [example: `1`] |
| **roles** | [**List**](form-role.md) | The roles with the account taking each of them and the sequence number that decides the turn: the same number means the roles may be filled in parallel, different ones make a queue. The whole set is replaced on every call, and an empty set resets the filling. | [required] [example: `[{roleName=Approver, userId=00000000-0000-0000-0000-000000000000}]`] [nullable] |
