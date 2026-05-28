# GetBorderColor

Returns the border color of the current content control.

## Syntax

```javascript
expression.GetBorderColor();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Read the border color of an inline content control in a document.

```javascript editor-docx
// How do I get the border color of an inline content control in a document?

// Compare the outline color of multiple content controls to audit their visual styling in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
inlineLvlSdt.SetBorderColor(Api.HexColor('#0000FF'));
let color = inlineLvlSdt.GetBorderColor();
run.AddText("BorderColor: " + (color ? color.GetHex() : "none"));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

inlineLvlSdt = Api.CreateInlineLvlSdt();
run = Api.CreateRun();
color = inlineLvlSdt.GetBorderColor();
run.AddText("BorderColor: " + (color ? color.GetHex() : "none"));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
