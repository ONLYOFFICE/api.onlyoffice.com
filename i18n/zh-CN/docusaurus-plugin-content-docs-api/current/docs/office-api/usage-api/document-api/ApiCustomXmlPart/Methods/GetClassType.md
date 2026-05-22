# GetClassType

返回 ApiCustomXmlPart 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customXmlPart"

## 示例

获取文档中自定义 XML 部件的类类型。

```javascript editor-docx
// How do I identify what kind of object a custom XML part is in a document?

// Verify the object type before performing type-specific operations in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let classType = xml.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
