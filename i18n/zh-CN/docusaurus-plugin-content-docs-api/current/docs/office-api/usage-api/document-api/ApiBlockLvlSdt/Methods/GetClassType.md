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

检查文档中块级内容控件返回的类类型。

```javascript editor-docx
// How do I check what type a block-level content control object is in a document?

// Retrieve and output the class type string for a block-level content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
paragraph = doc.GetElement(1);
paragraph.AddText("Class type: " + blockLvlSdt.GetClassType());
```
