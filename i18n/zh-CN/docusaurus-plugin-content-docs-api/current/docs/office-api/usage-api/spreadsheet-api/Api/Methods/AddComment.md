# AddComment

返回 ApiComment 对象的数组。

## 语法

```javascript
expression.AddComment(sText, sAuthor);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注文本。 |
| sAuthor | 必需 | string |  | 作者姓名（可选）。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md) \| null

## 示例

在电子表格中向单元格附加带有作者名称的批注。

```javascript editor-xlsx
// How do I add a comment to a cell in a spreadsheet?

// Annotate a cell with reviewer notes and display the comment text in a spreadsheet.

Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2");
let comments = Api.GetComments();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: " + comments[0].GetText());
worksheet.GetRange("B1").SetValue("Comment Author: " + comments[0].GetAuthorName());
```
