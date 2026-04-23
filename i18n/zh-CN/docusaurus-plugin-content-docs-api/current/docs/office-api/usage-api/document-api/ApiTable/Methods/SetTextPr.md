# SetTextPr

将文本设置应用于表格的全部内容。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将设置到当前表格的文本属性。 |

## 返回值

boolean

## 示例

此示例将文本设置应用于表格的全部内容。

```javascript editor-docx
// How to create a text properties and apply it to the table.

// Create a table and make its text bold and bigger.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
table.GetCell(0, 2).GetContent().GetElement(0).AddText("Cell 3");
doc.Push(table);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
table.SetTextPr(textPr);
```
