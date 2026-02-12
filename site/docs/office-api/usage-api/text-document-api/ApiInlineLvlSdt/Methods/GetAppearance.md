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

This example adds a text to the content control and gets its appearance.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
let appearance = contentControl.GetAppearance();
contentControl.AddText("The appearance of this content control: " + appearance);
paragraph.Push(contentControl);
```
