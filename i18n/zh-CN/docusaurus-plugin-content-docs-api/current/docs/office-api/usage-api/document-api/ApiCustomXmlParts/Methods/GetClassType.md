# GetClassType

返回 ApiCustomXmlParts 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customXmlParts"

## 示例

识别文档中自定义 XML 部件管理器的类类型。

```javascript editor-docx
// How do I get the class type of a custom XML parts object in a document?

// Confirm the object kind before calling type-specific operations on the XML manager in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);
```
