# GetElementIndex

返回指定元素在当前文档内容中的位置（索引）。

继承自 [ApiDocumentContent.GetElementIndex](../../ApiDocumentContent/Methods/GetElementIndex.md)。

## 语法

```javascript
expression.GetElementIndex(element);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将返回其索引的文档元素（段落、表格或块级内容控件）。 |

## 返回值

Number

## 示例

确定文档内容中元素的索引。

```javascript editor-docx
// The index reflects the position of a specific element inside the document content.

// Locate a paragraph within the document content and report its index.

let doc = Api.GetDocument();
let first = Api.CreateParagraph();
first.AddText("First paragraph");
doc.Push(first);
let second = Api.CreateParagraph();
second.AddText("Second paragraph");
doc.Push(second);
let index = doc.GetElementIndex(second);
let report = Api.CreateParagraph();
report.AddText("The second paragraph is at index " + index + ".");
doc.Push(report);
```
