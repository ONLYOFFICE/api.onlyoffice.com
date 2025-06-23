# GetItalic

Gets the italic property from the current text properties.

## Syntax

```javascript
expression.GetItalic();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to find out whether the text italic or not.

```javascript editor-docx
// How to know if the text of the form is italic.

// Retrieve text properties of the form and get whether a text style changed or not.

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
textPr.SetItalic(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let italic = textPr.GetItalic();
paragraph.AddText("Italic property: " + italic);
doc.Push(paragraph);
```
