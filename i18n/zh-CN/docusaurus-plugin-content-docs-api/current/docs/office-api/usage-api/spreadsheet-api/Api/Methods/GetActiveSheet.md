# GetActiveSheet

返回表示活动工作表的对象。

## 语法

```javascript
expression.GetActiveSheet();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## 示例

访问当前打开的工作表以在电子表格中读取或写入数据。

```javascript editor-xlsx
// How do I work with the sheet that is currently visible in a spreadsheet?

// Target the active tab to place values into cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");
```
