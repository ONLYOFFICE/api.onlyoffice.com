# ACOS

返回数字的反余弦值，以弧度表示，范围从 0 到 Pi。反余弦是其余弦值为参数中指定数字的角度。

## 语法

```javascript
expression.ACOS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 角的余弦值。必须在 -1 到 1 之间。 |

## 返回值

number

## 示例

此示例演示如何返回数字的反余弦，以弧度表示，范围从 0 到 Pi。反余弦是余弦值为参数中指定数字的角。

```javascript editor-xlsx
// How to get an arccosine of a number and display it in the worksheet.

// Get a function that gets arccosine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOS(0));
```
