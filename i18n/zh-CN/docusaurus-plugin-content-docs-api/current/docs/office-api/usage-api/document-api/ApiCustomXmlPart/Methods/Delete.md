# Delete

从自定义 XML 管理器中删除 XML。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何删除自定义 XML 部件。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml1 = xmlManager.Add("<user xmlns='http://example'>John</user>");
let xml2 = xmlManager.Add("<customer xmlns='http://example'>Alex</customer>");
xml1.Delete();
let count = xmlManager.GetCount();
let xmlParts = xmlManager.GetAll();
let infoParagraph = Api.CreateParagraph();
xmlParts.forEach(part => {
    infoParagraph.AddText("XML part: " + part.GetXml());
});
doc.Push(infoParagraph);
```
