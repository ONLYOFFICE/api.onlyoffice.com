# AddTableOfFigures

向当前文档添加图表目录。

## 语法

```javascript
expression.AddTableOfFigures(oTofPr, bReplace);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTofPr | 可选 | [TofPr](../../Enumeration/TofPr.md) | \{\} | 图表目录属性。💡 请注意，如果图表目录属性未定义，将使用默认属性填充。 |
| bReplace | 可选 | boolean | true | 指定是替换选中的图表目录还是添加新的图表目录。 |

## 返回值

boolean

## 示例

从文档中带有题注的绘图生成图表目录。

```javascript editor-docx
// How do I build a table of figures based on chart captions in a document?

// Configure page numbers, leader dots, and label numbers when inserting a table of figures in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
drawing.SetVerAxisTitle("USD In Hundred Thousands", 10);
drawing.SetHorAxisTitle("Year", 11);
drawing.SetLegendPos("bottom");
drawing.SetShowDataLabels(false, false, true, false);
drawing.SetTitle("Financial Overview", 13);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
drawing.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
drawing.SetSeriesFill(fill, 1, false);
paragraph.AddDrawing(drawing);
paragraph.AddCaption(" - Financial Overview", "Figure", false, "Arabic", false, undefined, "hyphen");
let tofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
doc.AddTableOfFigures(tofPr);
```
