# GetXml

返回当前节点的 XML 字符串。

## 语法

```javascript
expression.GetXml();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在电子表格中将节点及其所有内容导出为原始 XML 字符串。

```javascript editor-xlsx
// How do I get the full XML markup for a specific node in a spreadsheet?

// Capture a node's complete structure as text to inspect or reuse it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<book><title>JavaScript Guide</title><author>John Smith</author></book>");
let bookNode = xml.GetNodes('/book')[0];
let xmlString = bookNode.GetXml();
worksheet.GetRange("A1").SetValue("XML content:");
worksheet.GetRange("A2").SetValue(xmlString);
```
