# SetPrintTitleRows

设置在每个打印页顶部重复的行。传递空字符串可将其清除。

## 语法

```javascript
expression.SetPrintTitleRows(sRange);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 要重复的行（例如，"$1:$1"）。空字符串会清除打印标题行。 |

## 返回值

boolean

## 示例

在电子表格中在每个打印页顶部重复标题行。

```javascript editor-xlsx
// How do I print the header row on every page in a spreadsheet?

// Keep the top rows visible on each printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleRows("$1:$1");
```
