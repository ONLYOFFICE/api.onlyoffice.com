# GetPosInParent

Returns the position (index) of the current inline content control within its parent element.

## Syntax

```javascript
expression.GetPosInParent();
```

`expression` - A variable that represents an [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Determine the index of an inline content control within its parent.

```javascript editor-docx
// The position is the inline content control's index within its parent paragraph.

// Read an inline content control's position within its paragraph and report it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Before ");
let inlineSdt = Api.CreateInlineLvlSdt();
inlineSdt.AddText("control");
paragraph.AddInlineLvlSdt(inlineSdt);
let position = inlineSdt.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The inline control is at position " + position + ".");
doc.Push(report);
```
