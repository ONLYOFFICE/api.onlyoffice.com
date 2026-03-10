# CONVERT

将数字从一个度量系统转换为另一个度量系统。

## 语法

```javascript
expression.CONVERT(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要转换的指定单位的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 原始度量单位。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 结果的单位。 |

## 返回值

number

## 示例

此示例演示如何将数字从一种度量系统转换为另一种度量系统。

```javascript editor-xlsx
// How to convert a number from one measurement system to another.

// Use function to convert a number from one measurement system to another.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONVERT(2, "Ibm", "kg"));
```
