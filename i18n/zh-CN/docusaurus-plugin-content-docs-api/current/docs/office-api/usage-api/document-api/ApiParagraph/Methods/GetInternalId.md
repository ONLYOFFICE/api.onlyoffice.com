# GetInternalId

返回当前内容段落的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索分配给文档中段落的唯一内部标识符。

```javascript editor-docx
// How do I obtain the internal ID of a paragraph in a document?

// Display the internal ID alongside the paragraph text to identify it in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is a sample paragraph.');

const internalId = paragraph.GetInternalId();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('First paragraph internal ID: ' + internalId);
doc.Push(paragraph2);
```
