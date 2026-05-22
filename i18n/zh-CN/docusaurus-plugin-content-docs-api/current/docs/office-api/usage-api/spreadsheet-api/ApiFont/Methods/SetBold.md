# SetBold

设置指定字体的粗体属性。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定文本字符以粗体显示。 |

## 返回值

此方法不返回任何数据。

## 示例

使电子表格中选定的文本字符显示为粗体。

```javascript editor-xlsx
// How do I apply bold formatting to specific characters in a spreadsheet?

// Turn on bold weight for a portion of cell text to make it stand out in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
```
