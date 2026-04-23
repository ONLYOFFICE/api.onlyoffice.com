# GetTagsOfAllContentControls

返回文档中所有内容控件使用的所有标签的列表。

## 语法

```javascript
expression.GetTagsOfAllContentControls();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

String[]

## 示例

此示例展示如何获取文档中所有内容控件使用的所有标签列表。

```javascript editor-docx
// How to get the style of the heading.

// Display the style name of the "Heading 6".

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("Inline content control");
inlineLvlSdt.SetTag("Tag 1");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("Block text content control");
blockLvlSdt.SetTag("Tag 2");
doc.AddElement(0, blockLvlSdt);
let tags = doc.GetTagsOfAllContentControls();
paragraph = Api.CreateParagraph();
paragraph.AddText("Content controls tags: ");
paragraph.AddLineBreak();
for (let i = 0; i < tags.length; i++ ){
	paragraph.AddText(tags[i]);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);
```
