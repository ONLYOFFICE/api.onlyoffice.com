# SQRT

返回数字的平方根。

## 语法

```javascript
expression.SQRT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其平方根的数字。 |

## 返回值

number

## 示例

计算数字的平方根。

```javascript editor-xlsx
// The SQRT function returns the positive square root of a numeric value.

// Get the square root of 100 and place it in cell A1.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRT(100));
```
