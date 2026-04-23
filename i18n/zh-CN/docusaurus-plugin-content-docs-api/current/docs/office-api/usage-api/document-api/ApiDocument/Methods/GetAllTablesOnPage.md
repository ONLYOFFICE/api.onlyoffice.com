# GetAllTablesOnPage

返回给定绝对页面上的表格集合。
💡 此方法可能会稍慢，因为它需要运行文档计算过程以在指定页面上排列表格。

## 语法

```javascript
expression.GetAllTablesOnPage(nPage);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | 必需 | number |  | 页面索引。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)[]

## 示例

此示例展示如何获取给定绝对页面上的表格集合。

```javascript editor-docx
// Get all tables added to the page.

// How to retrieve all tables and add delete its first row.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
doc.Push(table);
let tables = doc.GetAllTablesOnPage(0);
let row1 = tables[0].GetRow(0);
row1.Remove();
```
