# AddTableOfContents

向当前文档添加目录。

## 语法

```javascript
expression.AddTableOfContents(oTocPr, oRange);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTocPr | 可选 | [TocPr](../../Enumeration/TocPr.md) | \{\} | 目录属性。 |
| oRange | 可选 | [ApiRange](../../ApiRange/ApiRange.md) |  | 目录要替换的范围。如果省略，则在当前位置插入目录。 |

## 返回值

[ApiTableOfContents](../../ApiTableOfContents/ApiTableOfContents.md) \| null \| undefined

## 示例

从文档中的标题生成目录。

```javascript editor-docx
// Build the heading outline, then add an anchor paragraph where the table of contents should appear.

// Insert the table of contents so it replaces the anchor range.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
newDocumentStyle = doc.GetStyle("Heading 2");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 2");
doc.Push(paragraph);
let anchor = Api.CreateParagraph();
anchor.AddText("Table of contents goes here");
doc.Push(anchor);
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 9}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr, anchor.GetRange());
```
