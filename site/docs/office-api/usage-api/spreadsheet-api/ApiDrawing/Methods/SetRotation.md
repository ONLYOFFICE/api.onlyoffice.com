# SetRotation

Sets the rotation angle to the current drawing object.

## Syntax

```javascript
expression.SetRotation(nRotAngle);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRotAngle | Required | number |  | New drawing rotation angle. |

## Returns

boolean

## Example

This example shows how to set the rotation angle to the drawing.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
drawing.SetRotation(90);
let rotAngle = drawing.GetRotation();
worksheet.GetRange("A1").SetValue("Drawing rotation angle is set to: " + rotAngle + " degrees");
```
