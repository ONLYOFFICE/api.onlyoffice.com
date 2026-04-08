# AddTop10

向集合添加新的前 10 项条件格式规则。

## 语法

```javascript
expression.AddTop10();
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTop10](../../ApiTop10/ApiTop10.md) \| null

## 示例

此示例向区域添加前 10 项条件格式。

```javascript editor-xlsx
// How to add top 10 conditional formatting rules to highlight highest values.

// Add top 10 conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Figures");
worksheet.GetRange("A2").SetValue(120);
worksheet.GetRange("A3").SetValue(380);
worksheet.GetRange("A4").SetValue(250);
worksheet.GetRange("A5").SetValue(450);
worksheet.GetRange("A6").SetValue(180);
worksheet.GetRange("A7").SetValue(320);
worksheet.GetRange("A8").SetValue(90);
worksheet.GetRange("A9").SetValue(410);
worksheet.GetRange("A10").SetValue(200);
worksheet.GetRange("A11").SetValue(480);
worksheet.GetRange("A12").SetValue(560);

let dataRange = worksheet.GetRange("A2:A12");

let formatConditions = dataRange.GetFormatConditions();

let top10Condition = formatConditions.AddTop10();
if (top10Condition) {
    top10Condition.SetFillColor(Api.CreateColorFromRGB(255, 215, 0));
}

```
