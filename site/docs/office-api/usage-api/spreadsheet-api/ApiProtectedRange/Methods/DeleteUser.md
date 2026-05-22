# DeleteUser

Removes a user from the current protected range.

## Syntax

```javascript
expression.DeleteUser(sId);
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The user ID. |

## Returns

boolean

## Example

Revoke a user's access to a protected range in a spreadsheet.

```javascript editor-xlsx
// How do I remove a person's permission to edit a locked range in a spreadsheet?

// Take away an existing user's rights to a protected range by removing them from the access list in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
protectedRange.DeleteUser("userId");
```
