# SetPriority

设置条件格式规则的优先级值。

## 语法

```javascript
expression.SetPriority(Priority);
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | 必需 | number |  | 优先级值（从 1 开始）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置条件格式规则的优先级。

```javascript editor-xlsx
// How to change the priority value of conditional formatting rules.

// Set conditional formatting rule priority.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original priority:");
worksheet.GetRange("C2").SetValue(condition1.GetPriority());

condition1.SetPriority(5);

worksheet.GetRange("C4").SetValue("New priority:");
worksheet.GetRange("C5").SetValue(condition1.GetPriority());

```
