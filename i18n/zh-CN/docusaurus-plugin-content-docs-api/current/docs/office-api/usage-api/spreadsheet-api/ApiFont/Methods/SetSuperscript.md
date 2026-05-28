# SetSuperscript

设置指定字体的上标属性。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetSuperscript(isSuperscript);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSuperscript | 必需 | boolean |  | 指定文本字符以上标显示。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将选定的文本字符提升到基线以上作为上标。

```javascript editor-xlsx
// How do I format part of the text as superscript in a spreadsheet?

// Lift a run of characters upward to create superscript notation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSuperscript(true);
```
