# RANDBETWEEN

返回指定数字之间的随机数。

## 语法

```javascript
expression.RANDBETWEEN(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 最小整数值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 最大整数值。 |

## 返回值

number

## 示例

此示例演示如何返回指定数字之间的随机数。

```javascript editor-xlsx
// How to get a number between indicated values.

// Use a function to return a random value between specified limits.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RANDBETWEEN(-1, 10));
```
