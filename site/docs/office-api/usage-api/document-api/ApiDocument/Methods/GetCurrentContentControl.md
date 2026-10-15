# GetCurrentContentControl

Returns the currently selected content control.

Inherited from [ApiDocumentContent.GetCurrentContentControl](../../ApiDocumentContent/Methods/GetCurrentContentControl.md).

## Syntax

```javascript
expression.GetCurrentContentControl();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null

## Example

Retrieve the content control that is currently selected in a document.

```javascript editor-docx
// How do I get the active content control at the cursor position in a document?

// Check which control the user is interacting with by reading the current selection in a document.

const doc = Api.GetDocument();

const inlineSdt = doc.AddCheckBoxContentControl();
inlineSdt.Select();
const currentCC = doc.GetCurrentContentControl();

const paragraph = Api.CreateParagraph();
if (currentCC) {
	paragraph.AddText('Current content control class: ' + currentCC.GetClassType());
} else {
	paragraph.AddText('No content control is selected.');
}
doc.Push(paragraph);
```
