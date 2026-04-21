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

获取文档中块级容器的内部 ID。

```javascript editor-docx
// How to get the internal id for a block-level content control in a document?

// Get the internal id and display the result in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);

const internalId = blockLvlSdt.GetInternalId();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal ID: " + internalId);
doc.Push(paragraph);
```
