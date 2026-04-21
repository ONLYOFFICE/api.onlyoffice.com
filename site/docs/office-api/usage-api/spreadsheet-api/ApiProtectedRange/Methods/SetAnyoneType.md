# SetAnyoneType

Sets the type of the "Anyone" user to the current protected range.

## Syntax

```javascript
expression.SetAnyoneType(protectedRangeUserType);
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| protectedRangeUserType | Required | [ProtectedRangeUserType](../../Enumeration/ProtectedRangeUserType.md) |  | The user type of the protected range. |

## Returns

boolean

## Example

Change access type for anyone for protected range in a spreadsheet.

```javascript editor-xlsx
// How to set access type to the "can view" one in a spreadsheet.

// Make a protected range viewable for anyone in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");
```
