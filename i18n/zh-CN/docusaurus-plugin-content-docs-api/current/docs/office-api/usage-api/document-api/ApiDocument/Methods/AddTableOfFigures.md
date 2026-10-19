# AddTableOfFigures

向当前文档添加图表目录。

:::note
请注意，如果图表目录属性未定义，将使用默认属性填充。
:::

## 语法

```javascript
expression.AddTableOfFigures(oTofPr, oRange);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTofPr | 可选 | [TofPr](../../Enumeration/TofPr.md) | \{\} | 图表目录属性。 |
| oRange | 可选 | [ApiRange](../../ApiRange/ApiRange.md) |  | 图表目录要替换的范围。如果省略，则在当前位置插入图表目录。 |

## 返回值

[ApiTableOfFigures](../../ApiTableOfFigures/ApiTableOfFigures.md) \| null \| undefined

## 示例

从文档中带有题注的绘图生成图表目录。

```javascript editor-docx
// Add a captioned chart, then add an anchor paragraph where the table of figures should appear.

// Insert the table of figures so it replaces the anchor range.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateChart("3DColumnClustered", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
drawing.SetVerAxisTitle("USD In Hundred Thousands", 20);
drawing.SetHorAxisTitle("Year", 22);
drawing.SetLegendPos("bottom");
drawing.SetShowDataLabels(false, false, true, false);
drawing.SetTitle("Financial Overview", 26);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
drawing.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
drawing.SetSeriesFill(fill, 1, false);
paragraph.AddDrawing(drawing);
paragraph.AddCaption(" - Financial Overview", "Figure", false, "Arabic", false, undefined, "hyphen");
let anchor = Api.CreateParagraph();
anchor.AddText("Table of figures goes here");
doc.Push(anchor);
let tofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
doc.AddTableOfFigures(tofPr, anchor.GetRange());
```
