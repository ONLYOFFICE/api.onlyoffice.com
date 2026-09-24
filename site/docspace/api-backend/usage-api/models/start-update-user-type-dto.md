# StartUpdateUserTypeDto
The parameters for updating the type of the user or guest when reassigning rooms and shared files.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | [**EmployeeType**](employee-type.md) | The type to convert the account to. Only `Guest` and `User` are accepted, because they are the types that cannot own rooms; `RoomAdmin`, `DocSpaceAdmin` and `All` are rejected here and belong to `PUT api/2.0/people/type/{type}`. | [optional] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **userId** | **UUID** (uuid) | The ID of the account being converted. It has to be an active account other than the caller, and only the portal owner may pass the ID of a DocSpace administrator. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **reassignUserId** | **UUID** (uuid) | The ID of the administrator who receives the rooms and the shared files of the converted account. It has to be an active room admin or DocSpace admin other than the converted account, and when it is omitted the data goes to the caller. | [optional] [example: `11111111-1111-1111-1111-111111111111`] [nullable] |
