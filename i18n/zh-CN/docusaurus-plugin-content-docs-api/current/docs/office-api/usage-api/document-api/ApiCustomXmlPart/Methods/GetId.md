# GetId

返回自定义 XML 部件的 ID。

## 语法

```javascript
expression.GetId();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中自定义 XML 部件的唯一标识符。

```javascript editor-docx
// How do I get the ID assigned to a custom XML part in a document?

// Store or reference a custom XML part by its ID for later lookup in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let xmlId = xml.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Custom XML ID: " + xmlId);
doc.Push(paragraph);
```
