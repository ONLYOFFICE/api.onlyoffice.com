# GetNext

Returns the next paragraph.

## Syntax

```javascript
expression.GetNext();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

Navigate to the next paragraph and apply bold formatting to it in a document.

```javascript editor-docx
// How do I get a reference to the paragraph that follows the current one in a document?

// Bold the second paragraph by traversing from the first paragraph in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample paragraph №1.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is just a sample paragraph №2.");
doc.Push(paragraph2);
let nextParagraph = paragraph1.GetNext();
nextParagraph.SetBold(true);
```
