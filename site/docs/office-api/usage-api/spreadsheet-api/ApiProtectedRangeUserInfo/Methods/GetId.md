# GetId

Returns the ID property of the current user's information.

## Syntax

```javascript
expression.GetId();
```

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

Read the unique identifier of a user who has access to a protected range in a spreadsheet.

```javascript editor-xlsx
// How do I find a user's ID for a protected range in a spreadsheet?

// Confirm which user account is linked to a locked area by checking its ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userId = userInfo.GetId();
worksheet.GetRange("A3").SetValue("Id: " + userId);
```
