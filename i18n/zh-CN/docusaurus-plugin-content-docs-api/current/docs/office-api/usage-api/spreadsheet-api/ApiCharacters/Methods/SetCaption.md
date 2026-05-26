# SetCaption

设置表示指定字符范围文本的字符串值。

## 语法

```javascript
expression.SetCaption(Caption);
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Caption | 必需 | string |  | 表示指定字符范围文本的字符串值。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中单元格内选定的字符范围分配新的文本标签。

```javascript editor-xlsx
// How do I update the visible text of a specific character range inside a cell in a spreadsheet?

// Relabel a portion of cell content without affecting the rest of the cell's text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetCaption("string");
```
