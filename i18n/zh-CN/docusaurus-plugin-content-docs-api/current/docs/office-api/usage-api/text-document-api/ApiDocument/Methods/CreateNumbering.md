# CreateNumbering

创建具有指定类型的抽象多级编号。

## 语法

```javascript
expression.CreateNumbering(sType);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 可选 | "bullet" \| "numbered" | "bullet" | 将要创建的编号类型。 |

## 返回值

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## 示例

在文档中创建 "bullet" 类型的抽象多级编号。

```javascript editor-docx
// How to add a paragraph with numbering in a document.

// Add a text to the paragraph, make it bulleted in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
```
