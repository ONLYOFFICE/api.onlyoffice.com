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

此方法不返回任何数据。

## 示例

此示例指定是否必须显示工作表网格线。

```javascript editor-xlsx
// How to set whether sheet gridlines should be displayed or not.

// Set a boolean value representing whether to display gridlines or not.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
worksheet.SetDisplayGridlines(false);

```
