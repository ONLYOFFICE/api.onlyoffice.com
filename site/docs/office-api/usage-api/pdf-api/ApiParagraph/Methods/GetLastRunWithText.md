# GetLastRunWithText

Returns the last Run with text in the current paragraph.

## Syntax

```javascript
expression.GetLastRunWithText();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Access the final text element in a paragraph in a PDF.

```javascript editor-pdf
// How do I find the last text element within a paragraph in a PDF?

// Locate and modify the final text segment of a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

for (let i = 0; i < 5; i++) {
	const run = Api.CreateRun();
	run.AddText('This is run #' + (i + 1) + '. ');
	paragraph.Push(run);
}

const lastRun = paragraph.GetLastRunWithText();
lastRun.AddText(' [Last run]');
lastRun.SetBold(true);
page.AddObject(shape);
```
