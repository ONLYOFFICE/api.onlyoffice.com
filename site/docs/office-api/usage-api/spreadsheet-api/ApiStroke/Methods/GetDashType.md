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

[LineDashType](../../Enumeration/LineDashType.md) \| null

## Example

Gets the dash type of a stroke.

```javascript editor-xlsx
// Creates a shape with a solid border and displays its dash type.
// Returns string value: "dash", "dashDot", "dot", "lgDash", "lgDashDot",
// "lgDashDotDot", "solid", "sysDash", "sysDashDot", "sysDashDotDot", "sysDot"
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
worksheet.GetRange("A1").SetValue("Dash type: " + (dashType ? dashType : "not set"));

```
