# GetPTCondition

返回数据透视表条件对象。

继承自 [ApiFormatCondition.GetPTCondition](../../ApiFormatCondition/Methods/GetPTCondition.md)。

## 语法

```javascript
expression.GetPTCondition();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

PTCondition \| null

## 示例

在电子表格中检查数据条规则是否与数据透视表条件关联。

```javascript editor-xlsx
// How do I find out if a data bar formatting rule is connected to a pivot table in a spreadsheet?

// Determine whether a conditional data bar targets a pivot table range in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let ptCondition = dataBar.GetPTCondition();

worksheet.GetRange("C1").SetValue("PT Condition:");
worksheet.GetRange("C2").SetValue(ptCondition !== null ? "Available" : "Not available");
```
