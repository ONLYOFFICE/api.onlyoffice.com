# GetTitle

返回图表标题文本。

## 语法

```javascript
expression.GetTitle();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

This example shows how to get the chart title text.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange('B1').SetValue(2014);
worksheet.GetRange('C1').SetValue(2015);
worksheet.GetRange('A2').SetValue('Revenue');
worksheet.GetRange('B2').SetValue(200);
worksheet.GetRange('C2').SetValue(240);

const chart = worksheet.AddChart(
	'Sheet1!A1:C2',
	true, 'bar3D', 2,
	100 * 36000, 70 * 36000, 0, 0, 4, 0
);
chart.SetTitle('Financial Overview', 13);

const chartTitle = chart.GetTitle();
worksheet.GetRange('E1').SetValue('Chart Title: ' + chartTitle);

```
