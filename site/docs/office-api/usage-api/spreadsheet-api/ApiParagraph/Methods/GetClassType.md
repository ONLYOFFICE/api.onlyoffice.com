# GetClassType

Returns a type of the ApiParagraph class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"paragraph"

## Example

Read the type label of a paragraph object in a spreadsheet.

```javascript editor-xlsx
// How do I find out what kind of object a paragraph is in a spreadsheet?

// Display the paragraph's type name as text inside the shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
