# IFERROR

检查第一个参数中的公式是否存在错误。如果没有错误，函数返回公式的结果；如果有错误，则返回第二个参数中指定的值。

## 语法

```javascript
expression.IFERROR(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 被检查是否有错误的值、表达式或引用。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 公式计算结果为错误时要返回的值。将计算以下错误：**#N/A**、**#VALUE!**、**#REF!**、**#DIV/0!**、**#NUM!**、**#NAME?**、**#NULL!**。 |

## 返回值

number \| string \| boolean

## 示例

当电子表格中的公式产生错误时显示自定义值。

```javascript editor-xlsx
// How do I handle errors in calculations and show a default value in a spreadsheet?

// Catch formula errors and replace them with a specified message or value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let stock = ["Stock", 0, 84];
let values = ["Total value", "$5.43", "$297.36"];
worksheet.GetRange("C1").SetValue("Unit Price");

for (let i = 0; i < stock.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(stock[i]);
}
for (let j = 0; j < values.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(values[j]);
}
for (let n = 1; n < values.length; n++) {
    let value1 = worksheet.GetRange("B" + (n + 1)).GetValue();
    let value2 = worksheet.GetRange("A" + (n + 1)).GetValue();
    worksheet.GetRange("C" + (n + 1)).SetValue(func.IFERROR(value1/value2, "Out of stock"));
}
```
