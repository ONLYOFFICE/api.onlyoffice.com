# GetLeftBorder

Returns the left border of the current paragraph.

## Syntax

```javascript
expression.GetLeftBorder();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Border](../../Enumeration/Border.md) \| undefined

## Example

Retrieve the left border settings applied to a paragraph in a document.

```javascript editor-docx
// How do I read the left border from a paragraph's formatting in a document?

// Useful when you need to inspect border details such as type and size drawn to the left of a paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a left border.");
let border = paraPr.GetLeftBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Left border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);
```
