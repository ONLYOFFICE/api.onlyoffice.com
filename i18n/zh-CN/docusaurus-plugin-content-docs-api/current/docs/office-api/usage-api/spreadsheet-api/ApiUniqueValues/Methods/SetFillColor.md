# SetFillColor

设置唯一值条件格式规则的填充颜色。

## 语法

```javascript
expression.SetFillColor(oColor);
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 要应用的填充颜色。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为符合唯一值格式规则的单元格应用背景颜色。

```javascript editor-xlsx
// How do I color the background of unique values highlighted by a formatting rule in a spreadsheet?

// Visually mark unique entries by giving their cells a colored fill in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetFillColor(Api.RGB(0, 255, 0));

worksheet.GetRange("C1").SetValue("Fill color set to green");
```
