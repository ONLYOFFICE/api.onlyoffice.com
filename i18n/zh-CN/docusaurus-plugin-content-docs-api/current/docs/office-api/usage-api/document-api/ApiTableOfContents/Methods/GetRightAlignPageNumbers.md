# GetRightAlignPageNumbers

返回目录中的页码是否右对齐。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetRightAlignPageNumbers();
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查目录中的页码是否右对齐。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Read whether the page numbers are aligned to the right margin.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let isRightAlign = toc.GetRightAlignPageNumbers();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Page numbers right-aligned: " + isRightAlign);
doc.Push(resultParagraph);
```
