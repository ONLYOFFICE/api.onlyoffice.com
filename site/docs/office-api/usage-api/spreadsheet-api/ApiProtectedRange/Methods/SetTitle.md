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

Assign a new title to a protected range in a spreadsheet.

```javascript editor-xlsx
// How do I rename a protected range in a spreadsheet?

// Update the label on a locked area so collaborators know what it protects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
