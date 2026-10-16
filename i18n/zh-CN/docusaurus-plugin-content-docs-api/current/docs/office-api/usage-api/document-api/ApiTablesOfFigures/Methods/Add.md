# Add

向文档添加图表目录并返回该图表目录。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Add(oTofPr, oRange);
```

`expression` - 表示 [ApiTablesOfFigures](../ApiTablesOfFigures.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTofPr | 可选 | [TofPr](../../Enumeration/TofPr.md) | \{\} | 图表目录属性。 |
| oRange | 可选 | [ApiRange](../../ApiRange/ApiRange.md) |  | 图表目录要替换的范围。如果省略，则在当前位置插入图表目录。 |

## 返回值

[ApiTableOfFigures](../../ApiTableOfFigures/ApiTableOfFigures.md) \| null

## 示例

向文档插入替换指定区域的新图表目录。

```javascript editor-docx
// Add a captioned figure, then place an anchor paragraph where the table of figures should appear.

// Add the table of figures to the collection, replacing the anchor range, and return it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let anchor = Api.CreateParagraph();
anchor.AddText("Table of figures goes here");
doc.Push(anchor);
let tablesOfFigures = doc.GetTablesOfFigures();
let range = anchor.GetRange();
let tof = tablesOfFigures.Add({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"}, range);
```
