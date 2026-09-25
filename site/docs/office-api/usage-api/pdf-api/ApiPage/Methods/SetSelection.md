# SetSelection

Sets page selection.

## Syntax

```javascript
expression.SetSelection(startPoint, endPoint);
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startPoint | Required | [Point](../../Enumeration/Point.md) |  | The start point of the selection. |
| endPoint | Required | [Point](../../Enumeration/Point.md) |  | The end point of the selection. |

## Returns

boolean

## Example

Mark a specific area of text as selected on a page in a PDF.

```javascript editor-pdf
// Useful for highlighting a range of text on a page in a PDF.

// Define and activate a text selection within given coordinates in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.RGB(50, 150, 250));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let results = page.Search({text: "Lorem selected text", matchCase: true, wholeWords: false});
let quads = results[0];
let firstQuad = quads[0];
let lastQuad = quads[quads.length - 1];
page.SetSelection({start: {x: firstQuad[0], y: firstQuad[1]}, end: {x: lastQuad[2], y: lastQuad[3]}});
console.log('We selected the text on the page');
```
