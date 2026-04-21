# GetCurrentContentControl

Returns the currently selected content control.

## Syntax

```javascript
expression.GetCurrentContentControl();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null

## Example

Get the currently selected content control in a document.

```javascript editor-docx
// How to get current content control for a document content?

// Get current content control and display the result in a document.

const doc = Api.GetDocument();

const blockSdt = Api.CreateBlockLvlSdt();
blockSdt.GetContent().GetElement(0).AddText('Content inside the control.');
doc.AddElement(0, blockSdt);

blockSdt.Select();
const currentCC = doc.GetCurrentContentControl();

const paragraph = Api.CreateParagraph();
if (currentCC) {
	paragraph.AddText('Current content control class: ' + currentCC.GetClassType());
} else {
	paragraph.AddText('No content control is selected.');
}
doc.Push(paragraph);
```
