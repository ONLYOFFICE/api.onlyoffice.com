# SetFill

Sets the fill properties to the current shape.

## Syntax

```javascript
expression.SetFill(oFill);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the shape. |

## Returns

boolean

## Example

Sets a solid fill color to a shape.

```javascript editor-xlsx
// Creates a rectangle and applies a red fill to it.
let worksheet = Api.GetActiveSheet();
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, Api.CreateNoFill(), stroke, 3, 0, 2, 2);
worksheet.GetRange("A1").SetValue("Original shape with no fill");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0));
shape.SetFill(fill);
worksheet.GetRange("A2").SetValue("Fill changed to red");

```
