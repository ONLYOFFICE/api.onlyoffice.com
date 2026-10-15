# SetTableTitle

设置表格标题（题注）。

继承自 [ApiTablePr.SetTableTitle](../../ApiTablePr/Methods/SetTableTitle.md)。

## 语法

```javascript
expression.SetTableTitle(sTitle);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | 必需 | string |  | 要设置的表格标题。 |

## 返回值

boolean

## 示例

在文档中为表格分配简短标题。

```javascript editor-docx
// How do I give a table a named title in a document?

// Label a table so it can be identified by name in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableTitle("Table 1");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table title: " + table.GetTableTitle());
doc.Push(table);
```
