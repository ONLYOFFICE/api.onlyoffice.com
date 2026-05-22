# OCT2DEC

将八进制数转换为十进制数。

## 语法

```javascript
expression.OCT2DEC(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要转换的八进制数。 |

## 返回值

number

## 示例

在电子表格中将八进制数转换为十进制。

```javascript editor-xlsx
// How do I convert an octal value to decimal in a spreadsheet?

// Change an octal number into its decimal equivalent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2DEC(7777777634));
```
