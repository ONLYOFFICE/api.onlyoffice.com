# UserInfo
The user information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The user ID. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **firstName** | **String** | The user's first name. | [optional] [example: `John`] [nullable] |
| **lastName** | **String** | The user's last name. | [optional] [example: `Doe`] [nullable] |
| **userName** | **String** | The user username. | [optional] [example: `johndoe`] [nullable] |
| **birthDate** | **Date** (date-time) | The user birthday. | [optional] [example: `1990-01-01T00:00:00Z`] [nullable] |
| **sex** | **Boolean** | The user sex (male or female). | [optional] [example: `true`] [nullable] |
| **status** | [**EmployeeStatus**](employee-status.md) | The user status. | [optional] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | [**EmployeeActivationStatus**](employee-activation-status.md) | The user activation status. | [optional] [enum: `0`, `1`, `2`, `4`] |
| **terminatedDate** | **Date** (date-time) | The date and time when the user account was terminated. | [optional] [example: `2025-12-31T23:59:59Z`] [nullable] |
| **title** | **String** | The user title. | [optional] [example: `Manager`] [nullable] |
| **workFromDate** | **Date** (date-time) | The user registration date. | [optional] [example: `2020-01-15T00:00:00Z`] [nullable] |
| **email** | **String** (email) | The user email address. | [optional] [example: `john.doe@example.com`] [nullable] |
| **contacts** | **String** | The list of user contacts in the string format. | [optional] [example: `skype:johndoe\|telegram:@johndoe`] [nullable] |
| **contactsList** | **List** | The list of user contacts. | [optional] [example: `[skype:johndoe, telegram:@johndoe]`] [nullable] |
| **location** | **String** | The user location. | [optional] [example: `New York, USA`] [nullable] |
| **notes** | **String** | The user notes. | [optional] [example: `Additional information about the user`] [nullable] |
| **removed** | **Boolean** | Specifies if the user account was removed or not. | [optional] [example: `false`] |
| **lastModified** | **Date** (date-time) | The date and time when the user account was last modified. | [optional] [example: `2025-02-08T10:30:00Z`] |
| **tenantId** | **Integer** (int32) | The tenant ID. | [optional] [example: `1`] |
| **isActive** | **Boolean** | Specifies if the user is active or not. | [optional] [example: `true`] |
| **cultureName** | **String** | The user culture code. | [optional] [example: `en-US`] [nullable] |
| **mobilePhone** | **String** | The user mobile phone. | [optional] [example: `+1234567890`] [nullable] |
| **mobilePhoneActivationStatus** | [**MobilePhoneActivationStatus**](mobile-phone-activation-status.md) | The user mobile phone activation status. | [optional] [enum: `0`, `1`] |
| **sid** | **String** | The LDAP user identifier. | [optional] [example: `S-1-5-21-3623811015-3361044348-30300820-1013`] [nullable] |
| **ldapQouta** | **Long** (int64) | The LDAP user quota attribute. | [optional] [example: `1073741824`] |
| **ssoNameId** | **String** | The SSO SAML user identifier. | [optional] [example: `johndoe@example.com`] [nullable] |
| **ssoSessionId** | **String** | The SSO SAML user session identifier. | [optional] [example: `_1a2b3c4d5e6f7g8h9i0j`] [nullable] |
| **createDate** | **Date** (date-time) | The date and time when the user account was created. | [optional] [example: `2020-01-15T00:00:00Z`] |
| **createdBy** | **UUID** (uuid) | The ID of the user who created the current user account. | [optional] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **spam** | **Boolean** | Specifies if tips, updates and offers are allowed to be sent to the user or not. | [optional] [example: `false`] [nullable] |
| **checkActivation** | **Boolean** | Indicates whether the activation status of the employee or recipient is unchecked or inactive. Depending on the context, this property evaluates the activation or eligibility status accordingly. | [optional] [example: `false`] |
