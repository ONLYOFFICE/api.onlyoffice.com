# DEGREES

将弧度转换为角度。

## 语法

```javascript
expression.DEGREES(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要转换的弧度角。 |

## 返回值

number

## 示例

此示例演示如何将弧度转换为度。

```javascript editor-xlsx
// How to convert radians to degrees.

// Use function to get degrees from radians.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEGREES(1.5));
```
