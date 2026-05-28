# GetClassType

返回 ApiNumbering 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiNumbering](../ApiNumbering.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"numbering"

## 示例

检索文档中编号对象的类类型。

```javascript editor-docx
// How do I identify the class type of a numbering definition in a document?

// Confirm the object type of a numbering list before processing it programmatically in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	let numLvl = numbering.GetLevel(nLvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (nLvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let classType = numbering.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
