# GroupDto
The group parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The group name. | [required] [example: `Marketing Team`] [nullable] |
| **parent** | **UUID** (uuid) | The parent group ID. | [optional] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **category** | **UUID** (uuid) | The group category ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **id** | **UUID** (uuid) | The group ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **isLDAP** | **Boolean** | Specifies if the LDAP settings are enabled for the group or not. | [required] [example: `false`] |
| **isSystem** | **Boolean** | Indicates whether the group is a system group. | [optional] [example: `false`] [nullable] |
| **manager** | [**EmployeeFullDto**](employee-full-dto.md) | The group manager full information. | [optional] |
| **members** | [**List**](employee-full-dto.md) | The list of group members. | [optional] [example: `[{displayName=John Doe}]`] [nullable] |
| **shared** | **Boolean** | Specifies whether the group can be shared or not. | [optional] [example: `false`] [nullable] |
| **membersCount** | **Integer** (int32) | The number of group members. | [optional] [example: `0`] |
