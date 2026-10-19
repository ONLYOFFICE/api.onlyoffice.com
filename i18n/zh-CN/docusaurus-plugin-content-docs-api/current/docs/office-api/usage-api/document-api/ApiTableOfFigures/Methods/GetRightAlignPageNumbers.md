# GetRightAlignPageNumbers

返回图表目录中的页码是否右对齐。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetRightAlignPageNumbers();
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查图表目录中的页码是否右对齐。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether the page numbers are aligned to the right margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isRightAlign = tof.GetRightAlignPageNumbers();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Page numbers right-aligned: " + isRightAlign);
doc.Push(resultParagraph);
```
