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

This method doesn't return any data.

## Example

This example sets the text color to the cell range.

```javascript editor-xlsx
// How to color a cell text.

// Get a range and apply an RGB color to its text color.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetFontColor(Api.CreateColorFromRGB(255, 111, 61));
oWorksheet.GetRange("A2").SetValue("This is the text with a color set to it");
oWorksheet.GetRange("A4").SetValue("This is the text with a default color");
```
