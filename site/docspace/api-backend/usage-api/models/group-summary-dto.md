# GroupSummaryDto
The group summary parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The group ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **name** | **String** | The group name. | [required] [example: `Group Name`] [nullable] |
| **manager** | **String** | The group manager. | [optional] [example: `Jake.Zazhitski`] [nullable] |
| **isSystem** | **Boolean** | Indicates whether the group is a system group. | [optional] [example: `false`] [nullable] |
