# GetParent

返回包含当前表格的文档内容。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocument](../../ApiDocument/ApiDocument.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| null

## 示例

访问文档中包含表格的文档内容。

```javascript editor-docx
// The parent is the document content that holds the table.

// Navigate from a table up to its parent and add a caption paragraph next to it.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let parent = table.GetParent();
let caption = Api.CreateParagraph();
caption.AddText("The parent holds " + parent.GetElementsCount() + " elements.");
doc.Push(caption);
```
