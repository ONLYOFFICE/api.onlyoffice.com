# GetParent

Returns the document content that contains the current table.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| null

## Example

Access the document content that contains a table.

```javascript editor-docx
// The parent is the document content that holds the table.

// Navigate from a table up to its parent and add a caption paragraph next to it.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let parent = table.GetParent();
let caption = Api.CreateParagraph();
caption.AddText("The parent holds " + parent.GetElementsCount() + " elements.");
doc.Push(caption);
```
