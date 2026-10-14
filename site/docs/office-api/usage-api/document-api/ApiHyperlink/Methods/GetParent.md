# GetParent

Returns the parent element (a paragraph or an inline content control) that directly contains the current hyperlink.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## Example

Access the element that directly contains a hyperlink.

```javascript editor-docx
// The parent is the paragraph that directly contains the hyperlink.

// Navigate from a hyperlink up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Visit our website");
let hyperlink = paragraph.AddHyperlink("https://www.example.com", "Example");
let parent = hyperlink.GetParent();
parent.SetBold(true);
```
