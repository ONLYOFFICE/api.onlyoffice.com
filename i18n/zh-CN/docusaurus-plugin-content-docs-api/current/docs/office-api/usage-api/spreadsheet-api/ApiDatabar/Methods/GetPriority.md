# GetPriority

返回条件格式规则的优先级值。

## 语法

```javascript
expression.GetPriority();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例获取条件格式规则的优先级。

```javascript editor-xlsx
// How to retrieve the priority value from conditional formatting rules.

// Get conditional formatting rule priority.

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

let priority = condition1.GetPriority();

worksheet.GetRange("C1").SetValue("Rule priority:");
worksheet.GetRange("C2").SetValue(priority);

```
