# MoveToNextCell

将光标移动到下一个表格单元格。

## 语法

```javascript
expression.MoveToNextCell(count);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | 可选 | number | 1 | 要移动经过的单元格数。 |

## 返回值

boolean

## 示例

将光标移动到幻灯片中表格的下一个单元格。

```javascript editor-pptx
// Navigate between adjacent table cells without selecting a cell directly.

// Add text to the next cell after moving the cursor to it on a slide.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let table = Api.CreateTable(2, 2);
slide.AddObject(table);
table.Cells[0][0].Select();
presentation.EnterText("First cell");
presentation.MoveToNextCell();
presentation.EnterText("Second cell");
```
