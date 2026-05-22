# SetFontColor

Sets the text color to the current cell range with the previously created color object.

## Syntax

```javascript
expression.SetFontColor(oColor);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color object which specifies the color to be set to the text in the cell / cell range. |

## Returns

boolean

## Example

Change the text color in a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I make the text in a group of cells a different color in a spreadsheet?

// Give cell text a specific color to highlight or differentiate it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetFontColor(Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is the text with a color set to it");
worksheet.GetRange("A4").SetValue("This is the text with a default color");
```
