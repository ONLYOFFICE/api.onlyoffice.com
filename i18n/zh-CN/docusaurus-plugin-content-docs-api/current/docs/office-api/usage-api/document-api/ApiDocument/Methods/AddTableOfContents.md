# AddTableOfContents

向当前文档添加目录。
💡 请注意，新目录将替换现有目录。

## 语法

```javascript
expression.AddTableOfContents(oTocPr);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTocPr | 可选 | [TocPr](../../Enumeration/TocPr.md) | &#123;&#125; | 目录属性。 |

## 返回值

boolean

## 示例

此示例向文档添加目录。

```javascript editor-docx
// How to add headings to the document and generate a table of contents.

// Insert a table of contents specifying its properties.

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
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr);
```
