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

获取文档中自定义 XML 部件的 ID。

```javascript editor-docx
// How do I get the id in a document?

// Get the id using a custom XML part object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let xmlId = xml.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Custom XML ID: " + xmlId);
doc.Push(paragraph);
```
