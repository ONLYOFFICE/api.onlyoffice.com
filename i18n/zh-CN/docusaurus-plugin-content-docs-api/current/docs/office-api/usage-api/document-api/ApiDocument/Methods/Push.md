# Push

推送段落或表格以将其实际添加到文档中。

继承自 [ApiDocumentContent.Push](../../ApiDocumentContent/Methods/Push.md)。

## 语法

```javascript
expression.Push(oElement);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将推送到文档的元素类型。 |

## 返回值

boolean

## 示例

在文档末尾追加新段落。

```javascript editor-docx
// How do I add multiple paragraphs one after another in a document?

// Build a sequence of numbered paragraphs by pushing each one onto the document in a document.

const doc = Api.GetDocument();

const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
	const newParagraph = Api.CreateParagraph();
	newParagraph.AddText("This is " + (i + 1) + " paragraph.");
	doc.Push(newParagraph);
}
```
