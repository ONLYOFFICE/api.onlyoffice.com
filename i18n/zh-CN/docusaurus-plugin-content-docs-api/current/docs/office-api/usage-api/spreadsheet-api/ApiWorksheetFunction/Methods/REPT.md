# REPT

将文本重复指定的次数。使用此函数用文本字符串的多个实例填充单元格。

## 语法

```javascript
expression.REPT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将被重复的文本。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定重复文本次数的正数。 |

## 返回值

string

## 示例

在电子表格中重复文本多次。

```javascript editor-xlsx
// How do I duplicate text in a cell in a spreadsheet?

// Fill a cell with copies of the same text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPT("Text", 3));
```
