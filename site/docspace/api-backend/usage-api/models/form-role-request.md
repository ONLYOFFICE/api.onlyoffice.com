# FormRoleRequest
One role of a form and the account that fills it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomId** | **Integer** (int32) | The ID of the room the form is in. It is stored with the role as sent, so pass the room the form lives in. | [optional] [example: `1`] |
| **roleName** | **String** | The name of a role the form defines, such as the one the form author gave a group of fields. | [optional] [example: `Manager`] [nullable] |
| **roleColor** | **String** | The color the editor marks the fields of this role with, as a hex code. | [optional] [example: `#4781D1`] [nullable] |
| **userId** | **UUID** (uuid) | The account that fills this role. It is notified once filling starts, unless it is the caller. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **sequence** | **Integer** (int32) | Accepted for compatibility and ignored: the position of the role in the list sets the filling order. | [optional] [example: `12`] |
| **submitted** | **Boolean** | Whether this role counts as already submitted. It is stored as sent; send false when filling starts. | [optional] [example: `false`] |
| **openedAt** | **Date** (date-time) | Accepted for compatibility and ignored: the portal records when the role is opened. | [optional] [example: `2026-01-01T10:00:00Z`] |
| **submissionDate** | **Date** (date-time) | Accepted for compatibility and ignored: the portal records when the role is submitted. | [optional] [example: `2026-01-01T10:00:00Z`] |
