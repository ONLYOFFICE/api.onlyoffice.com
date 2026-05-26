# SetText

设置指定字符的文本。

## 语法

```javascript
expression.SetText(Text);
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Text | 必需 | string |  | 要设置的文本。 |

## 返回值

此方法不返回任何数据。

## 示例

替换电子表格中单元格内目标字符组的文本。

```javascript editor-xlsx
// How do I change the actual text stored in a specific character selection within a cell in a spreadsheet?

// Rewrite a defined portion of cell content to reflect updated information in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetText
```
