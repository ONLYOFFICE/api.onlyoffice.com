# Add

向文档添加目录并返回该目录。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Add(oTocPr, oRange);
```

`expression` - 表示 [ApiTablesOfContents](../ApiTablesOfContents.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTocPr | 可选 | [TocPr](../../Enumeration/TocPr.md) | \{\} | 目录属性。 |
| oRange | 可选 | [ApiRange](../../ApiRange/ApiRange.md) |  | 目录要替换的范围。如果省略，则在当前位置插入目录。 |

## 返回值

[ApiTableOfContents](../../ApiTableOfContents/ApiTableOfContents.md) \| null

## 示例

向文档插入替换指定区域的新目录。

```javascript editor-docx
// Build the heading outline, then place an anchor paragraph where the table of contents should appear.

// Add the table of contents to the collection, replacing the anchor range, and return it.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let anchor = Api.CreateParagraph();
anchor.AddText("Table of contents goes here");
doc.Push(anchor);
let tablesOfContents = doc.GetTablesOfContents();
let range = anchor.GetRange();
let toc = tablesOfContents.Add({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 9}, "TocStyle": "standard"}, range);
```
