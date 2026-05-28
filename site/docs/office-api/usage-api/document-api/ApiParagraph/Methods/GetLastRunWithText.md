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

Find and modify the last text run inside a paragraph in a document.

```javascript editor-docx
// How do I access the final text run of a paragraph in a document?

// Append additional text to the last run of a multi-run paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 0; i < 5; ++i) {
	let run = Api.CreateRun();
	run.AddText("This run # " + (i + 1));
	paragraph.Push(run);
	paragraph.AddLineBreak();
}
let lastRun = paragraph.GetLastRunWithText();
lastRun.AddText(" Last run.");
```
