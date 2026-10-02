# GetDocumentVisitor

返回用于遍历当前文档元素的访问器对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

继承自 [ApiDocumentContent.GetDocumentVisitor](../../ApiDocumentContent/Methods/GetDocumentVisitor.md)。

## 语法

```javascript
expression.GetDocumentVisitor();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

ApiDocumentVisitor

## 示例

在文档中使用访问器收集每个段落的文本并列出结果。

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
