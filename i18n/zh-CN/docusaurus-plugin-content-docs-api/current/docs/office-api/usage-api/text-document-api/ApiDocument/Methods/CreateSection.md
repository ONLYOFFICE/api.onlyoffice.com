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
| oParagraph | 必需 | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 将在该段落之后插入新文档节。段落必须在文档中。 |

## 返回值

[ApiSection](../../ApiSection/ApiSection.md) \| null

## 示例

此示例创建一个在指定段落处结束的新文档节。

```javascript editor-docx
// How to create a section indicating its size, margins, etc.

// Create a paragraph under the section.

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
