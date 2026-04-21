# GetDocumentVisitor

返回用于遍历当前文档元素的访问器对象。

继承自 [ApiDocumentContent.GetDocumentVisitor](../../ApiDocumentContent/Methods/GetDocumentVisitor.md)。

## 示例

在文档中使用文档访问者遍历文档元素。

```javascript editor-docx
// How can I get the document visitor using a document content in a document?

// Get the document visitor for a document content in a document.

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
