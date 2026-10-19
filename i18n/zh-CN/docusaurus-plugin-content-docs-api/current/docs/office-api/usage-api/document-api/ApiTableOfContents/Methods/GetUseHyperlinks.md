# GetUseHyperlinks

返回条目是否设置为超链接格式。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetUseHyperlinks();
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查目录条目是否设置为超链接格式。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Read whether the entries link to their target headings.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let isUseHyperlinks = toc.GetUseHyperlinks();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Entries use hyperlinks: " + isUseHyperlinks);
doc.Push(resultParagraph);
```
