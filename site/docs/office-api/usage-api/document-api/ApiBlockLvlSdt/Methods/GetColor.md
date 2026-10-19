# GetColor

Returns the tag color of the content control.

## Syntax

```javascript
expression.GetColor();
```

`expression` - A variable that represents an [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

Read the highlight color of a content control in a document.

```javascript editor-docx
// How do I get the color assigned to a content control in a document?

// Check what color a content control has and display its hex value in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetColor(Api.RGB(0, 0, 255));
let color = blockLvlSdt.GetColor();
blockLvlSdt.GetContent().GetElement(0).AddText("Color: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetColor();
blockLvlSdt.GetContent().GetElement(0).AddText("Color: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);
```
