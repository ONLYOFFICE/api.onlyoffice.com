# SignupAccountRequestDto
The request parameters for creating a third-party account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **employeeType** | [**EmployeeType**](employee-type.md) | The type the invitation link is looked up as, defaulting to `RoomAdmin`. It does not decide the resulting type: the link itself does, and this value only has to match the kind of link that was issued. | [optional] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **key** | **String** | The key of the invitation link being accepted, taken from the link the invitation email or the room invitation contains. An expired or already used key is rejected with 403. | [required] [example: `invite_key_123456`] [nullable] |
| **culture** | **String** | The culture to set on the new profile, as a culture code. It is applied only when the portal has that culture enabled, and otherwise the portal default is kept. | [optional] [example: `en-US`] [nullable] |
| **serializedProfile** | **String** | The profile a completed provider authorization produced, in the serialized form the login flow hands back. Pass that value unchanged; the first name, the last name, the email and the avatar of the new profile are taken from it. | [required] [example: `{"provider":"google","id":"123456"}`] [nullable] |
