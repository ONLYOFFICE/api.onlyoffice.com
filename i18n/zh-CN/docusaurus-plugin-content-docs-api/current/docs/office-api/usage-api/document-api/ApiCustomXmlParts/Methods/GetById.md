# GetById

根据 ID 从 XML 管理器返回自定义 XML 部件。

## 语法

```javascript
expression.GetById(xmlPartId);
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xmlPartId | 必需 | string |  | XML 部件 ID。 |

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md) \| null

## 示例

通过 ID 获取文档中的自定义 XML 部件。

```javascript editor-docx
// Find a custom XML part using its unique ID in a document.

// Display the retrieved XML part's content in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory xmlns='http://example.com'><item>Book</item></inventory>");
let id = xml.GetId();
let retrievedXml = xmlManager.GetById(id);
let paragraph = Api.CreateParagraph();
if (retrievedXml) {
    paragraph.AddText("Found XML part: " + retrievedXml.GetXml());
} else {
    paragraph.AddText("XML part not found");
}
doc.Push(paragraph);
```
