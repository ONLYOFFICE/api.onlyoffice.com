# GetCount

返回 XML 管理器中自定义 XML 部件的数量。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算电子表格中工作簿中存储的 XML 块数量。

```javascript editor-xlsx
// How do I find out how many embedded XML entries exist in a spreadsheet?

// Check the total number of saved XML blocks before iterating over them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<products><item><name>Laptop</name><price>999</price></item></products>");
xmlManager.Add("<user><name>John Doe</name><email>john@example.com</email></user>");
let count = xmlManager.GetCount();
worksheet.GetRange("A1").SetValue("There are " + count + " custom XML parts in the workbook.");
```
