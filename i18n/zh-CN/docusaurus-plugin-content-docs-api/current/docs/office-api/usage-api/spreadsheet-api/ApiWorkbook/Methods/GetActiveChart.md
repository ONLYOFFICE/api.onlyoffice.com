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

此示例展示如何从工作簿获取当前活动的图表

```javascript editor-xlsx
// const workbook = Api.GetActiveWorkbook();
// const worksheet = workbook.GetActiveSheet();
// worksheet.GetRange('A1').SetValue('John Smith');
// worksheet.GetRange('B1').SetValue('Mark Pottato');
// worksheet.GetRange('A2').SetValue(10);
// worksheet.GetRange('B2').SetValue(12);

// const chart = worksheet.AddChart('Sheet1!A1:B2', true, 'bar3D', 42, 100 * 36000, 70 * 36000, 2, 0, 2, 0);
// chart.SetTitle('Full Names Length', 15);

/*

Can not get active chart yet cuz chart.Select methods does not working

chart.Select();
const activeChart = workbook.GetActiveChart();

*/

```
