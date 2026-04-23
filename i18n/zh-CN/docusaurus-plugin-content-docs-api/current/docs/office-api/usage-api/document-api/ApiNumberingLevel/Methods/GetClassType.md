# GetClassType

返回 ApiNumberingLevel 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"numberingLevel"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How to get a class type of ApiNumberingLevel.

// Retrieve class type of ApiNumberingLevel object and insert it to the document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + numbering.GetLevel(0).GetClassType());

```
