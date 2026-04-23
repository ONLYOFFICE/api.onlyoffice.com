# MROUND

返回舍入到所需倍数的数字。

## 语法

```javascript
expression.MROUND(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要舍入的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要将数字舍入到的倍数。 |

## 返回值

number

## 示例

此示例演示如何返回舍入到所需倍数的数字。

```javascript editor-xlsx
// How to round the number.

// Use a function to round the number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MROUND(14.35, 0.4));
```
