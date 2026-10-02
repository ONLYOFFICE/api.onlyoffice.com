# GetPTCondition

返回数据透视表条件对象。

继承自 [ApiFormatCondition.GetPTCondition](../../ApiFormatCondition/Methods/GetPTCondition.md)。

## 语法

```javascript
expression.GetPTCondition();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

PTCondition \| null

## 示例

在电子表格中检查图标集规则是否与数据透视表条件关联。

```javascript editor-xlsx
// How do I find out if an icon set formatting rule is tied to a pivot table in a spreadsheet?

// Confirm whether a pivot table condition is associated with an icon set formatting rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(92);
worksheet.GetRange("A3").SetValue(72);
worksheet.GetRange("A4").SetValue(52);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let ptCondition = iconCondition.GetPTCondition();

worksheet.GetRange("B1").SetValue("PT Condition: " + (ptCondition !== null ? "Yes" : "No"));
```
