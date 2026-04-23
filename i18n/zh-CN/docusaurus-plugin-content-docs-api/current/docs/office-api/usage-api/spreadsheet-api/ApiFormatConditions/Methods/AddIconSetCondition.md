# AddIconSetCondition

向集合添加新的图标集条件格式规则。

## 语法

```javascript
expression.AddIconSetCondition();
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiIconSetCondition](../../ApiIconSetCondition/ApiIconSetCondition.md) \| null

## 示例

此示例向区域添加图标集条件格式。

```javascript editor-xlsx
// How to add icon set conditional formatting rules to display icons based on values.

// Add icon set conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Progress Status");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);
worksheet.GetRange("A7").SetValue(60);
worksheet.GetRange("A8").SetValue(35);
worksheet.GetRange("A9").SetValue(80);

let dataRange = worksheet.GetRange("A2:A9");
let formatConditions = dataRange.GetFormatConditions();
formatConditions.AddIconSetCondition();

```
