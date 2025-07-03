# GetRotation

Returns the rotation angle of the current drawing object.

## Syntax

```javascript
expression.GetRotation();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the rotation angle of the drawing.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(130 * 36000, 10 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 5 * 36000);
drawing.SetRotation(90);
let rotAngle = drawing.GetRotation();
worksheet.GetRange("A1").SetValue("Drawing rotation angle is: " + rotAngle + " degrees");
```
