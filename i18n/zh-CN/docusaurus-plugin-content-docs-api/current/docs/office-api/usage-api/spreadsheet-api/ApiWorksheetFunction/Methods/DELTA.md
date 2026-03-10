# DELTA

测试两个数字是否相等。如果数字相等，函数返回 1，否则返回 0。

## 语法

```javascript
expression.DELTA(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 第一个数字。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 第二个数字。 |

## 返回值

number

## 示例

此示例演示如何测试两个数字是否相等。如果数字相等，函数返回 1，否则返回 0。

```javascript editor-xlsx
// How to compare two numbers.

// Use function to compare two numbers if it returns 1 they are equal else 0.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DELTA(23, 24));
```
