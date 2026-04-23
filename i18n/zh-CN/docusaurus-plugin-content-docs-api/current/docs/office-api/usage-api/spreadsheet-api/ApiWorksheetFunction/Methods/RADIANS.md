# RADIANS

将角度转换为弧度。

## 语法

```javascript
expression.RADIANS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要转换的角度（以度为单位）。 |

## 返回值

number

## 示例

此示例演示如何将度转换为弧度。

```javascript editor-xlsx
// How to get radians from degree.

// Use a function to convert degrees to radians.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RADIANS(90));
```
