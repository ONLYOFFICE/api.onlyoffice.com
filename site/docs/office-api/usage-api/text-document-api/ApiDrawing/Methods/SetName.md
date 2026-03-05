# SetName

Sets the name of the current drawing.
If another drawing with the same name already exists, that drawing's name will be reset to a default auto-generated name.

## Syntax

```javascript
expression.SetName(name);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name which will be set to the current drawing. |

## Returns

boolean

## Example

This example shows how to set the name of a drawing.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(80, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('ellipse', Api.MillimetersToEmus(60), Api.MillimetersToEmus(50), fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetName('BlueEllipse');

const content = drawing.GetContent();
const shapeParagraph = content.GetElement(0);
shapeParagraph.AddText('The name of this drawing:');
shapeParagraph.AddLineBreak();
const nameRun = Api.CreateRun();
nameRun.AddText(drawing.GetName());
nameRun.SetBold(true);
shapeParagraph.AddElement(nameRun);

```
