# GetRange

返回覆盖整个图表目录的范围。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetRange();
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

获取覆盖整个图表目录的区域。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Obtain the range spanning the whole table of figures.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let range = tof.GetRange();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Range class type: " + range.GetClassType());
doc.Push(resultParagraph);
```
