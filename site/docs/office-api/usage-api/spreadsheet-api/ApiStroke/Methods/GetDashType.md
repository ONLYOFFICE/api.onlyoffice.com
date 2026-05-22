# GetDashType

Gets the dash type of the stroke.

## Syntax

```javascript
expression.GetDashType();
```

`expression` - A variable that represents a [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DashType](../../Enumeration/DashType.md) \| null

## Example

Read the line style of a shape's border to find out whether it is solid, dashed, or dotted in a spreadsheet.

```javascript editor-xlsx
// How do I check what dash pattern a shape's border uses in a spreadsheet?

// Inspect the border line style of a shape so you can verify or display the pattern name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
worksheet.GetRange("A1").SetValue("Dash type: " + (dashType ? dashType : "not set"));
```
