# GetClassType

Returns a type of the ApiTextPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"textPr"

## Example

Identify the object type of a text properties block in a spreadsheet.

```javascript editor-xlsx
// How do I find out what kind of object holds text formatting settings in a spreadsheet?

// Display the type label of a text properties object inside a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
paragraph.SetJc("left");
let classType = textProps.GetClassType();
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
```
