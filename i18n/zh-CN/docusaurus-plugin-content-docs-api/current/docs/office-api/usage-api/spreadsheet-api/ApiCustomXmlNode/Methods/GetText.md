# GetText

返回当前节点及其子节点的内部文本。
例如：`\<text\>123\<one\>4\</one\>\</text\>` 返回 `“1234”`。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中 XML 元素内存储的纯文本。

```javascript editor-xlsx
// How do I extract readable text from an XML node in a spreadsheet?

// Pull out the human-readable content of an XML entry in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Message: " + text);
```
