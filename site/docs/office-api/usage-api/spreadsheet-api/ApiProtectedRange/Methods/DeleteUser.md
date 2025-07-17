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

This example deletes the the user protected range.

```javascript editor-xlsx
// How to close an access for the protected range to user specifing user id, name and access type.

// Get an active sheet, add protected range to it, add users with rights then delete one of them. 

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
protectedRange.DeleteUser("userId");
```
