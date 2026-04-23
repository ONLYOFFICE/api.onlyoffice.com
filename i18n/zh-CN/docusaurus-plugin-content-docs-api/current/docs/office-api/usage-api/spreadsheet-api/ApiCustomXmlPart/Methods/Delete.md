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

此示例演示如何删除自定义 XML 部件。

```javascript editor-xlsx
// How to delete a custom XML part from the workbook.

// Delete an XML part.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml1 = xmlManager.Add("<user xmlns='http://example'>John</user>");
let xml2 = xmlManager.Add("<customer xmlns='http://example'>Alex</customer>");
xml1.Delete();
let count = xmlManager.GetCount();
let xmlParts = xmlManager.GetAll();
worksheet.GetRange("A1").SetValue("Remaining XML parts: " + count);
xmlParts.forEach((part, index) => {
    worksheet.GetRange("A" + (index + 2)).SetValue("XML part: " + part.GetXml());
});
```
