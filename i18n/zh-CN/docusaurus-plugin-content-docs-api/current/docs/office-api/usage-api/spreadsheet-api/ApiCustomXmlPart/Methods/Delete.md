# Delete

从自定义 XML 管理器中删除 XML。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从电子表格中移除存储的自定义 XML 数据块。

```javascript editor-xlsx
// Permanently remove a custom XML block that is no longer needed in a spreadsheet.

// Clean up unused XML storage to keep the workbook tidy in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml1 = xmlManager.Add("<user xmlns='http://example.com'>John</user>");
let xml2 = xmlManager.Add("<customer xmlns='http://example.com'>Alex</customer>");
xml1.Delete();
let count = xmlManager.GetCount();
let xmlParts = xmlManager.GetAll();
worksheet.GetRange("A1").SetValue("Remaining XML parts: " + count);
xmlParts.forEach((part, index) => {
    worksheet.GetRange("A" + (index + 2)).SetValue("XML part: " + part.GetXml());
});
```
