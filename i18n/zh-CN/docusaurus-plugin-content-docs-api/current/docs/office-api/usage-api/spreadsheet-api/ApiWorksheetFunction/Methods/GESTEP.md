# GESTEP

测试数字是否大于阈值。如果数字大于或等于阈值，函数返回 1，否则返回 0。

## 语法

```javascript
expression.GESTEP(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要与步长值进行比较的值。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 阈值。 |

## 返回值

number

## 示例

此示例演示如何测试数字是否大于阈值。如果数字大于或等于阈值，函数返回 1，否则返回 0。

```javascript editor-xlsx
// How to compare a number with a threshold value.

// Use a function to find out whether a value greater than a limit.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GESTEP(-2, 2));
```
