# SetText

用指定文本替换当前表格单元格的所有内容，
保留第一个段落的格式。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要设置的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-pptx
// How do I overwrite the text of a table cell in a presentation?

// Clear an existing cell and write a new sentence into it, preserving formatting in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Original cell content.");
cell.SetText("Updated cell content.");

slide.AddObject(table);
```
