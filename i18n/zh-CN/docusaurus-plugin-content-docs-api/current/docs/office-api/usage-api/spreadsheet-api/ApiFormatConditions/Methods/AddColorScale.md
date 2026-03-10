# AddColorScale

向集合添加新的色阶条件格式规则。

## 语法

```javascript
expression.AddColorScale(ColorScaleType);
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ColorScaleType | 可选 | number | 3 | 色阶类型（2 表示双色色阶，3 表示三色色阶）。 |

## 返回值

[ApiColorScale](../../ApiColorScale/ApiColorScale.md) \| null

## 示例

此示例向区域添加色阶条件格式。

```javascript editor-xlsx
// How to add color scale conditional formatting rules to highlight cells with gradient colors.

// Add color scale conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance Data");
worksheet.GetRange("A2").SetValue(15);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(23);
worksheet.GetRange("A5").SetValue(89);
worksheet.GetRange("A6").SetValue(45);
worksheet.GetRange("A7").SetValue(91);
worksheet.GetRange("A8").SetValue(12);
worksheet.GetRange("A9").SetValue(78);

let dataRange = worksheet.GetRange("A2:A9");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddColorScale(3);

```
