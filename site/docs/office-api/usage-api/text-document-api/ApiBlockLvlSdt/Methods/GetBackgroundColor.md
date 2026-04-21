# GetBackgroundColor

Returns the background color of the current content control.

## Syntax

```javascript
expression.GetBackgroundColor();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Get the background color of the block-level container in a document.

```javascript editor-docx
// How can I get the background color using a block-level content control in a document?

// Get the background color for a block-level content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(Api.RGBA(200, 200, 255, 255));
let color = blockLvlSdt.GetBackgroundColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BackgroundColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetBackgroundColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BackgroundColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);
```
