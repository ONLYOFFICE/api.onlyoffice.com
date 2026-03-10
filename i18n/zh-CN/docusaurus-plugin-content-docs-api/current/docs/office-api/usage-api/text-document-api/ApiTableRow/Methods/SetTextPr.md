# SetTextPr

设置当前行的文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将设置到当前行的文本属性。 |

## 返回值

boolean

## 示例

此示例设置当前行的文本属性。

```javascript editor-docx
// Make the row text bold.

// How to apply new text properties to the table row.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
let textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.SetTextPr(textPr);
doc.Push(table);
```
