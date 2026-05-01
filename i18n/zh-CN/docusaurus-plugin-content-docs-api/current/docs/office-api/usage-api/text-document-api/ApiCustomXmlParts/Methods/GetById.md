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

通过命名空间获取文档中的自定义 XML 部件。

```javascript editor-docx
// How can I get the by id using a custom XML parts in a document?

// Get the by id for a custom XML parts in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content xmlns='http://example.com'><text>Example XML</text></content>";
let xml = xmlManager.Add(xmlText);
let namespace = "http://example.com";
let xmlParts = xmlManager.GetByNamespace(namespace);
let infoParagraph = Api.CreateParagraph();
xmlParts.forEach(part => {
    infoParagraph.AddText("XML part: " + part.GetXml());
});
doc.Push(infoParagraph);
```
