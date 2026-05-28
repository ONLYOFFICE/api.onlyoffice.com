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

收集文档中分配给所有内容控件的标签。

```javascript editor-docx
// How do I list every content control tag present in a document?

// Identify and display the tag values of both inline and block-level content controls for auditing purposes.

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
