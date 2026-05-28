# AddText

将文本追加到单元格内容的末尾。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要追加的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-docx
// How do I add text to a table cell in a document?

// Insert a sentence into the last paragraph of a cell to populate a table in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let cell = table.Cells[0][0];
cell.AddText("Cell content.");
```
