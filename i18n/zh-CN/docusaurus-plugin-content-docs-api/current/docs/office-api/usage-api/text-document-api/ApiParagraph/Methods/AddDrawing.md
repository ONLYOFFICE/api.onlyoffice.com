# AddDrawing

向当前段落添加图形对象（图像、形状或图表）。

## 语法

```javascript
expression.AddDrawing(oDrawing);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | 必需 | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | 将添加到当前段落的对象。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

此示例向段落添加一个图表。

```javascript editor-docx
// How to add a drawing to the paragraph.

// Add a chart to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
