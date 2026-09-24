# EmailValidationKeyModel
The confirmation email parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **key** | **String** | The email validation key. | [optional] [example: `abcdef123456`] [nullable] |
| **emplType** | [**EmployeeType**](employee-type.md) | The user type. | [optional] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **email** | **String** (email) | The email address. | [optional] [example: `user@example.com`] [nullable] |
| **encEmail** | **String** | The encrypted email address. | [optional] [example: `user%40example.com`] [nullable] |
| **uiD** | **UUID** (uuid) | The user ID. | [optional] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **type** | [**ConfirmType**](confirm-type.md) | The confirmation email type. | [optional] [enum: `EmpInvite`, `LinkInvite`, `PortalSuspend`, `PortalContinue`, `PortalRemove`, `DnsChange`, `PortalOwnerChange`, `Activation`, `EmailChange`, `EmailActivation`, `PasswordChange`, `ProfileRemove`, `PhoneActivation`, `PhoneAuth`, `Auth`, `TfaActivation`, `TfaAuth`, `Wizard`, `GuestShareLink`] |
| **first** | **String** | Specifies whether it is the first time account access or not. | [optional] [example: `false`] [nullable] |
| **roomId** | **String** | The room ID. | [optional] [example: `1`] [nullable] |
