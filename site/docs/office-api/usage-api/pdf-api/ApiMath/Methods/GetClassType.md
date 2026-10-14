# GetClassType

Returns a type of the ApiMath class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiMath](../ApiMath.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"math"

## Example

Identify the object type of a math equation in a PDF.

```javascript editor-pdf
// Find out what kind of object a formula is in a PDF.

// Confirm the category a math equation belongs to in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
const classType = math.GetClassType();

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Class Type = " + classType);
docContent.Push(paragraph2);
```
