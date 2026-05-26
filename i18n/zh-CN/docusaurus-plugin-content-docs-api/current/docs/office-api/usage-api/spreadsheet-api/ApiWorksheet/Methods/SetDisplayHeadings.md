# SetDisplayHeadings

指定是否必须显示当前工作表的行/列标题。

## 语法

```javascript
expression.SetDisplayHeadings(isDisplayed);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDisplayed | 必需 | boolean |  | 指定是否必须显示当前工作表的行/列标题。默认值为 **true**。 |

## 返回值

boolean

## 示例

在电子表格中显示或隐藏工作表上的行列标题。

```javascript editor-xlsx
// How do I toggle the row and column headers on or off in a spreadsheet?

// Control whether the letter and number labels along the edges of the sheet are visible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);
```
