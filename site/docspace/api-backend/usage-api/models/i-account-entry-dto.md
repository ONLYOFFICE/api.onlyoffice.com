# IAccountEntryDto
One entry of an account search: either a user or a group.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The group ID. | [required] |
| **displayName** | **String** | The HTML-encoded user's display name formatted according to the default format for the current culture. | [optional] [nullable] |
| **avatar** | **String** | The user avatar. | [optional] [nullable] |
| **avatarOriginal** | **String** | The user original size avatar. | [optional] [nullable] |
| **avatarMax** | **String** | The user maximum size avatar. | [optional] [nullable] |
| **avatarMedium** | **String** | The user medium size avatar. | [optional] [nullable] |
| **avatarSmall** | **String** | The user small size avatar. | [optional] [nullable] |
| **profileUrl** | **String** | The user profile URL. | [optional] [nullable] |
| **hasAvatar** | **Boolean** | Specifies if the user has an avatar or not. | [optional] |
| **isAnonim** | **Boolean** | Specifies if the user is anonymous or not. | [optional] |
| **firstName** | **String** | The user first name. | [optional] [nullable] |
| **lastName** | **String** | The user last name. | [optional] [nullable] |
| **userName** | **String** | The user username. | [optional] [nullable] |
| **email** | **String** (email) | The user email. | [optional] [nullable] |
| **contacts** | [**List**](contact.md) | The list of user contacts. | [optional] [nullable] |
| **status** | [**EmployeeStatus**](employee-status.md) | The user status. | [optional] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | [**EmployeeActivationStatus**](employee-activation-status.md) | The user activation status. | [optional] [enum: `0`, `1`, `2`, `4`] |
| **terminated** | [**ApiDateTime**](api-date-time.md) | The date when the user account was terminated. | [optional] |
| **department** | **String** | The user department. | [optional] [nullable] |
| **groups** | [**List**](group-summary-dto.md) | The list of user groups. | [optional] [nullable] |
| **location** | **String** | The user location. | [optional] [nullable] |
| **notes** | **String** | The user notes. | [optional] [nullable] |
| **isAdmin** | **Boolean** | Specifies if the user is an administrator or not. | [optional] |
| **isRoomAdmin** | **Boolean** | Specifies if the user is a room administrator or not. | [optional] |
| **isLDAP** | **Boolean** | Specifies if the LDAP settings are enabled for the group or not. | [required] |
| **listAdminModules** | **List** | The list of the administrator modules. | [optional] [nullable] |
| **isOwner** | **Boolean** | Specifies if the user is a portal owner or not. | [optional] |
| **isVisitor** | **Boolean** | Specifies if the user is a portal visitor or not. | [optional] |
| **isCollaborator** | **Boolean** | Specifies if the user is a portal collaborator or not. | [optional] |
| **cultureName** | **String** | The user culture code. | [optional] [nullable] |
| **mobilePhone** | **String** | The user mobile phone number. | [optional] [nullable] |
| **mobilePhoneActivationStatus** | [**MobilePhoneActivationStatus**](mobile-phone-activation-status.md) | The mobile phone activation status. | [optional] [enum: `0`, `1`] |
| **isSSO** | **Boolean** | Specifies if the SSO settings are enabled for the user or not. | [optional] |
| **theme** | [**DarkThemeSettingsType**](dark-theme-settings-type.md) | The user theme settings. | [optional] [enum: `Base`, `Dark`, `System`] |
| **quotaLimit** | **Long** (int64) | The user quota limit. | [optional] [nullable] |
| **usedSpace** | **Double** (double) | The portal used space of the user. | [optional] [nullable] |
| **shared** | **Boolean** | Specifies whether the group can be shared or not. | [optional] [nullable] |
| **isCustomQuota** | **Boolean** | Specifies if the user has a custom quota or not. | [optional] [nullable] |
| **loginEventId** | **Integer** (int32) | The current login event ID. | [optional] [nullable] |
| **authCookieLifetime** | **Double** (double) | The auth cookie lifetime in seconds. | [optional] [nullable] |
| **createdBy** | [**EmployeeDto**](employee-dto.md) | The user who created the current user. | [optional] |
| **registrationDate** | [**ApiDateTime**](api-date-time.md) | The user registration date. | [optional] |
| **hasPersonalFolder** | **Boolean** | Specifies if the user has a personal folder or not. | [optional] [nullable] |
| **tfaAppEnabled** | **Boolean** | Indicates whether the user has enabled two-factor authentication (TFA) using an authentication app. | [optional] [nullable] |
| **name** | **String** | The group name. | [required] [nullable] |
| **parent** | **UUID** (uuid) | The parent group ID. | [optional] [nullable] |
| **category** | **UUID** (uuid) | The group category ID. | [required] |
| **isSystem** | **Boolean** | Indicates whether the group is a system group. | [optional] [nullable] |
| **manager** | [**EmployeeFullDto**](employee-full-dto.md) | The group manager full information. | [optional] |
| **members** | [**List**](employee-full-dto.md) | The list of group members. | [optional] [nullable] |
| **membersCount** | **Integer** (int32) | The number of group members. | [optional] |
