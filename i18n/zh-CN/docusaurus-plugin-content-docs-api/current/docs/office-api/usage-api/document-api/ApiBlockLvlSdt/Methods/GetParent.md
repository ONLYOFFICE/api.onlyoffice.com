# GetParent

返回包含当前内容控件的文档内容。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocument](../../ApiDocument/ApiDocument.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| null

## 示例

访问文档中包含块级内容控件的文档内容。

```javascript editor-docx
// The parent is the document content that holds the block-level content control.

// Navigate from a block content control up to its parent and count its elements.

let doc = Api.GetDocument();
let blockSdt = Api.CreateBlockLvlSdt();
doc.Push(blockSdt);
let parent = blockSdt.GetParent();
let report = Api.CreateParagraph();
report.AddText("The parent holds " + parent.GetElementsCount() + " elements.");
doc.Push(report);
```
