# UpdateAllTOF

更新当前文档中的所有图表目录。

## 语法

```javascript
expression.UpdateAllTOF(bOnlyPageNumbers);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bOnlyPageNumbers | 可选 | boolean | false | 指定仅更新页码。 |

## 返回值

boolean

## 示例

在插入新绘图后刷新文档中的所有图表目录。

```javascript editor-docx
// How do I keep tables of figures current when new images or shapes are added in a document?

// Synchronize figure captions and page numbers across every table of figures in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
paragraph.AddCaption(" - Financial Overview", "Figure", false, "Arabic", false, undefined, "hyphen");
let tofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
doc.AddTableOfFigures(tofPr);
paragraph = Api.CreateParagraph();
let fill = Api.CreateSolidFill(Api.RGB(104, 155, 104));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
doc.AddElement(2, paragraph);
paragraph.AddCaption(" - Sample shape", "Figure", false, "Arabic", false, undefined, "hyphen");
doc.UpdateAllTOF(false);
```
