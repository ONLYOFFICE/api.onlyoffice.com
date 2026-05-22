# GetActiveChart

返回工作簿的活动图表。

## 语法

```javascript
expression.GetActiveChart();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChart](../../ApiChart/ApiChart.md) \| null

## 示例

读取电子表格中当前选定图表的标题。

```javascript editor-xlsx
// How do I find out which chart is active right now in a spreadsheet?

// Confirm the selected chart by retrieving its title and writing it to a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue('John Smith');
worksheet.GetRange('B1').SetValue('Mark Pottato');
worksheet.GetRange('A2').SetValue(10);
worksheet.GetRange('B2').SetValue(12);

const chart = worksheet.AddChart(
	'Sheet1!A1:B2',
	true,
	'bar3D', 42,
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(70),
	0, 0, 3, Api.MillimetersToEmus(1)
);
chart.SetTitle('Full Names Length', 15);
chart.Select();

const activeChart = workbook.GetActiveChart();
if (activeChart) {
	const chartTitle = activeChart.GetTitle();
	worksheet.GetRange('D1').SetValue('Active Chart Title: ' + chartTitle);
} else {
	worksheet.GetRange('D1').SetValue('No active chart found');
}
```
