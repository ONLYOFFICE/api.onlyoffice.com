# INT

将数字向下舍入到最接近的整数。

## 语法

```javascript
expression.INT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要向下舍入为整数的实数。 |

## 返回值

number

## 示例

此示例演示如何将数字向下舍入到最接近的整数。

```javascript editor-xlsx
// How to round a number down to the nearest integer.

// Use a function to round down a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.INT(2.3));
```
