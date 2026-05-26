# FindNext

Continues a search that was begun with the [ApiRange#Find](../../ApiRange/Methods/Find.md) method. Finds the next cell that matches those same conditions and returns the ApiRange object that represents that cell. This does not affect the selection or the active cell.

## Syntax

```javascript
expression.FindNext(After);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| After | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The cell after which the search will start. If this argument is not specified, the search starts from the last cell found. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Continue a search to find the next matching cell after an initial result in a spreadsheet.

```javascript editor-xlsx
// How do I move to the next cell that shares the same value as the one already found in a spreadsheet?

// Step through every matching cell in a range one by one and mark each occurrence in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("A4").SetValue("Cost price");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("B4").SetValue(50);
worksheet.GetRange("C2").SetValue(200);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("C4").SetValue(120);
worksheet.GetRange("D2").SetValue(200);
worksheet.GetRange("D3").SetValue(200);
worksheet.GetRange("D4").SetValue(160);
let range = worksheet.GetRange("A2:D4");
let searchRange = range.Find("200", "B1", "xlValues", "xlWhole", "xlByColumns", "xlNext", true);
searchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
let nextSearchRange = range.FindNext(searchRange);
nextSearchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
