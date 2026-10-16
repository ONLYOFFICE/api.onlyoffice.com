# GetParent

返回包含当前段落的文档内容。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocument](../../ApiDocument/ApiDocument.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| null

## 示例

访问文档中包含段落的文档内容。

```javascript editor-docx
// The parent is the document content that holds the paragraph.

// Navigate from a paragraph up to its parent and count the elements the parent holds.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample paragraph.");
doc.Push(paragraph);
let parent = paragraph.GetParent();
let report = Api.CreateParagraph();
report.AddText("The parent holds " + parent.GetElementsCount() + " elements.");
doc.Push(report);
```
