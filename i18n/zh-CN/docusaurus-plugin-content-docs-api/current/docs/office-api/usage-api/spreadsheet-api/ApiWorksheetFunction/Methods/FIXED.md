# FIXED

将数字舍入到指定的小数位数，并以带或不带逗号的文本形式返回结果。

## 语法

```javascript
expression.FIXED(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要舍入并转换为文本的数字。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 小数点右边的位数。如果省略，函数将假定为 2。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 指定是否在返回的文本中显示逗号（**false** 或省略）或不显示（**true**）。 |

## 返回值

string

## 示例

此示例演示如何将数字舍入到指定的小数位数，并以带或不带逗号的文本形式返回结果。

```javascript editor-xlsx
// How to round a number with parameters.

// Use function to round a number with specified decimal points.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FIXED(1234.9, 1, false));
```
