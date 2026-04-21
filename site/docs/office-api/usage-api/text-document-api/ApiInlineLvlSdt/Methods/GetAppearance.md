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

Add a text to the content control and get its appearance in a document.

```javascript editor-docx
// How do I get the appearance in a document?

// Get the appearance using an inline content control object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
let appearance = contentControl.GetAppearance();
contentControl.AddText("The appearance of this content control: " + appearance);
paragraph.Push(contentControl);
```
