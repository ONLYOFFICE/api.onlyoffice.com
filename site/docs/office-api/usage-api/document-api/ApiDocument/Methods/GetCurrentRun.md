# GetCurrentRun

Returns the current run where the cursor is located.

Inherited from [ApiDocumentContent.GetCurrentRun](../../ApiDocumentContent/Methods/GetCurrentRun.md).

## Syntax

```javascript
expression.GetCurrentRun();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Retrieve the text run at the cursor position and apply italic formatting in a document.

```javascript editor-docx
// How do I get the run the cursor is currently inside in a document?

// Style only the specific run being edited without affecting the rest of the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph with example run: ");
let run = Api.CreateRun();
run.AddText('EXAMPLE RUN');
run.SetBold(true);
paragraph.AddElement(run);
run.MoveCursorToPos(0);
let currentRun = doc.GetCurrentRun();
currentRun.SetItalic(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("The current run was set to Bold and Italic");
doc.Push(paragraph);
```
