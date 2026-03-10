# AddAboveAverage

向集合添加新的高于平均值条件格式规则。

## 语法

```javascript
expression.AddAboveAverage();
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiAboveAverage](../../ApiAboveAverage/ApiAboveAverage.md) \| null

## 示例

此示例向区域添加高于平均值条件格式。

```javascript editor-xlsx
// How to add above average conditional formatting rules to highlight cells.

// Add above average conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(92);
worksheet.GetRange("A4").SetValue(78);
worksheet.GetRange("A5").SetValue(88);
worksheet.GetRange("A6").SetValue(95);
worksheet.GetRange("A7").SetValue(72);
worksheet.GetRange("A8").SetValue(90);

let dataRange = worksheet.GetRange("A2:A8");

let formatConditions = dataRange.GetFormatConditions();

let aboveAverageCondition = formatConditions.AddAboveAverage();
if (aboveAverageCondition) {
    aboveAverageCondition.SetFillColor(Api.CreateColorFromRGB(144, 238, 144));
}

```
