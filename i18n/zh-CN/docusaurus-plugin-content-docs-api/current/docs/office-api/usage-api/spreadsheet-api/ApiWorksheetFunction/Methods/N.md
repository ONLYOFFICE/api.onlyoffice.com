# N

将值转换为数字，日期转换为序列号，**true** 转换为 1，错误转换为 [ErrorValue](../../Enumeration/ErrorValue.md)，其他任何值转换为 0（零）。

## 语法

```javascript
expression.N(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 要转换的值。值可以是逻辑值、文本或数字。 |

## 返回值

number

## 示例

在电子表格中将任何值转换为数字。

```javascript editor-xlsx
// Transform values into numeric form for calculations in a spreadsheet.

// Change boolean values and dates into numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.N(false));
```
