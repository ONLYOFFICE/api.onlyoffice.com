# SetText

设置批注文本。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 批注的新文本。 |

## 返回值

此方法不返回任何数据。

## 示例

更新电子表格中现有批注的书面消息。

```javascript editor-xlsx
// How do I replace the text inside a comment with new content in a spreadsheet?

// Overwrite an outdated comment message with a revised note in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.SetText("New comment text");
```
