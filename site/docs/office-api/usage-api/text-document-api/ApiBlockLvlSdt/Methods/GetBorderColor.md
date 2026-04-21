# GetBorderColor

Returns the border color of the current content control.

## Syntax

```javascript
expression.GetBorderColor();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Get the border color of the block-level container in a document.

```javascript editor-docx
// How do I get the border color in a document?

// Get the border color using a block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBorderColor(Api.RGB(0, 0, 255));
let color = blockLvlSdt.GetBorderColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BorderColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetBorderColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BorderColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);
```
