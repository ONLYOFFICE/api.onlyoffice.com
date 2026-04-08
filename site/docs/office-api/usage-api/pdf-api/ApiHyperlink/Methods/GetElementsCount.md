# GetElementsCount

Returns a number of elements in the current hyperlink.

## Syntax

```javascript
expression.GetElementsCount();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a number of elements in the hyperlink.

```javascript editor-pdf
// How to get the number of elements of the hyperlink.

// Add a hyperlink to the paragraph and show its elements count.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#456789'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
page.AddObject(shape);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);

let run1 = Api.CreateRun();
run1.AddText("Api Document Builder.");
paragraph.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers");
paragraph.AddElement(run2, 1);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let elementsCount = hyperlink.GetElementsCount();
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of elements in hyperlink: " + elementsCount);
paragraph.AddLineBreak();
paragraph.AddText("Elements: paragraph, run1, run2, hyperlink");
docContent.Push(paragraph);
```
