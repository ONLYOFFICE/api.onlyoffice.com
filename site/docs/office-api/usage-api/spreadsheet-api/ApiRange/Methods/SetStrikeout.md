# SetStrikeout

Specifies that the contents of the cell / cell range are displayed with a single horizontal line through the center of the contents.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies if the contents of the current cell / cell range are displayed struck through. |

## Returns

boolean

## Example

Draw a horizontal line through the middle of cell text in a spreadsheet.

```javascript editor-xlsx
// How do I cross out the text in a cell in a spreadsheet?

// Mark content as deleted or outdated by striking through it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Struckout text");
worksheet.GetRange("A2").SetStrikeout(true);
worksheet.GetRange("A3").SetValue("Normal text");
```
