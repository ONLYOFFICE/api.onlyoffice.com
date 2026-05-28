# GetAxisColor

返回数据条条件格式规则的轴颜色。

## 语法

```javascript
expression.GetAxisColor();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

读取电子表格中条形规则中点轴线的颜色设置。

```javascript editor-xlsx
// How do I find out what color the axis line has in a data bar rule in a spreadsheet?

// Inspect the axis line color to verify or copy bar formatting settings in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let axisColor = dataBar.GetAxisColor();

worksheet.GetRange("C1").SetValue("Has Axis Color:");
worksheet.GetRange("C2").SetValue(axisColor ? "Yes" : "No");
```
