# SetSubscript

设置指定字体的下标属性。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetSubscript(isSubscript);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSubscript | 必需 | boolean |  | 指定文本字符以下标显示。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将选定的文本字符降低到基线以下作为下标。

```javascript editor-xlsx
// How do I format part of the text as subscript in a spreadsheet?

// Shift a run of characters downward to create subscript notation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetSubscript(true);
```
