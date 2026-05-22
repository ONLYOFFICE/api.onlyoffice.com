# GetDocumentVisitor

返回用于遍历当前文档元素的访问器对象。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

继承自 [ApiDocumentContent.GetDocumentVisitor](../../ApiDocumentContent/Methods/GetDocumentVisitor.md)。

## 示例

使用文档访问者遍历文档中的所有段落和表格。

```javascript editor-docx
// How do I walk through every element in a document content with a visitor in a document?

// Count paragraphs and tables automatically without iterating element indexes by hand.

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
