# SetShadow

Sets the shadow to the current graphic object.

## Syntax

```javascript
expression.SetShadow(shadow);
```

`expression` - A variable that represents an [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shadow | Required | [ApiShadow](../../ApiShadow/ApiShadow.md) \| null \| undefined |  | The shadow to apply, or null to remove the current shadow. |

## Returns

boolean

## Example

Apply an outer shadow to a drawing in a spreadsheet.

```javascript editor-xlsx
// Give a shape a soft offset shadow so it appears lifted off the sheet.

// Create a shape, build a shadow, and set it on the drawing with SetShadow.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 120 * 36000, 60 * 36000, fill, stroke, 2, 0, 2, 0);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(64, 64, 64), transparency: 0.3, offsetX: 4, offsetY: 4 }));
```
