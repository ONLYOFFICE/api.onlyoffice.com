# CreateSection

创建一个在指定段落处结束的新文档节。允许为当前节设置局部参数——页面大小、页脚、页眉、分栏等。

## 语法

```javascript
expression.CreateSection(oParagraph);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oParagraph | 必需 | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 在其后插入新文档节的段落。段落必须在文档中。 |

## 返回值

[ApiSection](../../ApiSection/ApiSection.md) \| null

## 示例

在文档中段落之后插入具有自定义页面大小和边距的新节。

```javascript editor-docx
// How do I split content into sections with different page layouts in a document?

// Give one part of a document its own column count, margins, and header spacing without affecting the rest in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section = doc.CreateSection(paragraph);
section.SetEqualColumns(1, 720);
section.SetPageSize(12240, 15840);
section.SetPageMargins(1440, 1440, 1440, 1440);
section.SetHeaderDistance(720);
section.SetFooterDistance(576);
paragraph = Api.CreateParagraph();
paragraph.SetSpacingBefore(100, true);
paragraph.SetSpacingAfter(360);
paragraph.AddText("This is a paragraph in a new section");
doc.Push(paragraph);
```
