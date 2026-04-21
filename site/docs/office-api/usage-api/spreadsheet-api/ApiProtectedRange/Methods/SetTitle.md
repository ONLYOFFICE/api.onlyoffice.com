# SetTitle

Sets a title to the current protected range.

## Syntax

```javascript
expression.SetTitle(sTitle);
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The title which will be displayed for the current protected range. |

## Returns

boolean

## Example

Change the user protected range title in a spreadsheet.

```javascript editor-xlsx
// How to set a title for a protected range in a spreadsheet.

// Rename a title of a protected range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
