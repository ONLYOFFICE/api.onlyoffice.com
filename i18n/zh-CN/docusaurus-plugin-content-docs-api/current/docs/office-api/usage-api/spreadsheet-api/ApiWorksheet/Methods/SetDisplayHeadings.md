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

此方法不返回任何数据。

## 示例

此示例指定是否必须显示工作表的行/列标题。

```javascript editor-xlsx
// How to set whether sheet headings should be displayed or not.

// Set a boolean value representing whether to display row/column headings or not.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);

```
