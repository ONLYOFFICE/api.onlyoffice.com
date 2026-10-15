# RemoveAllElements

从当前文档或当前文档元素中移除所有元素。

:::note
当所有元素被移除时，会自动创建一个新的空段落。如果要向此段落添加内容，请使用 [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md) 方法。
:::

继承自 [ApiDocumentContent.RemoveAllElements](../../ApiDocumentContent/Methods/RemoveAllElements.md)。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中移除所有内容元素。

```javascript editor-docx
// How do I clear every element out of a document?

// Start fresh by wiping all existing content before adding new paragraphs in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("We removed all document elements (including the first paragraph, created by default). ");
paragraph.AddText("This paragraph now took its place.");
doc.AddElement(0, paragraph);
```
