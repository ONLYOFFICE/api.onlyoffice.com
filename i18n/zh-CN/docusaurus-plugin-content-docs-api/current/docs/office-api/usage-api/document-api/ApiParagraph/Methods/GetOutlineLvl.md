# GetOutlineLvl

返回指定属性的大纲级别。

继承自 [ApiParaPr.GetOutlineLvl](../../ApiParaPr/Methods/GetOutlineLvl.md)。

## 语法

```javascript
expression.GetOutlineLvl();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number \| undefined

## 示例

读取文档中分配给每个段落的大纲级别。

```javascript editor-docx
// How do I find out the outline level of a paragraph in a document?

// Create paragraphs at every outline level and display each level number in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('Outline level of this paragraph is ' + firstParagraph.GetOutlineLvl() + '.');

for (let levelIndex = 0; levelIndex < 9; levelIndex++) {
	const paragraph = Api.CreateParagraph();
	paragraph.SetOutlineLvl(levelIndex);

	const level = paragraph.GetOutlineLvl() + 1;
	paragraph.AddText('This is a paragraph with outline level ' + level + '.');
	doc.Push(paragraph);
}
```
