# SIN

返回角度的正弦值。

## 语法

```javascript
expression.SIN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其正弦值的弧度角。如果参数以度为单位，请将其乘以 *PI()/180*。 |

## 返回值

number

## 示例

此示例演示如何返回角的正弦。

```javascript editor-xlsx
// How to calaculate the sine of a number.

// Use a function to get a sine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIN(0.5));
```
