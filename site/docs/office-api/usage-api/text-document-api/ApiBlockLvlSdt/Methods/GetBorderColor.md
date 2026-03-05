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

null \| Object

## Example

This example shows how to get the border color of the block-level container.

```javascript editor-docx
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
