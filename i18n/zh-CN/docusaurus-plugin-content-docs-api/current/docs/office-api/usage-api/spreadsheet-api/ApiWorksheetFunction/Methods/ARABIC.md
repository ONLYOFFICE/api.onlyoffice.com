# ARABIC

将罗马数字转换为阿拉伯数字。

## 语法

```javascript
expression.ARABIC(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要转换的罗马数字。 |

## 返回值

number

## 示例

在电子表格中将罗马数字转换为常规数字。

```javascript editor-xlsx
// Transform text Roman numerals using the ARABIC function in a spreadsheet.

// Place the converted number into a cell for calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ARABIC("MCCL"));
```
