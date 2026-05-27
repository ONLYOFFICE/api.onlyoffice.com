# SetSeriaName

为指定的图表系列设置名称。

## 语法

```javascript
expression.SetSeriaName(sName, nSeria);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 将设置到指定图表系列的名称。 |
| nSeria | 必需 | number |  | 图表系列的索引。 |

## 返回值

boolean

## 示例

重命名文档中图表中的数据系列。

```javascript editor-docx
// How do I change the label of a chart series in a document?

// Replace an existing series label with a custom name so the legend reflects the correct meaning in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetSeriaName("Projected Sales", 0);
```
