# GetAppearance

Gets the visualization of the content control.

## Syntax

```javascript
expression.GetAppearance();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"boundingBox" \| "hidden"

## Example

Read the visual appearance setting of a content control in a document.

```javascript editor-docx
// How do I check how a content control is displayed in a document?

// Display whether a content control shows a bounding box, tags, or is hidden in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateBlockLvlSdt();
let appearance = contentControl.GetAppearance();
contentControl.GetContent().GetElement(0).AddText("The appearance of this content control: " + appearance);
doc.Push(contentControl);
```
