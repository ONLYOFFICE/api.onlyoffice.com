# EVEN

将正数向上舍入、负数向下舍入到最接近的偶数整数。

## 语法

```javascript
expression.EVEN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要向上舍入的值。 |

## 返回值

number

## 示例

此示例演示如何将正数向上舍入、负数向下舍入到最接近的偶数整数。

```javascript editor-xlsx
// How to round up a number.

// Use function to round up positive/negative numbers.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EVEN(15.67));
```
