# GetOutlineLvl

返回指定属性的大纲级别。

Inherited from [ApiParaPr.GetOutlineLvl](../../ApiParaPr/Methods/GetOutlineLvl.md).

## 示例

此示例展示如何获取不同级别段落的大纲级别。

```javascript editor-docx
const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('To see outline levels, open "Headings" on the "View" tab.');

const levels = [1, 5, 8];
for (let i = 0; i < levels.length; i++) {
	const paragraph = Api.CreateParagraph();
	const paraPr = paragraph.GetParaPr();
	paraPr.SetOutlineLvl(levels[i]);
	paragraph.AddText('Outline level: ' + paraPr.GetOutlineLvl());
	doc.Push(paragraph);
}
```

