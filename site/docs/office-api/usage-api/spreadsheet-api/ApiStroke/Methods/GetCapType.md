# GetCapType

Returns the cap type of the stroke.

## Syntax

```javascript
expression.GetCapType();
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LineCapType](../../Enumeration/LineCapType.md) \| null

## Example

Read the cap type of a shape border in a spreadsheet.

```javascript editor-xlsx
// Get the cap type to find out how the stroke ends are drawn.

// Apply a round cap to a line's stroke, then read back its cap type in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = line.GetLine();
retrievedStroke.SetCapType("round");
let capType = retrievedStroke.GetCapType();
worksheet.GetRange("A1").SetValue("Cap type: " + capType);
```
