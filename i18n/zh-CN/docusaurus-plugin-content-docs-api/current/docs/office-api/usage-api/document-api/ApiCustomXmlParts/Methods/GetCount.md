# GetCount

返回 XML 管理器中自定义 XML 部件的数量。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算文档中存储的自定义 XML 部件数量。

```javascript editor-docx
// How do I find the total number of custom XML parts in a document?

// Verify that all expected XML data blocks were added by checking the part count in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
xmlManager.Add("<products><item><name>Laptop</name><price>999</price></item></products>");
xmlManager.Add("<user><name>John Doe</name><email>john@example.com</email></user>");
let count = xmlManager.GetCount();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("There are " + count + " custom XML parts in the document.");
doc.Push(infoParagraph);
```
