# SetTitle

Sets the title of the current drawing.

Inherited from [ApiDrawing.SetTitle](../../ApiDrawing/Methods/SetTitle.md).

## Syntax

```javascript
expression.SetTitle(title);
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | Required | string |  | The title to set for the current drawing. |

## Returns

boolean

## Example

Set the title of a drawing in a spreadsheet.

```javascript editor-xlsx
// Useful for assigning the alternative text title of a drawing.

// Create a drawing and set its title.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
worksheet.SetColumnWidth(0, 25);
worksheet.GetRange("A1").SetValue("Drawing title: " + title);
```
