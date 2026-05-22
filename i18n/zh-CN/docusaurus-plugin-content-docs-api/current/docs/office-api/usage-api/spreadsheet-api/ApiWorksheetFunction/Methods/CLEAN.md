# CLEAN

从文本中删除所有不可打印的字符。

## 语法

```javascript
expression.CLEAN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要从中删除不可打印字符的字符串。 |

## 返回值

string

## 示例

从电子表格中导入或粘贴的文本移除不可见的控制字符。

```javascript editor-xlsx
// Eliminate all nonprintable characters that don't display properly in your cells in a spreadsheet.

// Purify text data by stripping out hidden formatting and special characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CLEAN("\ntext"));
```
