# SetCategoryName

为指定的图表类别设置名称。

## 语法

```javascript
expression.SetCategoryName(sName, nCategory);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 将设置到指定图表类别的名称。 |
| nCategory | 必需 | number |  | 图表类别的索引。 |

## 返回值

boolean

## 示例

重命名文档中图表上的分类标签。

```javascript editor-docx
// How do I change the name of a specific category on a chart in a document?

// Update a category label to reflect revised data ranges or corrected axis names in a document.

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
chart.SetCategoryName("2013", 0);
```
