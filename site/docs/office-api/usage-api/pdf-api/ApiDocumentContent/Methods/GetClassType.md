# GetClassType

Returns a type of the ApiDocumentContent class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"documentContent"

## Example

Identify the type of a shape's content container in a PDF.

```javascript editor-pdf
// How can I determine the type of a content element in a PDF?

// Find what category or class an object belongs to in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const classType = docContent.GetClassType();
paragraph.AddText("Class Type: " + classType);
page.AddObject(shape);
```
