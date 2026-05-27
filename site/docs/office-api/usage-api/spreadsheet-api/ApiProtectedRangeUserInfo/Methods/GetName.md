# GetName

Returns the name property of the current user's information.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

Read the display name of a user who has access to a protected range in a spreadsheet.

```javascript editor-xlsx
// How do I find out a user's name for a protected range in a spreadsheet?

// Identify a collaborator by name when inspecting who can edit a locked area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userName = userInfo.GetName();
worksheet.GetRange("A3").SetValue("Name: " + userName);
```
