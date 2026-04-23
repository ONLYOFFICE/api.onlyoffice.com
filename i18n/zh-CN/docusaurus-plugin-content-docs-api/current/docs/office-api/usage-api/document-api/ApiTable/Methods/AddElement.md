# AddElement

使用在单元格中的位置添加段落、表格或块级内容控件。

## 语法

```javascript
expression.AddElement(oCell, nPos, oElement);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 必需 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 将添加指定元素的单元格。 |
| nPos | 必需 | number |  | 将添加指定元素的单元格中的位置。 |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将在当前位置添加的文档元素。 |

## 返回值

boolean

## 示例

此示例使用在单元格中的位置添加段落。

```javascript editor-docx
// How to add text to the cell.

// Insert a paragraph object to the table cell.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
```
