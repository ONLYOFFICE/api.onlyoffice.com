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

此示例演示如何设置自定义 XML 节点的文本内容。

```javascript editor-xlsx
// How to update text content in custom XML node elements.

// Set text for message node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message></message>");
let messageNode = xml.GetNodes('/message')[0];
messageNode.SetText("Updated message from CustomXml!");
let updatedText = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Updated message: " + updatedText);
```
