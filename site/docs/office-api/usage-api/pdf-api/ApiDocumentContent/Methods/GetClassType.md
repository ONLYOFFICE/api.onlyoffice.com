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

Find out the class type of a document content object.

```javascript editor-pdf
// How can I get the class type of a document content?

// Get the class type of a document content and display it in the PDF.

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
