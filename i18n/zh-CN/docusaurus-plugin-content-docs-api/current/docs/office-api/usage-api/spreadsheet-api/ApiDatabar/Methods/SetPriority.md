# SetPriority

设置条件格式规则的优先级值。

继承自 [ApiFormatCondition.SetPriority](../../ApiFormatCondition/Methods/SetPriority.md)。

## 语法

```javascript
expression.SetPriority(Priority);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | 必需 | number |  | 优先级值（从 1 开始）。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中控制数据条格式规则相对于其他规则的计算顺序。

```javascript editor-xlsx
// How do I decide which conditional formatting rule takes precedence when multiple rules overlap in a spreadsheet?

// Resolve conflicts between overlapping formatting rules by assigning a specific priority number in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar1 = formatConditions.AddDatabar();
let dataBar2 = formatConditions.AddDatabar();

dataBar2.SetPriority(3);

let priority = dataBar2.GetPriority();

worksheet.GetRange("C1").SetValue("New priority:");
worksheet.GetRange("C2").SetValue(priority);
```
