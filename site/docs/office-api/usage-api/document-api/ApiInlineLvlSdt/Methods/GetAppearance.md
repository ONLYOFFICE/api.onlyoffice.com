# GetAppearance

Returns the visualization type of the content control.

## Syntax

```javascript
expression.GetAppearance();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"boundingBox" \| "hidden"

## Example

Read the appearance setting of an inline content control in a document.

```javascript editor-docx
// How do I get the appearance style of an inline content control in a document?

// Check whether a content control is displayed as a bounding box, tags, or hidden in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
let appearance = contentControl.GetAppearance();
contentControl.AddText("The appearance of this content control: " + appearance);
paragraph.Push(contentControl);
```
