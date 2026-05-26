# GetContent

Returns the content of the current container.

## Syntax

```javascript
expression.GetContent();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

Access the inner content of a content control to add text to it in a document.

```javascript editor-docx
// How do I add text to the inside of a content control in a document?

// Write additional text into an existing content control by reading its contents in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.GetContent().GetElement(1).AddText("This is a content of the container.");
```
