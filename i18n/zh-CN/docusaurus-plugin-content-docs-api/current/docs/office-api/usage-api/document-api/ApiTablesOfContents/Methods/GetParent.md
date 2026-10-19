# GetParent

返回拥有此集合的文档。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiTablesOfContents](../ApiTablesOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocument](../../ApiDocument/ApiDocument.md)

## 示例

获取拥有目录集合的文档。

```javascript editor-docx
// Obtain the tables of contents collection from the current document.

// Return the parent document that the collection belongs to.

let doc = Api.GetDocument();
let tablesOfContents = doc.GetTablesOfContents();
let parent = tablesOfContents.GetParent();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Parent class type: " + parent.GetClassType());
doc.Push(resultParagraph);
```
