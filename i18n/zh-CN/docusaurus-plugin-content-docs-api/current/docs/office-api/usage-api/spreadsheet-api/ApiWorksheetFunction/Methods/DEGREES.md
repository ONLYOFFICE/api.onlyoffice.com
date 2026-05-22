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

在电子表格中将角度测量从弧度转换为度。

```javascript editor-xlsx
// What is a radian value expressed in degrees in a spreadsheet?

// Transform radian angles into their degree equivalents in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEGREES(1.5));
```
