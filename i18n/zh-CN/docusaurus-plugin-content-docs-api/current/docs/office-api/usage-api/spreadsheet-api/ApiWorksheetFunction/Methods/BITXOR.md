# BITXOR

返回两个数字的按位"异或"运算结果。

## 语法

```javascript
expression.BITXOR(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要计算的二进制数的第一个十进制表示形式。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要计算的二进制数的第二个十进制表示形式。 |

## 返回值

number

## 示例

此示例演示如何返回两个数的按位 XOR 运算结果。

```javascript editor-xlsx
// How to get a result from XOR operation.

// Use function to calculate bitwise "XOR" operation.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITXOR(5, 3));
```
