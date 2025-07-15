# GetStyle

Gets the style of the current text properties.

## Syntax

```javascript
expression.GetStyle();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example finds out whether a text has the properties set.

```javascript editor-docx
// How to know whether a text's style is changed or not.

// Retrieve text properties of the form and display its style name.

let doc = Api.GetDocument();
let myNewRunStyle = doc.CreateStyle("My New Run Style", "run");
let textPr = myNewRunStyle.GetTextPr();
textPr.SetCaps(true);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle);
run.AddText("This is a text run with its own style.");
textPr = run.GetTextPr();
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let style = textPr.GetStyle();
paragraph.AddText("Style: " + style.GetName());
doc.Push(paragraph);
```
