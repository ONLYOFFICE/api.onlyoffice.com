# GetName

返回工作表名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索电子表格中活动工作表的名称。

```javascript editor-xlsx
// How do I read the tab name of the current sheet in a spreadsheet?

// Capture the sheet name and write it to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Name: ");
worksheet.GetRange("B1").SetValue(name);
```
