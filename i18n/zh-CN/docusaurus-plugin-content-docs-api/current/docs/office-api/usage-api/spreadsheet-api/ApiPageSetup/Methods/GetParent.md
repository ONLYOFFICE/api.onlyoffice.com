# GetParent

返回拥有此页面设置的工作表。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## 示例

在电子表格中获取页面设置所属的工作表。

```javascript editor-xlsx
// How do I get back to the worksheet from its page setup object in a spreadsheet?

// Access the parent worksheet of a page setup to read or change other sheet settings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
let parent = pageSetup.GetParent();
parent.GetRange("A1").SetValue("Parent sheet: " + parent.GetName());
```
