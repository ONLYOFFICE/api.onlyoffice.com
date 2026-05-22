# GetFullName

返回当前打开文件的完整名称。

## 语法

```javascript
expression.GetFullName();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索电子表格中当前打开文档的完整文件路径。

```javascript editor-xlsx
// How do I display the full name and location of the current file in a spreadsheet?

// Write the entire file path into a cell so the source is always visible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let name = Api.GetFullName();
worksheet.GetRange("B1").SetValue("File name: " + name);
```
