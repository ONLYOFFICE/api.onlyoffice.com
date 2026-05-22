# SetMinPointValue

设置数据条最小值条件的值。

## 语法

```javascript
expression.SetMinPointValue(value);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string \| number |  | 最小值条件的值。 |

## 返回值

此方法不返回任何数据。

## 示例

指定数据条在电子表格中开始出现的下限阈值。

```javascript editor-xlsx
// How do I set the exact number that represents the minimum bar length in a spreadsheet?

// Start the data bar scale at a specific value so bars below that point are not shown in a spreadsheet.

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

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetMinPointValue() || "Auto");

dataBar.SetMinPointValue(50);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetMinPointValue() || "Auto");
```
