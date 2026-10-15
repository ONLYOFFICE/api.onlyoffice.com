# SetTableDescription

设置表格说明。

继承自 [ApiTablePr.SetTableDescription](../../ApiTablePr/Methods/SetTableDescription.md)。

## 语法

```javascript
expression.SetTableDescription(sDescr);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDescr | 必需 | string |  | 要设置的表格说明。 |

## 返回值

boolean

## 示例

在文档中为表格附加纯文本描述。

```javascript editor-docx
// How do I store a written summary alongside a table in a document?

// Provide accessible alternative text for a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + table.GetTableDescription());
doc.Push(table);
```
