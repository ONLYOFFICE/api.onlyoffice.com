# GetDocumentVisitor

Returns a visitor object for traversing the elements of the current document.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

Inherited from [ApiDocumentContent.GetDocumentVisitor](../../ApiDocumentContent/Methods/GetDocumentVisitor.md).

## Syntax

```javascript
expression.GetDocumentVisitor();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiDocumentVisitor

## Example

Collect text from every paragraph using a visitor and list the results in a document.

```javascript editor-docx
// How do I traverse all paragraphs and gather their text in a document?

// Aggregate paragraph content into a summary paragraph without iterating elements manually in a document.

const doc = Api.GetDocument();

const p1 = doc.GetElement(0);
p1.AddText('Text from the first paragraph.');

const p2 = Api.CreateParagraph();
p2.AddText('Document visitor example.');
doc.Push(p2);

const texts = [];
const visitor = doc.GetDocumentVisitor();
visitor.Text = function (text) {
	texts.push(text);
	return false;
};
visitor.Traverse(false);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Collected text:\n');
texts.forEach(function (text) {
	resultParagraph.AddText(' - ' + text + '\n');
});
doc.Push(resultParagraph);
```
