# COS

返回角度的余弦值。

## 语法

```javascript
expression.COS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其余弦值的弧度角。 |

## 返回值

number

## 示例

此示例演示如何获取角的余弦。

```javascript editor-xlsx
// How to find a cosine.

// Use function to get the cosine of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COS(1.5));
```
