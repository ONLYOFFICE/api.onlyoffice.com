# GetIncludePageNumbers

返回图表目录中是否显示页码。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetIncludePageNumbers();
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查图表目录是否显示页码。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether page numbers are included in the table of figures entries.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isInclude = tof.GetIncludePageNumbers();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Page numbers included: " + isInclude);
doc.Push(resultParagraph);
```
