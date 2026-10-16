# SetDescription

Sets the description of the current drawing.

Inherited from [ApiDrawing.SetDescription](../../ApiDrawing/Methods/SetDescription.md).

## Syntax

```javascript
expression.SetDescription(description);
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description | Required | string |  | The description to set for the current drawing. |

## Returns

boolean

## Example

Set the description of a drawing in a spreadsheet.

```javascript editor-xlsx
// Useful for assigning the alternative text of a drawing.

// Create a drawing and set its description.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
worksheet.SetColumnWidth(0, 30);
worksheet.GetRange("A1").SetValue("Drawing description: " + description);
```
