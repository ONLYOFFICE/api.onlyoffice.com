# GetStrikeout

Gets the strikeout property from the current text properties.

## Syntax

```javascript
expression.GetStrikeout();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example finds out whether a text has the strikeout property set.

```javascript editor-docx
// How to know whether a text is crossed by one horizontal line.

// Retrieve text properties of the form to find out whether it is stroke out.

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
textPr.SetStrikeout(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let strikeout = textPr.GetStrikeout();
paragraph.AddText("Strikeout property: " + strikeout);
doc.Push(paragraph);
```
