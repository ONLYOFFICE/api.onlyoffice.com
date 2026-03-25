# NUMBERVALUE

以与区域设置无关的方式将文本转换为数字。

## 语法

```javascript
expression.NUMBERVALUE(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 表示要转换的数字的字符串。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 字符串中用作小数分隔符的字符。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 字符串中用作分组分隔符的字符。 |

## 返回值

number

## 示例

此示例演示如何以与区域设置无关的方式将文本转换为数字。

```javascript editor-xlsx
// How to get a number from text.

// Use a function to convert a text to a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NUMBERVALUE("2.500,27", ",", "."));
```
