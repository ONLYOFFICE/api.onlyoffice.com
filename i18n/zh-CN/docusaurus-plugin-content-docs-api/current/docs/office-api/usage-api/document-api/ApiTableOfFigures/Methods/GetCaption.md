# GetCaption

返回生成图表目录所依据的题注标签（例如，"Figure"）。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetCaption();
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

获取图表目录所基于的题注标签。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the caption label that the table of figures collects its entries by.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let caption = tof.GetCaption();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Caption label: " + caption);
doc.Push(resultParagraph);
```
