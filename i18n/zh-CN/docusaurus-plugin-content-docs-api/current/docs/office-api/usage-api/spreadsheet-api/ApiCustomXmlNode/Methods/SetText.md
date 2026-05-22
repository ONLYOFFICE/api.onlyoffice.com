# SetText

设置当前 XML 节点的文本内容。

## 语法

```javascript
expression.SetText(str);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| str | 必需 | string |  | 要设置给节点的文本内容。 |

## 返回值

boolean

## 示例

向 XML 元素写入可读文本以更新电子表格中的内容。

```javascript editor-xlsx
// How do I change the text inside an XML node in a spreadsheet?

// Store a new text value inside an existing XML entry in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message></message>");
let messageNode = xml.GetNodes('/message')[0];
messageNode.SetText("Updated message from CustomXml!");
let updatedText = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Updated message: " + updatedText);
```
