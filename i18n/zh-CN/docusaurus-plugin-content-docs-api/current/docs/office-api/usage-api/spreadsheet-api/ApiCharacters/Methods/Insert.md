# Insert

插入字符串以替换指定的字符。

## 语法

```javascript
expression.Insert(String);
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| String | 必需 | string |  | 要插入的字符串。 |

## 返回值

此方法不返回任何数据。

## 示例

用新字符串替换电子表格中单元格文本的选定部分。

```javascript editor-xlsx
// How do I substitute part of a cell's text with different content in a spreadsheet?

// Overwrite a specific slice of characters to correct or update cell content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.Insert("string");
```
