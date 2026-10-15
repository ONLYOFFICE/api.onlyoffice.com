# SetNumbering

指定当前段落引用当前文档中的编号定义实例。

## 语法

```javascript
expression.SetNumbering(numberingLevel);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| numberingLevel | 必需 | [ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md) \| null \| undefined |  | 用于为段落分配编号的编号级别，或传递 *undefined*/*null* 以移除编号。 |

## 返回值

boolean

## 示例

在文档中为段落应用项目符号或编号列表样式。

```javascript editor-docx
// How do I create a multi-level bulleted list from a set of paragraphs in a document?

// Turn plain paragraphs into an ordered or unordered list in a document.

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
```
