# GetCustomXmlParts

获取与当前工作表关联的自定义 XML 管理器。
此管理器允许操作和访问当前工作表中的自定义 XML 部分。

## 语法

```javascript
expression.GetCustomXmlParts();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomXmlParts](../../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null

## 示例

访问工作表上的自定义 XML 存储以在电子表格中添加和查找 XML 部件。

```javascript editor-xlsx
// How do I store and retrieve custom XML data on a sheet in a spreadsheet?

// Manage structured XML content attached to a worksheet by adding a part and fetching it by ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
worksheet.GetRange("A1").SetValue("Retrieved XML: " + retrievedXml.GetXml());
```
