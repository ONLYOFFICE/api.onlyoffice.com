# GetUseHyperlinks

返回条目是否设置为超链接格式。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetUseHyperlinks();
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查图表目录条目是否设置为超链接格式。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether the entries link to their target captions.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isUseHyperlinks = tof.GetUseHyperlinks();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Entries use hyperlinks: " + isUseHyperlinks);
doc.Push(resultParagraph);
```
