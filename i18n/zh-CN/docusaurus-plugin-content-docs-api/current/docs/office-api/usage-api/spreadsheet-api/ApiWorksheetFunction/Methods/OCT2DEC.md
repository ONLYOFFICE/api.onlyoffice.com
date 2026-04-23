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

此示例演示如何将八进制数转换为十进制数。

```javascript editor-xlsx
// How to get a decimal number from an octal.

// Use a function to convert an octal to a decimal number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2DEC(7777777634));
```
