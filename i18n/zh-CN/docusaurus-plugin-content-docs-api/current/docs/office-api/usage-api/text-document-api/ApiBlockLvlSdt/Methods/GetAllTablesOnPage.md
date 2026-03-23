# GetAllTablesOnPage

返回给定绝对页面上的表格集合。
💡 此方法可能会稍慢，因为它需要运行文档计算过程以在指定页面上排列表格。

## 语法

```javascript
expression.GetAllTablesOnPage(page);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| page | 必需 |  |  | 页码。如果未指定，将返回空数组。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)[]

## 示例

此示例展示如何获取给定绝对页面上的表格集合。

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
blockLvlSdt.AddElement(table, 0);

table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
blockLvlSdt.AddElement(table, 1);
doc.AddElement(0, blockLvlSdt);

let tablesOnPage = blockLvlSdt.GetAllTablesOnPage(0);
let cell = tablesOnPage[0].GetRow(1).GetCell(0);
tablesOnPage[0].RemoveRow(cell);
```
