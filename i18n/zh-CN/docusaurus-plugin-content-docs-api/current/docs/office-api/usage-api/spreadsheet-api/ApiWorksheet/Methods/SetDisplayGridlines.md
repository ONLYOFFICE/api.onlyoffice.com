# SetDisplayGridlines

指定是否必须显示当前工作表网格线。

## 语法

```javascript
expression.SetDisplayGridlines(isDisplayed);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDisplayed | 必需 | boolean |  | 指定是否必须显示当前工作表网格线。默认值为 **true**。 |

## 返回值

boolean

## 示例

在电子表格中显示或隐藏工作表上的网格线。

```javascript editor-xlsx
// How do I turn gridlines on or off in a spreadsheet?

// Control whether the cell border lines are visible on the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
worksheet.SetDisplayGridlines(false);
```
