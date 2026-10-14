# MoveToNextCell

将光标移动到下一个表格单元格。

## 语法

```javascript
expression.MoveToNextCell(count);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | 可选 | number | 1 | 要移动经过的单元格数。 |

## 返回值

boolean

## 示例

将光标移动到文档中表格的下一个单元格。

```javascript editor-docx
// Navigate between adjacent table cells without selecting a cell directly.

// Add text at the cursor position after moving to the next cell in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.InsertContent([table]);
let cell = table.Cells[0][0];
cell.GetContent().GetRange(0, 0).MoveCursorToPos(0);
doc.MoveToNextCell();
doc.EnterText("Next cell");
```
