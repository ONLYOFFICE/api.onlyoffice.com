# SetVisible

设置工作表的可见性状态。

## 语法

```javascript
expression.SetVisible(isVisible);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isVisible | 必需 | boolean |  | 指定工作表是否可见。 |

## 返回值

boolean

## 示例

在电子表格中显示或隐藏工作表。

```javascript editor-xlsx
// How do I make a sheet visible or hidden from other users in a spreadsheet?

// Control whether a sheet appears in the tab list or remains inaccessible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
worksheet.GetRange("A1").SetValue("The current worksheet is visible.");
```
