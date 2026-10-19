# GetItem

返回集合中指定位置的目录。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetItem(nIndex);
```

`expression` - 表示 [ApiTablesOfContents](../ApiTablesOfContents.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 目录的位置（从零开始）。 |

## 返回值

[ApiTableOfContents](../../ApiTableOfContents/ApiTableOfContents.md) \| null

## 示例

按索引从文档集合中获取目录。

```javascript editor-docx
// Add a table of contents built from the document headings to the collection.

// Retrieve the first table of contents from the collection by its zero-based index.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let tablesOfContents = doc.GetTablesOfContents();
tablesOfContents.Add({"BuildFrom": {"OutlineLvls": 9}});
let toc = tablesOfContents.GetItem(0);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Item class type: " + toc.GetClassType());
doc.Push(resultParagraph);
```
