# GetColor

Returns the tag color of the content control.

## Syntax

```javascript
expression.GetColor();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

Read the tag color of an inline content control in a document.

```javascript editor-docx
// How do I get the color assigned to an inline content control in a document?

// Compare the tag colors of multiple content controls to audit their visual coding in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
inlineLvlSdt.SetColor(Api.RGB(0, 0, 255));
let color = inlineLvlSdt.GetColor();
run.AddText("Color: " + (color ? color.GetHex() : "none"));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

inlineLvlSdt = Api.CreateInlineLvlSdt();
run = Api.CreateRun();
color = inlineLvlSdt.GetColor();
run.AddText("Color: " + (color ? color.GetHex() : "none"));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
