# SetBorders

Sets the border to the cell / cell range with the parameters specified.

## Syntax

```javascript
expression.SetBorders(bordersIndex, lineStyle, oColor);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bordersIndex | Required | [BordersIndex](../../Enumeration/BordersIndex.md) |  | Specifies the cell border position. |
| lineStyle | Required | [LineStyle](../../Enumeration/LineStyle.md) |  | Specifies the line style used to form the cell border. |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color object which specifies the color to be set to the cell border. |

## Returns

boolean

## Example

Add a border to a cell in a spreadsheet.

```javascript editor-xlsx
// How do I draw a border on a specific side of a cell in a spreadsheet?

// Define which edge of a cell gets a border, its thickness, and its color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is a cell with a bottom border");
```
