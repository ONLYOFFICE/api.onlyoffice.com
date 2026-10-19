# GetParent

Returns the parent element (a paragraph or an inline content control) that directly contains the current inline content control.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## Example

Access the element that directly contains an inline content control.

```javascript editor-docx
// The parent is the paragraph that directly contains the inline content control.

// Navigate from an inline content control up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineSdt = Api.CreateInlineLvlSdt();
inlineSdt.AddText("Inline control");
paragraph.AddInlineLvlSdt(inlineSdt);
let parent = inlineSdt.GetParent();
parent.SetBold(true);
```
