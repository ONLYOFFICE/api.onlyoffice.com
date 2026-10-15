# SetPr

将指定属性应用于目录并重新生成目录。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetPr(oTocPr);
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTocPr | 必需 | [TocPr](../../Enumeration/TocPr.md) |  | 目录属性。 |

## 返回值

boolean

## 示例

将目录属性应用到现有目录。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Update the page numbers, leader, outline range, and style of the table of contents at once.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetPr({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dash", "FormatAsLinks": true, "BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 3}, "TocStyle": "modern"});
```
