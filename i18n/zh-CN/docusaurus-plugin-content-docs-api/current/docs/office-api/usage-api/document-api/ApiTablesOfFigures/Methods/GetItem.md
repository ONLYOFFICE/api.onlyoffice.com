# GetItem

返回集合中指定位置的图表目录。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetItem(nIndex);
```

`expression` - 表示 [ApiTablesOfFigures](../ApiTablesOfFigures.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 图表目录的位置（从零开始）。 |

## 返回值

[ApiTableOfFigures](../../ApiTableOfFigures/ApiTableOfFigures.md) \| null

## 示例

按索引从文档集合中获取图表目录。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Retrieve the first table of figures from the collection by its zero-based index.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tablesOfFigures = doc.GetTablesOfFigures();
tablesOfFigures.Add({"BuildFrom": "Figure", "LabelNumber": true});
let tof = tablesOfFigures.GetItem(0);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Item class type: " + tof.GetClassType());
doc.Push(resultParagraph);
```
