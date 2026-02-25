# GetSmallCaps

Specifies whether the text with the current text properties are displayed capitalized two points smaller than the actual font size.

## Syntax

```javascript
expression.GetSmallCaps();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example finds out whether the current form is uncapitalized or not.

```javascript editor-docx playground
// How to find out whether a text is ucapitalized or not.

// Get the property of the text that shows whether a text is in lowercase.

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
textPr.SetSmallCaps(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let smallCaps = textPr.GetSmallCaps();
paragraph.AddText("Property of the small capitalized letters: " + smallCaps);
doc.Push(paragraph);
```
