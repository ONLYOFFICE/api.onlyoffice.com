# SetFlipV

Sets the vertical flip of the current drawing.

## Syntax

```javascript
expression.SetFlipV(bFlip);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | Required | boolean |  | Specifies if the figure will be flipped vertically or not. |

## Returns

boolean

## Example

Mirror a drawing from top to bottom in a spreadsheet.

```javascript editor-xlsx
// How do I flip a drawing so it faces the opposite vertical direction in a spreadsheet?

// Reverse a shape along its horizontal axis to produce a vertical mirror image in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetFlipV(true);
let flip = drawing.GetFlipV();
worksheet.SetColumnWidth(0, 28);
worksheet.GetRange("A1").SetValue("Drawing is flipped vertically: " + flip);
```
