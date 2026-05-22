# GetInternalId

返回当前内容控件的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取分配给文档中内容控件的唯一标识符。

```javascript editor-docx
// How do I retrieve the unique ID of a content control in a document?

// Display the ID of a content control to identify it programmatically in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);

const internalId = blockLvlSdt.GetInternalId();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal ID: " + internalId);
doc.Push(paragraph);
```
