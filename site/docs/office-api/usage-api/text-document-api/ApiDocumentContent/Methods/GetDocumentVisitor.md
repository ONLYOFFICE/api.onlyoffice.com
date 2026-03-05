# GetDocumentVisitor

Returns a visitor object for traversing the elements of the current document.

## Syntax

```javascript
expression.GetDocumentVisitor();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiDocumentVisitor

## Example

This example shows how to use a document visitor to traverse document elements.

```javascript editor-docx
const doc = Api.GetDocument();

const p1 = doc.GetElement(0);
p1.AddText('First paragraph.');

const p2 = Api.CreateParagraph();
p2.AddText('Second paragraph.');
doc.Push(p2);

const table = Api.CreateTable(2, 2);
table.GetCell(0, 0).GetContent().GetElement(0).AddText('Cell A1');
table.GetCell(1, 1).GetContent().GetElement(0).AddText('Cell B2');
doc.Push(table);

let paragraphCount = 0;
let tableCount = 0;

const visitor = doc.GetDocumentVisitor();
visitor.Paragraph = function () {
	paragraphCount += 1;
	return false;
};
visitor.Table = function () {
	tableCount += 1;
	return false;
};
visitor.Traverse(false);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Paragraphs found: ' + paragraphCount + ' (including paragraphs inside tables)');
resultParagraph.AddLineBreak();
resultParagraph.AddText('Tables found: ' + tableCount);
doc.Push(resultParagraph);

```
