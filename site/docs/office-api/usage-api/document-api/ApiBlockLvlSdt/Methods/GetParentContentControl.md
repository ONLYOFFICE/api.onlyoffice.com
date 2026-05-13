# GetParentContentControl

Returns a content control that contains the current content control.

## Syntax

```javascript
expression.GetParentContentControl();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null

## Example

Get a content control that contains the content control in a document.

```javascript editor-docx
// How to get the parent content control for a block-level content control in a document?

// Get the parent content control and display the result in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a parent block text content control.");
doc.AddElement(0, blockLvlSdt);
let innerSdt = Api.CreateBlockLvlSdt();
innerSdt.GetContent().GetElement(0).AddText("This is a block text content control added in another content control.");
blockLvlSdt.AddElement(innerSdt, 0);
innerSdt.GetParentContentControl().SetAlias("Parent content control");
```
