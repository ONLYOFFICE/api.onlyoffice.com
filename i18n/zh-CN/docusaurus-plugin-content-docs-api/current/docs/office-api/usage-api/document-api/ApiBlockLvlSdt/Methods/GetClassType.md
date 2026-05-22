# GetClassType

返回 ApiBlockLvlSdt 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"blockLvlSdt"

## 示例

读取内容控件的对象类型并在文档中显示。

```javascript editor-docx
// How do I find out what type of object a content control is in a document?

// Identify a content control by its type label and write the result as text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
paragraph = doc.GetElement(1);
paragraph.AddText("Class type: " + blockLvlSdt.GetClassType());
```
