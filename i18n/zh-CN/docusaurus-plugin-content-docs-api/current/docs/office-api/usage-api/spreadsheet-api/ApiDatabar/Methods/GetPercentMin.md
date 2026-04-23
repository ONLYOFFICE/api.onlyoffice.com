# GetPercentMin

返回数据条的百分比最小值。

## 语法

```javascript
expression.GetPercentMin();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何从数据条条件格式规则获取最小百分比长度。

```javascript editor-xlsx
// How to check the minimum length setting of a data bar.

// Get the minimum percentage length of a data bar conditional formatting rule.

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

let percentMin = dataBar.GetPercentMin();

worksheet.GetRange("C1").SetValue("Min Percent:");
worksheet.GetRange("C2").SetValue(percentMin + "%");

```
