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

在电子表格中跨单元格应用渐变颜色范围以一目了然地可视化高值和低值。

```javascript editor-xlsx
// How do I shade a column of numbers from one color to another based on their relative size in a spreadsheet?

// Give a range a heat-map appearance by mapping cell values to a color spectrum in a spreadsheet.

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
