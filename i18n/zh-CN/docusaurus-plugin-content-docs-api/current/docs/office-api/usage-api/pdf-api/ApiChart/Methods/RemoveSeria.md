# RemoveSeria

从当前图表中删除指定的系列。

## 语法

```javascript
expression.RemoveSeria(nSeria);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeria | 必需 | number |  | 图表系列的索引。 |

## 返回值

boolean

## 示例

How to delete a chart seria indicating its index.

```javascript editor-pdf
// Create a chart then delete a seria from it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.RemoveSeria(1);
chart.SetTitle("The Estimated Costs series was removed from the current chart.");
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 0, false);
page.AddObject(chart);

```
