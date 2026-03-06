# RemoveAllElements

Removes all the elements from the current document or from the current document element.
💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add
content to this paragraph, use the [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md) method.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to remove all elements from a shape.

```javascript editor-pdf
// How to remove all elements from the page shape.

// Get a page shape's content and remove all elements from it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.Push(paragraph);
page.AddObject(shape);

```
