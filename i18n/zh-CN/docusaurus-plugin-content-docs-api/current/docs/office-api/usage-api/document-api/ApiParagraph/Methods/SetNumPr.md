# SetNumPr

指定当前段落引用当前文档中的编号定义实例。

继承自 [ApiParaPr.SetNumPr](../../ApiParaPr/Methods/SetNumPr.md)。

## 语法

```javascript
expression.SetNumPr(oNumPr, nLvl);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oNumPr | 必需 | [ApiNumbering](../../ApiNumbering/ApiNumbering.md) |  | 指定编号定义。 |
| nLvl | 可选 | number | 0 | 指定编号级别引用。如果当前 ApiParaPr 类实例是段落的直接格式设置，则必须指定此参数。否则，如果当前 ApiParaPr 类实例是 ApiStyle 属性的一部分，则此参数将被忽略。 |

## 返回值

boolean

## 示例

在文档中将现有列表中的特定编号级别分配给段落。

```javascript editor-docx
// How do I link a paragraph to a particular level of a numbered or bulleted list in a document?

// Place a paragraph at a chosen depth within a list hierarchy in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.SetNumPr(numbering, 3);
paragraph.AddText("This is a paragraph styled as level 4 of a bulleted list.");
doc.Push(paragraph);
```
