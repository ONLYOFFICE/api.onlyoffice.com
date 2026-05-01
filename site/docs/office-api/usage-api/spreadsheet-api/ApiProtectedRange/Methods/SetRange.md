# SetRange

Sets a range to the current protected range.

## Syntax

```javascript
expression.SetRange(sRange);
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | The cell range which will be set for the current protected range. |

## Returns

boolean

## Example

Change ranges for a protected range in a spreadsheet.

```javascript editor-xlsx
// How to set a protected range in a spreadsheet.

// Update a range of a protected range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetRange("Sheet1!$A$2:$B$2");
```
