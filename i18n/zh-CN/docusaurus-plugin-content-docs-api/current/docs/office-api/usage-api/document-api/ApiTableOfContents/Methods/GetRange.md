# GetRange

返回覆盖整个目录的范围。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetRange();
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

获取覆盖整个目录的区域。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Obtain the range spanning the whole table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let range = toc.GetRange();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Range class type: " + range.GetClassType());
doc.Push(resultParagraph);
```
