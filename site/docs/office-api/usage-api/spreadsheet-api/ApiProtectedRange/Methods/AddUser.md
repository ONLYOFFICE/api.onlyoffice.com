# AddUser

Sets a user to the current protected range.

## Syntax

```javascript
expression.AddUser(sId, sName, protectedRangeUserType);
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The user ID. |
| sName | Required | string |  | The user name. |
| protectedRangeUserType | Required | [ProtectedRangeUserType](../../Enumeration/ProtectedRangeUserType.md) |  | The user type of the protected range. |

## Returns

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md) \| null

## Example

Add the user for protected range in a spreadsheet.

```javascript editor-xlsx
// How to open an access for the protected range to user specifing user id, name and access type in a spreadsheet.

// Get an active sheet, add protected range to it and add user with rights in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
```
