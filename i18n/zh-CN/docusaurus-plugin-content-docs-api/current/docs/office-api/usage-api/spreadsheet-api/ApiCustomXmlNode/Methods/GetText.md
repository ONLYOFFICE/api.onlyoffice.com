# GetText

返回当前节点及其子节点的内部文本。
例如：`&lt;text&gt;123&lt;one&gt;4&lt;/one&gt;&lt;/text&gt;` 返回 `"1234"`。

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

此示例演示如何获取自定义 XML 节点的文本内容。

```javascript editor-xlsx
// How to retrieve text content from custom XML node elements.

// Get text from message node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Message: " + text);
```
