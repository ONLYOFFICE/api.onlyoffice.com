# GetFill

Gets the fill (color) of the stroke.

## Syntax

```javascript
expression.GetFill();
```

`expression` - A variable that represents a [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md) \| null

## Example

Read the fill color applied to a shape border in a spreadsheet.

```javascript editor-xlsx
// How do I find out what color a border is filled with in a spreadsheet?

// Inspect the color stored inside a border object in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let strokeObj = shape.GetLine();
if (strokeObj) {
    let strokeFill = strokeObj.GetFill();
    if (strokeFill) {
        worksheet.GetRange("A1").SetValue("Stroke fill type: " + strokeFill.GetType());
    }
}
```
