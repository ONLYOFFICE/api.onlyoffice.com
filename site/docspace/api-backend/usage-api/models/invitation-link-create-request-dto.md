# InvitationLinkCreateRequestDto
The role a new invitation link grants, and the limits placed on it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **employeeType** | [**EmployeeType**](employee-type.md) | The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` are accepted, and the role cannot be changed afterwards - delete the link and create one for the other role instead. | [required] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **expiration** | **Date** (date-time) | When the link stops letting anyone in, read in the portal time zone. It has to lie in the future; leaving it out creates a link with no deadline at all. | [optional] [example: `2025-06-15T10:30:00.0000000Z`] [nullable] |
| **maxUseCount** | **Integer** (int32) | How many accounts may join through the link in total. Leaving it out creates a link with no use limit; the uses spent so far are reported as `currentUseCount`. | [optional] [example: `1`] [min: 1] [max: 1000] [nullable] |
