# CSC

返回角度的余割值。

## 语法

```javascript
expression.CSC(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其余割值的弧度角。 |

## 返回值

number

## 示例

此示例演示如何获取角的余割。

```javascript editor-xlsx
// How to return cosecant.

// Use function to get the cosecant of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSC(0.785398));
```
